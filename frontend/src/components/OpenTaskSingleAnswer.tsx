"use client";

import React, { useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";

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

type Props = {
  openTasks: OpenTask[];
  userMaturaId: string;
  openAnswers: OpenAnswerDTO[];
  setOpenAnswers: React.Dispatch<React.SetStateAction<OpenAnswerDTO[]>>;
  onPointsUpdate: (earned: number) => void;
};

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

  function cardClass(openTaskId: string, maxPoints: number) {
    const s = getOpenAnswer(openTaskId);
    const base = "rounded-lg border p-4 bg-[rgba(11,27,43,0.25)]";

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

  return (
    <section className="space-y-5">
      {openTasks.map((task, idx) => {
        const saved = getOpenAnswer(task.id);
        const locked = isLocked(task.id);
        const disabled = savingTaskId === task.id || locked;

        return (
          <div key={task.id} className="border border-[#2C3B55] rounded-xl p-5">
            <p className="text-sm opacity-70 mb-2">Zadanie otwarte {idx + 1}</p>
            <div className="text-lg font-semibold mb-2">{task.name}</div>
            <div className="mb-4 whitespace-pre-wrap">{task.content}</div>

            <div className={cardClass(task.id, task.maxPoints)}>
              <div className="flex items-center justify-between gap-3">
                <div className="font-semibold">
                  Odpowiedź ucznia{" "}
                  <span className="opacity-70 font-normal">
                    (max {task.maxPoints} pkt)
                  </span>
                </div>

                {saved?.awardedPoints != null && (
                  <div className="text-sm opacity-80">
                    Przyznano:{" "}
                    <span className="text-[#7CF9C2] font-semibold">
                      {saved.awardedPoints}
                    </span>
                    /{task.maxPoints}
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
                      (next) => {
                        setDraft((prev) => ({ ...prev, [task.id]: next }));
                      },
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
                className="mt-3 w-full rounded-lg bg-[#0B1B2B] border border-[#2C3B55] px-3 py-2.5 text-base text-[#7CF9C2] placeholder:text-[#B8FFE2] outline-none focus:border-[#7CF9C2] focus:ring-0 disabled:opacity-70"
                placeholder="Wpisz odpowiedź… (możesz używać przycisków: √, ułamki, ∠, ° itd.)"
                disabled={disabled}
              />

              <div className="mt-3 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => saveOpenAnswer(task.id, task.maxPoints)}
                  disabled={disabled}
                  className="inline-flex items-center justify-center rounded-lg bg-[#7CF9C2] px-4 py-2 text-sm font-semibold text-[#0B1020] hover:brightness-95 transition disabled:opacity-60"
                >
                  {locked
                    ? "Odpowiedź zapisana"
                    : savingTaskId === task.id
                    ? "Zapisywanie..."
                    : "Zapisz odpowiedź"}
                </button>

                {saved?.feedback && (
                  <div className="text-sm opacity-80">
                    Feedback:{" "}
                    <span className="opacity-90">{saved.feedback}</span>
                  </div>
                )}
              </div>

              {/* opcjonalnie: pokaż surowy gradingJson */}
              {/* {saved?.gradingJson && (
                <pre className="mt-3 text-xs opacity-70 whitespace-pre-wrap">
                  {saved.gradingJson}
                </pre>
              )} */}
            </div>
          </div>
        );
      })}
    </section>
  );
}
