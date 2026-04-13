import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import openai from "@/lib/openai";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

type Body = {
  generatedTask: {
    name: string;
    content: string;
    rubric: string;
    referenceAnswer?: string | null;
    maxPoints: number;
  };
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

    const generatedTask = body.generatedTask;
    const answer = String(body.answer ?? "");
    let screenshot = body.screenshot ?? null;

    if (!generatedTask?.content || !generatedTask?.maxPoints) {
      return NextResponse.json(
        { ok: false, error: "Brak danych generatedTask." },
        { status: 400 },
      );
    }

    if (!answer.trim() && !screenshot) {
      return NextResponse.json(
        { ok: false, error: "Odpowiedź nie może być pusta." },
        { status: 400 },
      );
    }

    const maxPoints = generatedTask.maxPoints ?? 2;

    // ✅ UPLOAD JAK NORMAL MODE
    let finalImageUrl: string | null = null;

    if (screenshot?.startsWith("data:image")) {
      const base64 = screenshot.split(",")[1];

      const upload = await imagekit.upload({
        file: base64,
        fileName: `practice-${Date.now()}.jpg`,
        folder: "/practice",
      });

      finalImageUrl = upload.url;
      screenshot = finalImageUrl;
    }

    const instructions = `
Jesteś egzaminatorem polskiej matury (CKE).

WAŻNE:
- Obraz przedstawia rozwiązanie matematyczne napisane ręcznie przez ucznia
- ZAWSZE spróbuj odczytać równania, liczby i kroki rozwiązania
- NIE pisz "nie można ocenić"
- Nawet jeśli pismo jest słabe → spróbuj odczytać i oceń najlepiej jak się da
- Jeśli coś jest częściowo czytelne → przyznaj częściowe punkty
- Jeśli nic nie da się odczytać → przyznaj 0 punktów i uzasadnij

ZASADY:
- Oceniasz WYŁĄCZNIE na podstawie rubryki
- Przyznaj 0..${maxPoints} punktów
- Suma punktów musi się zgadzać
- Feedback krótki i konkretny

Zwróć WYŁĄCZNIE JSON zgodny ze schematem.
`;

    const rubricText =
      generatedTask.rubric?.trim() || "Oceń zgodność odpowiedzi z poleceniem.";

    const referenceText = generatedTask.referenceAnswer?.trim() || "(brak)";

    const inputText = `
### Treść zadania
${generatedTask.content}

### Kryteria
${rubricText}

### Odpowiedź wzorcowa
${referenceText}

### UWAGA
To jest zdjęcie rozwiązania matematycznego pisanego ręcznie.

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

    // ✅ TEKST
    if (!finalImageUrl && answer.trim()) {
      ai = await openai.responses.create({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        instructions,
        input: inputText,
        store: false,
        text: {
          format: {
            type: "json_schema",
            name: "practice_grade",
            schema,
          },
        },
      });
    }

    // ✅ RYSUNEK (LEPSZY MODEL)
    else {
      ai = await openai.responses.create({
        model: "gpt-4.1", // 🔥 KLUCZOWA ZMIANA
        instructions,
        input: [
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: inputText,
              },
              {
                type: "input_image",
                image_url: finalImageUrl!, // URL, nie base64
              },
            ],
          },
        ] as any,
        store: false,
        text: {
          format: {
            type: "json_schema",
            name: "practice_grade",
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

    const finalGrade: GradeJSON = {
      awardedPoints: clampInt(grade.awardedPoints, 0, maxPoints),
      feedback: String(grade.feedback ?? "").slice(0, 1000),
      justification: String(grade.justification ?? "").slice(0, 3000),
      criteriaBreakdown: (grade.criteriaBreakdown ?? []).map((x) => ({
        criterion: String(x.criterion ?? "").slice(0, 200),
        points: clampInt(x.points, 0, maxPoints),
        maxPoints: clampInt(x.maxPoints, 0, maxPoints),
        note: String(x.note ?? "").slice(0, 500),
      })),
    };

    return NextResponse.json({
      ok: true,
      grade: finalGrade,
    });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: String(e?.message ?? "Server error") },
      { status: 500 },
    );
  }
}
