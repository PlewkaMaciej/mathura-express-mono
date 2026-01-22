import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import openai from "@/lib/openai";

type Body = { openTaskId: string };

export type GeneratedOpenTask = {
  name: string;
  content: string;
  rubric: string;
  referenceAnswer: string;
  maxPoints: number;
  basedOnOpenTaskId: string;
  subSectionId?: string;
};

type ApiResponse =
  | { ok: true; generated: GeneratedOpenTask }
  | { ok: false; error: string };

function asString(x: unknown) {
  return typeof x === "string" ? x : "";
}

function clampInt(v: unknown, min: number, max: number) {
  const n = typeof v === "number" && Number.isFinite(v) ? Math.trunc(v) : min;
  return Math.max(min, Math.min(max, n));
}

function sanitizeMathMarkdown(text: string) {
  if (!text) return "";

  let t = text;

  // Unicode delta -> LaTeX
  t = t.replace(/Δ/g, "\\Delta");

  // \\Delta -> \Delta (podwójne backslash-e)
  t = t.replace(/\\\\Delta/g, "\\Delta");

  // Jeżeli ktoś zrobił "\Delta$$" to rozdziel to na "\Delta\n$$"
  t = t.replace(/\\Delta\$\$/g, "\\Delta\n$$");

  // Upewnij się, że $$ jest w osobnych liniach
  // 1) $$X -> $$\nX
  t = t.replace(/\$\$(\S)/g, "$$\n$1");
  // 2) X$$ -> X\n$$
  t = t.replace(/(\S)\$\$/g, "$1\n$$");

  // Czasem model daje "\$ \$" (rozstrzelone) – sklej
  t = t.replace(/\$\s+\$/g, "$$");

  // Usuń potrójne puste linie
  t = t.replace(/\n{3,}/g, "\n\n");

  return t.trim();
}

export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json<ApiResponse>(
        { ok: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const body = (await req.json()) as Partial<Body>;
    const openTaskId = asString(body.openTaskId).trim();
    if (!openTaskId) {
      return NextResponse.json<ApiResponse>(
        { ok: false, error: "Brak openTaskId." },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });
    if (!user) {
      return NextResponse.json<ApiResponse>(
        { ok: false, error: "User not found" },
        { status: 404 },
      );
    }

    const base = await prisma.openTasks.findUnique({
      where: { id: openTaskId },
      select: {
        id: true,
        name: true,
        content: true,
        rubric: true,
        referenceAnswer: true,
        maxPoints: true,
        subSectionId: true,
      },
    });

    if (!base) {
      return NextResponse.json<ApiResponse>(
        { ok: false, error: "Nie znaleziono zadania open." },
        { status: 404 },
      );
    }

    const maxPoints = base.maxPoints ?? 2;

    const formattingRules = `
FORMAT (OBOWIĄZKOWE — inaczej odpowiedź jest błędna):
- Zwracaj treści jako MARKDOWN.
- Matematykę zapisuj TYLKO jako:
  - inline: $...$
  - blok: $$ ... $$
- Każdy blok $$ ... $$ ma być w OSOBNYCH LINACH:
  poprawnie:
  $$\\Delta = b^2 - 4ac$$
  ŹLE: \\Delta$$ ... , $$\\Delta bez zamknięcia, \\( \\), \\[ \\]
- Znak delty zapisuj ZAWSZE jako \\Delta (NIE używaj Unicode Δ ani słowa "delta").
- Nie doklejaj $$ do \\Delta ani do innych komend LaTeX.
`;

    const solutionStyle = `
REFERENCEANSWER (ODPOWIEDŹ WZORCOWA) MA ZAWIERAĆ TYLKO:
- "Krok 1, Krok 2, Krok 3" (max 6 kroków)
- rachunki w LaTeX w blokach $$...$$
- wniosek końcowy (jedno zdanie)
- (opcjonalnie) 2 typowe błędy w 2 krótkich punktach
NIE dodawaj rubryki w referenceAnswer. Rubryka ma być osobno w polu "rubric".
`;

    const instructions = [
      "Jesteś egzaminatorem i nauczycielem matematyki (matura PL).",
      "Masz wygenerować JEDNO zadanie ćwiczeniowe bardzo podobne do bazowego.",
      "Zachowaj typ zadania i poziom, ale zmień liczby/parametry/oznaczenia.",
      "Nowe zadanie musi być matematycznie poprawne i mieć jednoznaczny wniosek.",
      `MaxPoints ma wynosić dokładnie ${maxPoints}.`,
      "W polu rubric wpisz krótki schemat punktowania 0..maxPoints (jak CKE).",
      formattingRules,
      solutionStyle,
      "Zwróć WYŁĄCZNIE JSON zgodny ze schematem.",
    ].join("\n");

    const rubricText =
      base.rubric && base.rubric.trim()
        ? base.rubric.trim()
        : `Schemat punktowania 0..${maxPoints} za poprawność i kompletność.`;

    const input = [
      "### Zadanie bazowe (zrób analogiczne, inne dane)",
      `Nazwa: ${base.name}`,
      "",
      "Treść:",
      base.content,
      "",
      "Rubryka bazowa:",
      rubricText,
      "",
      `MaxPoints: ${maxPoints}`,
    ].join("\n");

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    const ai = await openai.responses.create({
      model,
      instructions,
      input,
      store: false,
      text: {
        format: {
          type: "json_schema",
          name: "practice_open_task",
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              name: { type: "string" },
              content: { type: "string" },
              rubric: { type: "string" },
              referenceAnswer: { type: "string" },
              maxPoints: { type: "integer" },
            },
            required: [
              "name",
              "content",
              "rubric",
              "referenceAnswer",
              "maxPoints",
            ],
          },
        },
      },
    });

    let parsed: any;
    try {
      parsed = JSON.parse(ai.output_text);
    } catch {
      return NextResponse.json<ApiResponse>(
        { ok: false, error: "AI zwróciło niepoprawny JSON." },
        { status: 502 },
      );
    }

    const generated: GeneratedOpenTask = {
      name: asString(parsed.name).trim().slice(0, 140) || "Zadanie ćwiczeniowe",
      content: sanitizeMathMarkdown(asString(parsed.content).slice(0, 10_000)),
      rubric: sanitizeMathMarkdown(asString(parsed.rubric).slice(0, 10_000)),
      referenceAnswer: sanitizeMathMarkdown(
        asString(parsed.referenceAnswer).slice(0, 20_000),
      ),
      maxPoints: clampInt(parsed.maxPoints, 0, maxPoints) || maxPoints,
      basedOnOpenTaskId: base.id,
      subSectionId: base.subSectionId ?? undefined,
    };

    if (!generated.content || !generated.referenceAnswer || !generated.rubric) {
      return NextResponse.json<ApiResponse>(
        { ok: false, error: "AI zwróciło niekompletne dane." },
        { status: 502 },
      );
    }

    return NextResponse.json<ApiResponse>(
      { ok: true, generated },
      { status: 200 },
    );
  } catch (e: any) {
    const msg = String(e?.message ?? "Server error");
    return NextResponse.json<ApiResponse>(
      { ok: false, error: msg },
      { status: 500 },
    );
  }
}
