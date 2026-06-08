"use client";

import { useState } from "react";
import { Edit3, ImageIcon } from "lucide-react";
import { MathRender } from "./MathRender";
import { OpenAnswerTextarea } from "./OpenAnswerTextarea";
import { PracticeOpenTaskButton } from "./PracticeOpenTaskButton";
import type { OpenTask, OpenAnswerDTO, GeneratedOpenTask } from "./types";

type Props = {
  task: OpenTask;
  index: number;
  saved?: OpenAnswerDTO;
  draft: string;
  isLocked: boolean;
  practice: GeneratedOpenTask | null;
  saving: boolean;

  onDraftChange: (v: string) => void;
  onInsertMath: (t: string) => void;
  onSave: (screenshot: string | null, text: string | null) => void;
  onGeneratePractice: (gen: GeneratedOpenTask) => void;
  onRestoreOriginal: () => void;
};

export function OpenTaskCard({
  task,
  index,
  saved,
  draft,
  isLocked,
  practice,
  saving,
  onDraftChange,
  onInsertMath,
  onSave,
  onGeneratePractice,
  onRestoreOriginal,
}: Props) {
  const isPractice = !!practice;

  const [answerMode, setAnswerMode] = useState<"text" | "drawing">("text");
  const [localScreenshot, setLocalScreenshot] = useState<string | null>(null);
  const [practiceResult, setPracticeResult] = useState<any>(null);
  const [loadingPractice, setLoadingPractice] = useState(false);

  function formatName(name: string) {
    if (!name) return "Ćwiczenie";

    const lower = name.toLowerCase();

    if (
      lower.includes("practice") ||
      lower.includes("test") ||
      lower.includes("task")
    ) {
      return "Ćwiczenie";
    }

    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  function cleanContent(content: string) {
    const lines = content
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length <= 1) return content;

    const result: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const current = lines[i];
      const prev = result[result.length - 1];

      if (prev) {
        const prevClean = prev
          .toLowerCase()
          .replace("rozwiąż równanie:", "")
          .replace("rozwiaz rownanie:", "")
          .trim();

        const currClean = current.toLowerCase().trim();

        if (prevClean === currClean) {
          continue;
        }
      }

      result.push(current);
    }

    return result.join("\n");
  }

  const displayName =
    isPractice && practice?.name ? formatName(practice.name) : task.name;

  const displayContent = practice
    ? cleanContent(practice.content)
    : task.content;

  const displayMaxPoints = practice?.maxPoints ?? task.maxPoints;

  const isAlreadyAnswered =
    !isPractice && (!!saved?.answer || !!saved?.screenshotUrl);

  const screenshotUrl = saved?.screenshotUrl ?? null;

  async function handlePracticeCheck() {
    if (!practice) return;

    setLoadingPractice(true);
    try {
      const res = await fetch("/api/practice/open/grade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          generatedTask: practice,
          answer: answerMode === "text" ? draft : "",
          screenshot: answerMode === "drawing" ? localScreenshot : null,
        }),
      });

      const data = await res.json();

      if (!data.ok) {
        console.error(data.error);
        return;
      }

      setPracticeResult(data.grade);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingPractice(false);
    }
  }

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_70px_-58px_rgba(0,0,0,1)]">
      <p className="mb-2 text-sm font-semibold text-emerald-300">
        Zadanie otwarte {index + 1}
      </p>

      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <div className="text-lg font-bold text-white">{displayName}</div>
          <div className="mt-1 text-sm text-slate-400">
            Maksymalnie {displayMaxPoints} pkt
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {isLocked && !isPractice && (
            <PracticeOpenTaskButton
              openTaskId={task.id}
              onGenerated={onGeneratePractice}
            />
          )}

          {isPractice && (
            <button
              type="button"
              onClick={() => {
                onRestoreOriginal();
                setPracticeResult(null);
              }}
              className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/60 hover:bg-white/[0.08]"
            >
              Wróć do oryginału
            </button>
          )}
        </div>
      </div>

      <div className="mb-5 rounded-lg border border-white/10 bg-[#07111f] p-4 leading-7 text-slate-100">
        <MathRender text={displayContent} />
      </div>

      {isAlreadyAnswered && (
        <div className="mb-4 space-y-3">
          {screenshotUrl && (
            <>
              <div className="text-sm text-slate-400">
                Twoja odpowiedź (obraz):
              </div>

              <img
                src={screenshotUrl}
                alt="Odpowiedź użytkownika"
                className="max-h-[400px] rounded-lg border border-white/10 object-contain"
              />
            </>
          )}

          {saved?.answer && (
            <>
              <div className="text-sm text-slate-400">
                Twoja odpowiedź (tekst):
              </div>

              <div className="rounded-lg border border-white/10 bg-[#07111f] p-3 text-sm text-slate-200">
                {saved.answer}
              </div>
            </>
          )}

          {!isPractice && saved?.awardedPoints != null && (
            <div className="text-sm text-slate-300">
              Przyznano:{" "}
              <span className="font-semibold text-emerald-300">
                {saved.awardedPoints}
              </span>
              /{displayMaxPoints}
            </div>
          )}

          <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm font-semibold text-emerald-200">
            Odpowiedź została wysłana. Edycja jest zablokowana.
          </div>
        </div>
      )}

      {!isAlreadyAnswered && (
        <>
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => {
                setAnswerMode("text");
                setLocalScreenshot(null);
              }}
              className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                answerMode === "text"
                  ? "border-emerald-300 bg-emerald-300 text-slate-950"
                  : "border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]"
              }`}
            >
              <Edit3 className="h-4 w-4" aria-hidden />
              Tekst
            </button>

            <button
              type="button"
              onClick={() => setAnswerMode("drawing")}
              className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                answerMode === "drawing"
                  ? "border-emerald-300 bg-emerald-300 text-slate-950"
                  : "border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]"
              }`}
            >
              <ImageIcon className="h-4 w-4" aria-hidden />
              Rysunek
            </button>
          </div>

          {answerMode === "text" && (
            <OpenAnswerTextarea
              value={draft}
              disabled={saving || loadingPractice}
              mode="text"
              taskTitle={displayName}
              taskContent={displayContent}
              onChange={onDraftChange}
              onInsert={onInsertMath}
              onScreenshotChange={() => {}}
            />
          )}

          {answerMode === "drawing" && (
            <OpenAnswerTextarea
              value={draft}
              disabled={saving}
              mode="drawing"
              taskTitle={displayName}
              taskContent={displayContent}
              onChange={() => {}}
              onInsert={() => {}}
              onScreenshotChange={(dataUrl) => setLocalScreenshot(dataUrl)}
            />
          )}

          <div className="mt-4">
            {!isPractice ? (
              <button
                type="button"
                onClick={() =>
                  onSave(
                    answerMode === "drawing" ? localScreenshot : null,
                    answerMode === "text" ? draft : null,
                  )
                }
                disabled={
                  saving ||
                  (answerMode === "drawing" && !localScreenshot) ||
                  (answerMode === "text" && !draft.trim())
                }
                className="rounded-lg bg-emerald-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Zapisywanie..." : "Zapisz odpowiedź"}
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePracticeCheck}
                disabled={
                  loadingPractice ||
                  (answerMode === "text" && !draft.trim()) ||
                  (answerMode === "drawing" && !localScreenshot)
                }
                className="rounded-lg bg-emerald-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loadingPractice ? "Sprawdzam..." : "Sprawdź odpowiedź"}
              </button>
            )}
          </div>
        </>
      )}

      {practiceResult && (
        <div className="mt-4 rounded-lg border border-white/10 bg-[#07111f] p-4">
          <div className="font-bold text-emerald-300">
            {practiceResult.awardedPoints}/{displayMaxPoints} pkt
          </div>
          <div className="mt-2 text-sm text-slate-200">
            {practiceResult.feedback}
          </div>
        </div>
      )}

      {!isPractice && saved?.feedback && (
        <div className="mt-4 rounded-lg border border-white/10 bg-[#07111f] p-4">
          <div className="mb-2 text-sm font-semibold text-emerald-300">
            Komentarz egzaminatora:
          </div>
          <div className="text-sm text-slate-200">{saved.feedback}</div>
        </div>
      )}

      {isPractice && practice?.referenceAnswer && (
        <details className="mt-4 text-sm text-slate-200">
          <summary className="cursor-pointer font-semibold text-emerald-300">
            Pokaż rozwiązanie
          </summary>
          <div className="mt-2 rounded-lg border border-white/10 bg-[#07111f] p-4">
            <MathRender text={practice.referenceAnswer} />
          </div>
        </details>
      )}
    </div>
  );
}
