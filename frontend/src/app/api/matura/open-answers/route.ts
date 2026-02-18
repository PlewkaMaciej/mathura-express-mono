export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import openai from "@/lib/openai";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

type Body = {
  userMaturaId: string;
  openTaskId: string;
  answer?: string;
  screenshot?: string | null;
};

type GradeJSON = {
  awardedPoints: number;
  feedback: string;
  justification: string;
  criteriaBreakdown: Array<{
    criterion: string;
    points: number;
    maxPoints: number;
    note: string;
  }>;
};

function clampInt(value: unknown, min: number, max: number) {
  const n =
    typeof value === "number" && Number.isFinite(value)
      ? Math.trunc(value)
      : min;
  return Math.max(min, Math.min(max, n));
}

export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const body = (await req.json()) as Partial<Body>;

    const userMaturaId = String(body.userMaturaId ?? "");
    const openTaskId = String(body.openTaskId ?? "");
    const answer = String(body.answer ?? "");
    let screenshot = body.screenshot ?? null;

    if (!userMaturaId || !openTaskId) {
      return NextResponse.json(
        { ok: false, error: "Brak wymaganych pól." },
        { status: 400 },
      );
    }

    if (!answer.trim() && !screenshot) {
      return NextResponse.json(
        { ok: false, error: "Odpowiedź nie może być pusta." },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json(
        { ok: false, error: "User not found" },
        { status: 404 },
      );
    }

    const userMatura = await prisma.userMatura.findUnique({
      where: { id: userMaturaId },
      select: { id: true, userId: true },
    });

    if (!userMatura || userMatura.userId !== user.id) {
      return NextResponse.json(
        { ok: false, error: "Brak dostępu." },
        { status: 403 },
      );
    }

    const task = await prisma.openTasks.findUnique({
      where: { id: openTaskId },
      select: {
        content: true,
        rubric: true,
        referenceAnswer: true,
        maxPoints: true,
      },
    });

    if (!task) {
      return NextResponse.json(
        { ok: false, error: "Nie znaleziono zadania." },
        { status: 404 },
      );
    }

    const maxPoints = task.maxPoints ?? 2;

    // 🔥 UPLOAD DO IMAGEKIT (jeśli base64)
    let uploadedUrl: string | null = null;

    if (screenshot?.startsWith("data:image")) {
      const base64Data = screenshot.split(",")[1];

      const upload = await imagekit.upload({
        file: base64Data,
        fileName: `matura-${Date.now()}.jpg`,
        folder: "/matura",
      });

      uploadedUrl = upload.url;
      screenshot = uploadedUrl; // teraz screenshot = prawdziwy URL
    }

    // 🔥 ZAPIS ODPOWIEDZI + SCREENSHOT
    const userOpenAnswer = await prisma.userOpenAnswer.upsert({
      where: {
        userMaturaId_openTaskId: {
          userMaturaId,
          openTaskId,
        },
      },
      create: {
        userMaturaId,
        openTaskId,
        answer: answer.trim() ? answer : null,
        screenshotUrl: uploadedUrl ?? null,
      },
      update: {
        answer: answer.trim() ? answer : null,
        screenshotUrl: uploadedUrl ?? null,
      },
      select: { id: true },
    });

    const instructions = `
Jesteś egzaminatorem polskiej matury (CKE).
Oceniasz wyłącznie według podanej rubryki.
Nie dodawaj własnych kryteriów.
Przyznaj 0..${maxPoints} punktów.
Suma criteriaBreakdown.points MUSI równać się awardedPoints.
Zwróć WYŁĄCZNIE JSON zgodny ze schematem.
`;

    const rubricText =
      task.rubric?.trim() || "Oceń zgodność odpowiedzi z poleceniem.";

    const referenceText = task.referenceAnswer?.trim() || "(brak)";

    const inputText = `
### Treść zadania
${task.content}

### Kryteria
${rubricText}

### Odpowiedź wzorcowa
${referenceText}

### Odpowiedź ucznia
${answer || "(odpowiedź w formie obrazu)"}
`;

    const schema = {
      type: "object",
      additionalProperties: false,
      properties: {
        awardedPoints: {
          type: "integer",
          minimum: 0,
          maximum: maxPoints,
        },
        feedback: { type: "string" },
        justification: { type: "string" },
        criteriaBreakdown: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              criterion: { type: "string" },
              points: { type: "integer" },
              maxPoints: { type: "integer" },
              note: { type: "string" },
            },
            required: ["criterion", "points", "maxPoints", "note"],
          },
        },
      },
      required: [
        "awardedPoints",
        "feedback",
        "justification",
        "criteriaBreakdown",
      ],
    };

    let ai;

    if (answer.trim()) {
      ai = await openai.responses.create({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        instructions,
        input: inputText,
        store: false,
        text: {
          format: {
            type: "json_schema",
            name: "matura_open_grade",
            schema,
          },
        },
      });
    } else {
      ai = await openai.responses.create({
        model: "gpt-4o",
        instructions,
        input: [
          {
            role: "user",
            content: [
              { type: "input_text", text: inputText },
              {
                type: "input_image",
                image_url: screenshot!, // 🔥 teraz URL z ImageKit
              },
            ],
          },
        ] as any,
        store: false,
        text: {
          format: {
            type: "json_schema",
            name: "matura_open_grade",
            schema,
          },
        },
      });
    }

    const raw =
      (ai as any).output_text ??
      (ai as any).output?.[0]?.content?.[0]?.text ??
      "";

    let grade: GradeJSON;

    try {
      grade = JSON.parse(raw);
    } catch {
      return NextResponse.json(
        { ok: false, error: "AI zwróciło niepoprawny JSON." },
        { status: 502 },
      );
    }

    const awardedPoints = clampInt(grade.awardedPoints, 0, maxPoints);

    const finalGrade: GradeJSON = {
      awardedPoints,
      feedback: String(grade.feedback ?? "").slice(0, 1000),
      justification: String(grade.justification ?? "").slice(0, 3000),
      criteriaBreakdown: (grade.criteriaBreakdown ?? []).map((x) => ({
        criterion: String(x.criterion ?? "").slice(0, 200),
        points: clampInt(x.points, 0, maxPoints),
        maxPoints: clampInt(x.maxPoints, 0, maxPoints),
        note: String(x.note ?? "").slice(0, 500),
      })),
    };

    const result = await prisma.$transaction(async (tx) => {
      await tx.userOpenAnswer.update({
        where: { id: userOpenAnswer.id },
        data: {
          awardedPoints,
          feedback: finalGrade.feedback,
          gradingJson: JSON.stringify(finalGrade),
          gradedAt: new Date(),
        },
      });

      const openAgg = await tx.userOpenAnswer.aggregate({
        where: { userMaturaId },
        _sum: { awardedPoints: true },
      });

      const openSum = openAgg._sum.awardedPoints ?? 0;

      const closedCorrect = await tx.userClosedAnswer.findMany({
        where: { userMaturaId, isCorrect: true },
        select: { closedTask: { select: { points: true } } },
      });

      const closedSum = closedCorrect.reduce(
        (acc, x) => acc + (x.closedTask?.points ?? 0),
        0,
      );

      const earnedPoints = openSum + closedSum;

      await tx.userMatura.update({
        where: { id: userMaturaId },
        data: { earnedPoints },
      });

      return { earnedPoints };
    });

    return NextResponse.json({
      ok: true,
      earnedPoints: result.earnedPoints,
      open: {
        openTaskId,
        awardedPoints,
        feedback: finalGrade.feedback,
        gradingJson: finalGrade,
        screenshotUrl: uploadedUrl,
      },
    });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: String(e?.message ?? "Server error") },
      { status: 500 },
    );
  }
}
