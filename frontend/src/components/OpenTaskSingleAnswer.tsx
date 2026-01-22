"use client";

import React, { useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  PracticeOpenTaskButton,
  type GeneratedOpenTask,
} from "@/components/PracticeOpenTaskButton";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export type OpenTask = {
  id: string;
  name: string;
  content: string;
  maxPoints: number;
  rubric: string;
  referenceAnswer?: string | null;
};

export type OpenAnswerDTO = {
  openTaskId: string;
  answer?: string | null;
  awardedPoints?: number | null;
  feedback?: string | null;
  gradingJson?: string | null;
  gradedAt?: string | null;
};

type SaveOpenAnswerResponse = {
  ok: boolean;
  earnedPoints: number;
  open: {
    openTaskId: string;
    answer: string;
    awardedPoints: number;
    feedback?: string | null;
    gradingJson?: string | null;
    gradedAt?: string | null;
  };
  error?: string;
};

type PracticeGradeJSON = {
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

type Props = {
  openTasks: OpenTask[];
  userMaturaId: string;
  openAnswers: OpenAnswerDTO[];
  setOpenAnswers: React.Dispatch<React.SetStateAction<OpenAnswerDTO[]>>;
  onPointsUpdate: (earned: number) => void;
};

/**
 * Fix DELTA:
 * - AI potrafi zwrócić "\Delta" luzem (bez $...$) -> w UI widać "\Delta"
 * - Najpewniejsze: wszędzie zamieniamy \Delta / \\Delta -> znak "Δ"
 */
function normalizeMath(text: string) {
  if (!text) return "";
  let t = text;

  // 1) DELTA jako ZNAK (twardo)
  t = t.replace(/\\\\Delta/g, "Δ");
  t = t.replace(/\\Delta/g, "Δ");

  // 2) słowa "delta/delte..." -> znak Δ
  t = t.replace(/\b(delta|delte|deltę|delty|delcie)\b/gi, "Δ");

  // 3) napraw escaped delimiters jeśli AI je podwoi
  t = t
    .replace(/\\\\\(/g, "\\(")
    .replace(/\\\\\)/g, "\\)")
    .replace(/\\\\\[/g, "\\[")
    .replace(/\\\\\]/g, "\\]");

  // 4) zamień \(...\) i \[...\] na markdown $ / $$
  t = t
    .replace(/\\\(/g, "$")
    .replace(/\\\)/g, "$")
    .replace(/\\\[/g, "$$")
    .replace(/\\\]/g, "$$");

  return t;
}

function MathRender({ text }: { text: string }) {
  const normalized = normalizeMath(text);
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {normalized}
      </ReactMarkdown>
    </div>
  );
}

function insertAtCursor(
  textarea: HTMLTextAreaElement | null,
  value: string,
  setValue: (next: string) => void,
  current: string
) {
  if (!textarea) {
    setValue(current + value);
    return;
  }
  const start = textarea.selectionStart ?? current.length;
  const end = textarea.selectionEnd ?? current.length;

  const next = current.slice(0, start) + value + current.slice(end);
  setValue(next);

  requestAnimationFrame(() => {
    textarea.focus();
    const pos = start + value.length;
    textarea.setSelectionRange(pos, pos);
  });
}

function MathToolbar({ onInsert }: { onInsert: (text: string) => void }) {
  const btn =
    "rounded-lg border border-[#2C3B55] bg-[#081524] px-2.5 py-1.5 text-sm hover:border-[#7CF9C2] transition";
  return (
    <div className="flex flex-wrap gap-2">
      <button type="button" className={btn} onClick={() => onInsert("√()")}>
        √
      </button>
      <button type="button" className={btn} onClick={() => onInsert("^2")}>
        x²
      </button>
      <button type="button" className={btn} onClick={() => onInsert("^()")}>
        x^y
      </button>
      <button type="button" className={btn} onClick={() => onInsert("π")}>
        π
      </button>
      <button type="button" className={btn} onClick={() => onInsert("°")}>
        °
      </button>
      <button type="button" className={btn} onClick={() => onInsert("∠")}>
        ∠
      </button>
      <button type="button" className={btn} onClick={() => onInsert("≈")}>
        ≈
      </button>
      <button type="button" className={btn} onClick={() => onInsert("≠")}>
        ≠
      </button>
      <button type="button" className={btn} onClick={() => onInsert("≤")}>
        ≤
      </button>
      <button type="button" className={btn} onClick={() => onInsert("≥")}>
        ≥
      </button>
      <button type="button" className={btn} onClick={() => onInsert("1/2")}>
        1/2
      </button>
      <button type="button" className={btn} onClick={() => onInsert("a/b")}>
        a/b
      </button>
      <button
        type="button"
        className={btn}
        onClick={() => onInsert("\\frac{}{ }")}
        title="LaTeX-like"
      >
        \frac
      </button>
      <button type="button" className={btn} onClick={() => onInsert("sin()")}>
        sin
      </button>
      <button type="button" className={btn} onClick={() => onInsert("cos()")}>
        cos
      </button>
      <button type="button" className={btn} onClick={() => onInsert("tan()")}>
        tan
      </button>
      <button type="button" className={btn} onClick={() => onInsert("→")}>
        →
      </button>
      <button type="button" className={btn} onClick={() => onInsert("⇒")}>
        ⇒
      </button>
    </div>
  );
}

export function OpenTasksSingleAnswer({
  openTasks,
  userMaturaId,
  openAnswers,
  setOpenAnswers,
  onPointsUpdate,
}: Props) {
  const [savingTaskId, setSavingTaskId] = useState<string | null>(null);

  const [practiceMap, setPracticeMap] = useState<
    Record<string, GeneratedOpenTask | null>
  >({});

  // wynik “Sprawdź (ćwiczenia)” per taskId
  const [practiceGradeMap, setPracticeGradeMap] = useState<
    Record<string, PracticeGradeJSON | null>
  >({});
  const [gradingPracticeId, setGradingPracticeId] = useState<string | null>(
    null
  );

  const answersMap = useMemo(() => {
    const map = new Map<string, OpenAnswerDTO>();
    for (const oa of openAnswers) map.set(oa.openTaskId, oa);
    return map;
  }, [openAnswers]);

  const [draft, setDraft] = useState<Record<string, string>>(() => {
    const obj: Record<string, string> = {};
    for (const [openTaskId, oa] of answersMap.entries()) {
      if (typeof oa.answer === "string") obj[openTaskId] = oa.answer;
    }
    return obj;
  });

  const textareasRef = useRef<Record<string, HTMLTextAreaElement | null>>({});

  function getOpenAnswer(openTaskId: string) {
    return answersMap.get(openTaskId);
  }

  function isLocked(openTaskId: string) {
    const saved = getOpenAnswer(openTaskId);
    return typeof saved?.answer === "string" && saved.answer.trim().length > 0;
  }

  // tryb ćwiczeń zawsze neutralny kolor
  function cardClass(
    openTaskId: string,
    maxPoints: number,
    isPractice: boolean
  ) {
    const base = "rounded-lg border p-4 bg-[rgba(11,27,43,0.25)]";
    if (isPractice) return `${base} border-[#2C3B55]`;

    const s = getOpenAnswer(openTaskId);
    if (!s || s.awardedPoints == null) return `${base} border-[#2C3B55]`;

    if (s.awardedPoints >= maxPoints)
      return `${base} border-green-500/60 bg-green-500/10`;
    if (s.awardedPoints > 0)
      return `${base} border-yellow-500/60 bg-yellow-500/10`;
    return `${base} border-red-500/60 bg-red-500/10`;
  }

  function upsertOpenAnswer(
    openTaskId: string,
    update: Partial<OpenAnswerDTO>
  ) {
    setOpenAnswers((prev) => {
      const next = [...prev];
      const idx = next.findIndex((x) => x.openTaskId === openTaskId);
      if (idx === -1) {
        next.push({ openTaskId, ...update });
        return next;
      }
      next[idx] = { ...next[idx], ...update };
      return next;
    });
  }

  async function saveOpenAnswer(openTaskId: string, maxPoints: number) {
    if (isLocked(openTaskId)) {
      toast.info("Na to zadanie już odpowiedziałeś.");
      return;
    }

    const text = draft[openTaskId] ?? "";
    if (!text.trim()) {
      toast.info("Wpisz odpowiedź przed zapisaniem.");
      return;
    }

    setSavingTaskId(openTaskId);

    try {
      const res = await fetch("/api/matura/open-answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userMaturaId,
          openTaskId,
          answer: text,
        }),
      });

      const data = (await res.json()) as Partial<SaveOpenAnswerResponse> & {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        if (res.status === 409) {
          toast.info(data.error ?? "Na to zadanie już odpowiedziałeś.");
          upsertOpenAnswer(openTaskId, { answer: text });
          return;
        }
        toast.error(data.error ?? "Błąd zapisu odpowiedzi");
        return;
      }

      onPointsUpdate(data.earnedPoints!);

      upsertOpenAnswer(openTaskId, {
        answer: text,
        awardedPoints: data.open!.awardedPoints,
        feedback: data.open!.feedback ?? null,
        gradingJson: data.open!.gradingJson ?? null,
        gradedAt: data.open!.gradedAt ?? null,
      });

      const ap = data.open!.awardedPoints;
      if (ap >= maxPoints) toast.success(`Zaliczone ✅ (+${ap} pkt)`);
      else if (ap > 0) toast.info(`Częściowo ✅ (+${ap} pkt)`);
      else toast.error(`Nie zaliczone ❌ (+${ap} pkt)`);
    } catch {
      toast.error("Błąd zapisu odpowiedzi");
    } finally {
      setSavingTaskId(null);
    }
  }

  async function gradePractice(taskId: string, practice: GeneratedOpenTask) {
    const ans = draft[taskId] ?? "";
    if (!ans.trim()) {
      toast.info("Wpisz odpowiedź do zadania ćwiczeniowego.");
      return;
    }

    setGradingPracticeId(taskId);
    try {
      const res = await fetch("/api/practice/open/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          generatedTask: {
            name: practice.name,
            content: practice.content,
            rubric: practice.rubric,
            referenceAnswer: practice.referenceAnswer,
            maxPoints: practice.maxPoints,
          },
          answer: ans,
        }),
      });

      const data = (await res.json()) as
        | { ok: true; grade: PracticeGradeJSON }
        | { ok: false; error: string };

      if (!res.ok || !data.ok) {
        toast.error(!data.ok ? data.error : "Błąd sprawdzania.");
        return;
      }

      setPracticeGradeMap((prev) => ({ ...prev, [taskId]: data.grade }));
      toast.success("Sprawdzono ✅ (bez zapisu)");
    } catch {
      toast.error("Błąd sprawdzania (ćwiczenia)");
    } finally {
      setGradingPracticeId(null);
    }
  }

  return (
    <section className="space-y-5">
      {openTasks.map((task, idx) => {
        const saved = getOpenAnswer(task.id);
        const locked = isLocked(task.id);

        const practice = practiceMap[task.id] ?? null;
        const isPractice = !!practice;

        const displayName = practice?.name ?? task.name;
        const displayContent = practice?.content ?? task.content;
        const displayMaxPoints = practice?.maxPoints ?? task.maxPoints;

        // w ćwiczeniach ZAWSZE można pisać
        const textareaDisabled =
          savingTaskId === task.id || (!isPractice && locked);

        // klasa textarea zależnie od trybu (fix zielonego tekstu)
        const textareaClass = isPractice
          ? "mt-3 w-full rounded-lg bg-[#0B1B2B] border border-[#2C3B55] px-3 py-2.5 text-base text-[#E9EEF7] placeholder:text-[#B8C4D8] outline-none focus:border-[#7CF9C2] focus:ring-0 disabled:opacity-70"
          : "mt-3 w-full rounded-lg bg-[#0B1B2B] border border-[#2C3B55] px-3 py-2.5 text-base text-[#7CF9C2] placeholder:text-[#B8FFE2] outline-none focus:border-[#7CF9C2] focus:ring-0 disabled:opacity-70";

        const practiceGrade = practiceGradeMap[task.id] ?? null;

        return (
          <div key={task.id} className="border border-[#2C3B55] rounded-xl p-5">
            <p className="text-sm opacity-70 mb-2">Zadanie otwarte {idx + 1}</p>

            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="text-lg font-semibold">{displayName}</div>

              <div className="flex items-center gap-2">
                {/* generowanie tylko gdy oryginał rozwiązany */}
                {locked && (
                  <PracticeOpenTaskButton
                    openTaskId={task.id}
                    disabled={savingTaskId === task.id}
                    onGenerated={(gen) => {
                      setPracticeMap((prev) => ({ ...prev, [task.id]: gen }));
                      setDraft((prev) => ({ ...prev, [task.id]: "" }));
                      setPracticeGradeMap((prev) => ({
                        ...prev,
                        [task.id]: null,
                      }));
                    }}
                  />
                )}

                {practice && (
                  <button
                    type="button"
                    disabled={savingTaskId === task.id}
                    onClick={() => {
                      // ✅ wyłącz tryb ćwiczeń
                      setPracticeMap((prev) => ({ ...prev, [task.id]: null }));

                      // ✅ KLUCZOWA POPRAWKA:
                      // przywróć draft do zapisanej odpowiedzi z bazy (oryginał)
                      const originalAnswer = String(saved?.answer ?? "");
                      setDraft((prev) => ({
                        ...prev,
                        [task.id]: originalAnswer,
                      }));

                      // wyczyść ocenę ćwiczeń
                      setPracticeGradeMap((prev) => ({
                        ...prev,
                        [task.id]: null,
                      }));

                      toast.info("Przywrócono oryginalne zadanie.");
                    }}
                    className="inline-flex items-center justify-center rounded-lg border border-[#2C3B55] bg-[#081524] px-3 py-2 text-sm hover:border-[#7CF9C2] transition disabled:opacity-60"
                    title="Wróć do wersji z bazy"
                  >
                    Wróć do oryginału
                  </button>
                )}
              </div>
            </div>

            <div className="mb-4">
              <MathRender text={displayContent} />
            </div>

            <div className={cardClass(task.id, displayMaxPoints, isPractice)}>
              <div className="flex items-center justify-between gap-3">
                <div className="font-semibold">
                  Odpowiedź{" "}
                  <span className="opacity-70 font-normal">
                    (max {displayMaxPoints} pkt)
                  </span>
                </div>

                {!isPractice && saved?.awardedPoints != null && (
                  <div className="text-sm opacity-80">
                    Przyznano:{" "}
                    <span className="text-[#7CF9C2] font-semibold">
                      {saved.awardedPoints}
                    </span>
                    /{displayMaxPoints}
                  </div>
                )}

                {isPractice && practiceGrade && (
                  <div className="text-sm opacity-80">
                    Wynik ćwiczeń:{" "}
                    <span className="text-[#7CF9C2] font-semibold">
                      {practiceGrade.awardedPoints}
                    </span>
                    /{displayMaxPoints}
                  </div>
                )}
              </div>

              <div className="mt-3">
                <MathToolbar
                  onInsert={(txt) => {
                    const el = textareasRef.current[task.id] ?? null;
                    const current = draft[task.id] ?? "";
                    insertAtCursor(
                      el,
                      txt,
                      (next) =>
                        setDraft((prev) => ({ ...prev, [task.id]: next })),
                      current
                    );
                  }}
                />
              </div>

              <textarea
                ref={(el) => {
                  textareasRef.current[task.id] = el;
                }}
                value={draft[task.id] ?? ""}
                onChange={(e) =>
                  setDraft((prev) => ({
                    ...prev,
                    [task.id]: e.target.value,
                  }))
                }
                rows={6}
                className={textareaClass}
                placeholder={"Wpisz odpowiedź…"}
                disabled={textareaDisabled}
              />

              <div className="mt-3 flex items-center justify-between gap-3">
                {!isPractice ? (
                  <button
                    type="button"
                    onClick={() => saveOpenAnswer(task.id, displayMaxPoints)}
                    disabled={savingTaskId === task.id || locked}
                    className="inline-flex items-center justify-center rounded-lg bg-[#7CF9C2] px-4 py-2 text-sm font-semibold text-[#0B1020] hover:brightness-95 transition disabled:opacity-60"
                  >
                    {locked
                      ? "Odpowiedź zapisana"
                      : savingTaskId === task.id
                      ? "Zapisywanie..."
                      : "Zapisz odpowiedź"}
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={!practice || gradingPracticeId === task.id}
                    onClick={() => practice && gradePractice(task.id, practice)}
                    className="inline-flex items-center justify-center rounded-lg bg-[#7CF9C2] px-4 py-2 text-sm font-semibold text-[#0B1020] hover:brightness-95 transition disabled:opacity-60"
                  >
                    {gradingPracticeId === task.id
                      ? "Sprawdzam..."
                      : "Sprawdź (ćwiczenia)"}
                  </button>
                )}

                {!isPractice && saved?.feedback && (
                  <div className="text-sm opacity-80">
                    Feedback:{" "}
                    <span className="opacity-90">{saved.feedback}</span>
                  </div>
                )}
              </div>

              {isPractice && practiceGrade && (
                <div className="mt-3 rounded-lg border border-[#2C3B55] bg-[#081524] p-3 text-sm">
                  <div className="opacity-90">
                    <span className="font-semibold">Feedback:</span>{" "}
                    {practiceGrade.feedback}
                  </div>
                  {practiceGrade.justification && (
                    <div className="opacity-80 mt-2">
                      <span className="font-semibold">Uzasadnienie:</span>{" "}
                      {practiceGrade.justification}
                    </div>
                  )}
                </div>
              )}

              {practice && (
                <details className="mt-4 text-sm opacity-90">
                  <summary className="cursor-pointer opacity-80 hover:opacity-100">
                    Pokaż odpowiedź wzorcową (ćwiczenia)
                  </summary>
                  <div className="mt-2">
                    <MathRender text={practice.referenceAnswer ?? ""} />
                  </div>
                </details>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
