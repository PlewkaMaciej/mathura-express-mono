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

  const displayName = practice?.name ?? task.name;
  const displayContent = practice?.content ?? task.content;
  const displayMaxPoints = practice?.maxPoints ?? task.maxPoints;

  const isAlreadyAnswered =
    !isPractice && (!!saved?.answer || !!saved?.screenshotUrl);

  const screenshotUrl = saved?.screenshotUrl ?? null;

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
              onClick={onRestoreOriginal}
              className="rounded-lg border border-[#2C3B55] bg-[#081524] px-3 py-2 text-sm hover:border-[#7CF9C2]"
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
          {/* TRYB */}
          <div className="flex gap-2 mb-4">
            <button
              type="button"
              onClick={() => {
                setAnswerMode("text");
                setLocalScreenshot(null);
              }}
              className={`px-3 py-1 rounded-lg border text-sm transition ${
                answerMode === "text"
                  ? "border-[#7CF9C2] text-[#7CF9C2]"
                  : "border-[#2C3B55] text-gray-300"
              }`}
            >
              ✍️ Tekst
            </button>

            <button
              type="button"
              onClick={() => setAnswerMode("drawing")}
              className={`px-3 py-1 rounded-lg border text-sm transition ${
                answerMode === "drawing"
                  ? "border-[#7CF9C2] text-[#7CF9C2]"
                  : "border-[#2C3B55] text-gray-300"
              }`}
            >
              🖼 Rysunek
            </button>
          </div>

          {answerMode === "text" && (
            <OpenAnswerTextarea
              value={draft}
              disabled={saving}
              mode="text"
              onChange={onDraftChange}
              onInsert={onInsertMath}
              onScreenshotChange={() => {}}
            />
          )}

          {answerMode === "drawing" && (
            <OpenAnswerTextarea
              value=""
              disabled={saving}
              mode="drawing"
              onChange={() => {}}
              onInsert={() => {}}
              onScreenshotChange={(dataUrl) => setLocalScreenshot(dataUrl)}
            />
          )}

          <div className="mt-4">
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
              className="rounded-lg bg-[#7CF9C2] px-4 py-2 text-sm font-semibold text-[#0B1020] disabled:opacity-60 transition"
            >
              {saving ? "Zapisywanie..." : "Zapisz odpowiedź"}
            </button>
          </div>
        </>
      )}

      {!isPractice && saved?.feedback && (
        <div className="mt-4 p-4 rounded-xl bg-[#0E1F33] border border-[#2C3B55]">
          <div className="text-sm font-semibold text-[#7CF9C2] mb-2">
            Komentarz egzaminatora:
          </div>
          <div className="text-sm text-gray-200 leading-relaxed">
            {saved.feedback}
          </div>
        </div>
      )}

      {isPractice && practice?.referenceAnswer && (
        <details className="mt-4 text-sm opacity-90">
          <summary className="cursor-pointer opacity-80 hover:opacity-100">
            Pokaż przykładowe rozwiązanie
          </summary>
          <div className="mt-2">
            <MathRender text={practice.referenceAnswer} />
          </div>
        </details>
      )}
    </div>
  );
}
