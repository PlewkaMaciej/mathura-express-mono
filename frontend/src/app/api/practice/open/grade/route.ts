import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import openai from "@/lib/openai";

type Body = {
  generatedTask: {
    name: string;
    content: string;
    rubric: string;
    referenceAnswer?: string | null;
    maxPoints: number;
  };
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
        { status: 401 },
      );
    }

    const body = (await req.json()) as Partial<Body>;
    const generatedTask = body.generatedTask;
    const answer = String(body.answer ?? "");

    if (!generatedTask?.content || !generatedTask?.maxPoints) {
      return NextResponse.json(
        { ok: false, error: "Brak danych generatedTask." },
        { status: 400 },
      );
    }
    if (!answer.trim()) {
      return NextResponse.json(
        { ok: false, error: "Odpowiedź nie może być pusta." },
        { status: 400 },
      );
    }

    const maxPoints = generatedTask.maxPoints ?? 2;
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    const instructions = [
      "Jesteś egzaminatorem polskiej matury (standard CKE).",
      "Oceniasz odpowiedź ucznia punktowo WYŁĄCZNIE na podstawie przekazanej rubryki/kryteriów.",
      "Nie dodawaj własnych kryteriów.",
      `Maksymalna liczba punktów: ${maxPoints}. Przyznaj liczbę całkowitą 0..${maxPoints}.`,
      "Feedback ma być krótki, rzeczowy, w stylu egzaminatora (bez zdradzania pełnego rozwiązania krok po kroku).",
      "Zwróć WYŁĄCZNIE JSON zgodny ze schematem, bez żadnego dodatkowego tekstu.",
      "criteriaBreakdown: jeśli rubryka ma kilka elementów/kryteriów, rozbij punkty na kryteria; jeśli rubryka jest ogólna, zwróć jedną pozycję criterion='Ocena ogólna'.",
    ].join("\n");

    const rubricText =
      generatedTask.rubric && generatedTask.rubric.trim()
        ? generatedTask.rubric.trim()
        : "Oceń zgodność odpowiedzi z poleceniem. Przyznaj 0..maxPoints za poprawność i kompletność.";

    const referenceText =
      generatedTask.referenceAnswer && generatedTask.referenceAnswer.trim()
        ? generatedTask.referenceAnswer.trim()
        : "(brak)";

    const input = [
      "### Treść zadania (polecenie)",
      generatedTask.content,
      "",
      "### Kryteria oceniania (rubryka / schemat punktowania)",
      rubricText,
      "",
      "### Odpowiedź wzorcowa / wskazówki (opcjonalnie)",
      referenceText,
      "",
      "### Odpowiedź ucznia",
      answer,
    ].join("\n");

    const ai = await openai.responses.create({
      model,
      instructions,
      input,
      store: false,
      text: {
        format: {
          type: "json_schema",
          name: "matura_open_practice_grade",
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
      grade = JSON.parse(ai.output_text) as GradeJSON;
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
      criteriaBreakdown: (Array.isArray(grade.criteriaBreakdown)
        ? grade.criteriaBreakdown
        : []
      )
        .slice(0, 20)
        .map((x) => ({
          criterion: String(x.criterion ?? "").slice(0, 200),
          points: clampInt(x.points, 0, maxPoints),
          maxPoints: clampInt(x.maxPoints, 0, maxPoints),
          note: String(x.note ?? "").slice(0, 500),
        })),
    };

    return NextResponse.json({ ok: true, grade: finalGrade });
  } catch (e: any) {
    const msg = String(e?.message ?? "Server error");
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
