"use client";

import { MathRender } from "./MathRender";
import { OpenAnswerTextarea } from "./OpenAnswerTextarea";
import { PracticeOpenTaskButton } from "./PracticeOpenTaskButton";
import type { OpenTask, OpenAnswerDTO, GeneratedOpenTask } from "./types";
import { useState } from "react";

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

  // 🔥 FIXED
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
    <div className="border border-[#2C3B55] rounded-xl p-5 bg-[#081524]">
      <p className="text-sm opacity-70 mb-2">Zadanie otwarte {index + 1}</p>

      <div className="flex justify-between items-start mb-3 gap-3">
        <div className="text-lg font-semibold">{displayName}</div>

        <div className="flex gap-2">
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
              className="rounded-lg border border-[#2C3B55] px-3 py-2 text-sm hover:border-[#7CF9C2]"
            >
              Wróć do oryginału
            </button>
          )}
        </div>
      </div>

      <div className="mb-4">
        <MathRender text={displayContent} />
      </div>

      {isAlreadyAnswered && (
        <div className="mb-4 space-y-3">
          {screenshotUrl && (
            <>
              <div className="text-sm opacity-70">Twoja odpowiedź (obraz):</div>

              <img
                src={screenshotUrl}
                alt="Odpowiedź użytkownika"
                className="rounded-lg border border-[#2C3B55] max-h-[400px] object-contain"
              />
            </>
          )}

          {saved?.answer && (
            <>
              <div className="text-sm opacity-70">Twoja odpowiedź (tekst):</div>

              <div className="rounded-lg border border-[#2C3B55] p-3 text-sm">
                {saved.answer}
              </div>
            </>
          )}

          {!isPractice && saved?.awardedPoints != null && (
            <div className="text-sm opacity-80">
              Przyznano:{" "}
              <span className="text-[#7CF9C2] font-semibold">
                {saved.awardedPoints}
              </span>
              /{displayMaxPoints}
            </div>
          )}

          <div className="text-sm text-[#7CF9C2] font-semibold">
            Odpowiedź została wysłana. Edycja zablokowana.
          </div>
        </div>
      )}

      {!isAlreadyAnswered && (
        <>
          <div className="flex gap-2 mb-4">
            <button
              type="button"
              onClick={() => {
                setAnswerMode("text");
                setLocalScreenshot(null);
              }}
              className={`px-3 py-1 rounded-lg border text-sm ${
                answerMode === "text"
                  ? "border-[#7CF9C2] text-[#7CF9C2]"
                  : "border-[#2C3B55]"
              }`}
            >
              ✍️ Tekst
            </button>

            <button
              type="button"
              onClick={() => setAnswerMode("drawing")}
              className={`px-3 py-1 rounded-lg border text-sm ${
                answerMode === "drawing"
                  ? "border-[#7CF9C2] text-[#7CF9C2]"
                  : "border-[#2C3B55]"
              }`}
            >
              🖼 Rysunek
            </button>
          </div>

          {answerMode === "text" && (
            <OpenAnswerTextarea
              value={draft}
              disabled={saving || loadingPractice}
              mode="text"
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
                className="rounded-lg bg-[#7CF9C2] px-4 py-2 text-sm font-semibold text-[#0B1020] disabled:opacity-60"
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
                className="rounded-lg bg-[#7CF9C2] px-4 py-2 text-sm font-semibold text-[#0B1020] disabled:opacity-60"
              >
                {loadingPractice ? "Sprawdzam..." : "Sprawdź odpowiedź"}
              </button>
            )}
          </div>
        </>
      )}

      {practiceResult && (
        <div className="mt-4 p-4 rounded-xl bg-[#0E1F33] border border-[#2C3B55]">
          <div className="text-[#7CF9C2] font-bold">
            {practiceResult.awardedPoints}/{displayMaxPoints} pkt
          </div>
          <div className="text-sm mt-2">{practiceResult.feedback}</div>
        </div>
      )}

      {!isPractice && saved?.feedback && (
        <div className="mt-4 p-4 rounded-xl bg-[#0E1F33] border border-[#2C3B55]">
          <div className="text-sm font-semibold text-[#7CF9C2] mb-2">
            Komentarz egzaminatora:
          </div>
          <div className="text-sm">{saved.feedback}</div>
        </div>
      )}

      {isPractice && practice?.referenceAnswer && (
        <details className="mt-4 text-sm">
          <summary>Pokaż rozwiązanie</summary>
          <div className="mt-2">
            <MathRender text={practice.referenceAnswer} />
          </div>
        </details>
      )}
    </div>
  );
}
