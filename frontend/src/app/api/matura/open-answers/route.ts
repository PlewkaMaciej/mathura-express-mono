export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "../../../../../lib/prisma";
import openai from "../../../../../lib/openai";

type Body = {
  userMaturaId: string;
  openTaskId: string;
  answer: string;
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
        { status: 401 }
      );
    }

    const body = (await req.json()) as Partial<Body>;
    const userMaturaId = String(body.userMaturaId ?? "");
    const openTaskId = String(body.openTaskId ?? "");
    const answer = String(body.answer ?? "");

    if (!userMaturaId || !openTaskId) {
      return NextResponse.json(
        { ok: false, error: "Brak wymaganych pól: userMaturaId, openTaskId." },
        { status: 400 }
      );
    }

    if (!answer.trim()) {
      return NextResponse.json(
        { ok: false, error: "Odpowiedź nie może być pusta." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json(
        { ok: false, error: "User not found" },
        { status: 404 }
      );
    }

    const userMatura = await prisma.userMatura.findUnique({
      where: { id: userMaturaId },
      select: { id: true, userId: true },
    });

    if (!userMatura || userMatura.userId !== user.id) {
      return NextResponse.json(
        { ok: false, error: "Brak dostępu." },
        { status: 403 }
      );
    }

    const task = await prisma.openTasks.findUnique({
      where: { id: openTaskId },
      select: {
        id: true,
        content: true,
        rubric: true,
        referenceAnswer: true,
        maxPoints: true,
      },
    });

    if (!task) {
      return NextResponse.json(
        { ok: false, error: "Nie znaleziono zadania open." },
        { status: 404 }
      );
    }

    const maxPoints = task.maxPoints ?? 2;

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
        answer,
      },
      update: {
        answer,
      },
      select: { id: true },
    });

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const vectorStoreId = process.env.OPENAI_VECTOR_STORE_ID;

    const instructions = [
      "Jesteś egzaminatorem polskiej matury (standard CKE).",
      "Oceniasz odpowiedź ucznia punktowo WYŁĄCZNIE na podstawie przekazanej rubryki/kryteriów.",
      "Nie dodawaj własnych kryteriów.",
      `Maksymalna liczba punktów: ${maxPoints}. Przyznaj liczbę całkowitą 0..${maxPoints}.`,
      "Feedback ma być krótki, rzeczowy, w stylu egzaminatora (bez zdradzania pełnego rozwiązania krok po kroku).",
      "Zwróć WYŁĄCZNIE JSON zgodny ze schematem, bez żadnego dodatkowego tekstu.",
      "criteriaBreakdown: jeśli rubryka ma kilka elementów/kryteriów, rozbij punkty na kryteria; jeśli rubryka jest ogólna, zwróć jedną pozycję criterion='Ocena ogólna'.",
      "Suma points w criteriaBreakdown MUSI równać się awardedPoints.",
      "Jeśli masz dostęp do materiałów (file_search), użyj ich przed oceną do znalezienia zasad oceniania/typowych błędów dla tego typu zadania. Użyj ich tylko jako wsparcia interpretacji rubryki (nie dodawaj nowych kryteriów).",
    ].join("\n");

    const rubricText =
      task.rubric && task.rubric.trim()
        ? task.rubric.trim()
        : "Oceń zgodność odpowiedzi z poleceniem. Przyznaj 0..maxPoints za poprawność i kompletność.";

    const referenceText =
      task.referenceAnswer && task.referenceAnswer.trim()
        ? task.referenceAnswer.trim()
        : null;

    const input = [
      "### Treść zadania (polecenie)",
      task.content,
      "",
      "### Kryteria oceniania (rubryka / schemat punktowania)",
      rubricText,
      "",
      "### Odpowiedź wzorcowa / wskazówki (opcjonalnie)",
      referenceText ?? "(brak)",
      "",
      "### Odpowiedź ucznia",
      answer,
    ].join("\n");

    const ai = await openai.responses.create({
      model,
      instructions,
      input,
      store: false,

      // ✅ RAG: w Twojej wersji SDK vector_store_ids musi być w tools
      tools: vectorStoreId
        ? [{ type: "file_search", vector_store_ids: [vectorStoreId] }]
        : undefined,

      text: {
        format: {
          type: "json_schema",
          name: "matura_open_grade",
          schema: {
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
                    points: { type: "integer", minimum: 0 },
                    maxPoints: { type: "integer", minimum: 0 },
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
          },
        },
      },
    });

    let grade: GradeJSON;
    try {
      const raw =
        (ai as any).output_text ??
        (ai as any).output?.[0]?.content?.[0]?.text ??
        "";
      grade = JSON.parse(raw) as GradeJSON;
    } catch {
      return NextResponse.json(
        { ok: false, error: "AI zwróciło niepoprawny JSON." },
        { status: 502 }
      );
    }

    const awardedPoints = clampInt(grade.awardedPoints, 0, maxPoints);
    const feedback = String(grade.feedback ?? "").slice(0, 1000);

    const finalGradeForStore: GradeJSON = {
      awardedPoints,
      feedback,
      justification: String(grade.justification ?? "").slice(0, 3000),
      criteriaBreakdown: (Array.isArray(grade.criteriaBreakdown)
        ? grade.criteriaBreakdown
        : []
      ).map((x) => ({
        criterion: String((x as any)?.criterion ?? "").slice(0, 200),
        points: clampInt((x as any)?.points, 0, maxPoints),
        maxPoints: clampInt((x as any)?.maxPoints, 0, maxPoints),
        note: String((x as any)?.note ?? "").slice(0, 500),
      })),
    };

    const result = await prisma.$transaction(async (tx) => {
      await tx.userOpenAnswer.update({
        where: { id: userOpenAnswer.id },
        data: {
          awardedPoints,
          feedback,
          gradingJson: JSON.stringify(finalGradeForStore).slice(0, 20_000),
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
        0
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
      open: { openTaskId, awardedPoints, feedback },
    });
  } catch (e: any) {
    const msg = String(e?.message ?? "Server error");
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
