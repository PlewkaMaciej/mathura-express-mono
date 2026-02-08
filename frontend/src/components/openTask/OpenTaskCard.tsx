"use client";

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
  onSave: () => void;
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

  const displayName = practice?.name ?? task.name;
  const displayContent = practice?.content ?? task.content;
  const displayMaxPoints = practice?.maxPoints ?? task.maxPoints;

  return (
    <div className="border border-[#2C3B55] rounded-xl p-5">
      <p className="text-sm opacity-70 mb-2">Zadanie otwarte {index + 1}</p>

      {/* HEADER */}
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

      {/* TREŚĆ ZADANIA */}
      <div className="mb-4">
        <MathRender text={displayContent} />
      </div>

      {/* ODPOWIEDŹ */}
      <OpenAnswerTextarea
        value={draft}
        disabled={saving || (!isPractice && isLocked)}
        isPractice={isPractice}
        onChange={onDraftChange}
        onInsert={onInsertMath}
      />

      {/* PRZYCISKI + WYNIK */}
      <div className="mt-4 flex justify-between items-center">
        <button
          type="button"
          onClick={onSave}
          disabled={saving || (!isPractice && isLocked)}
          className="rounded-lg bg-[#7CF9C2] px-4 py-2 text-sm font-semibold text-[#0B1020] disabled:opacity-60"
        >
          {saving ? "Zapisywanie..." : "Zapisz odpowiedź"}
        </button>

        {!isPractice && saved?.awardedPoints != null && (
          <div className="text-sm opacity-80">
            Przyznano:{" "}
            <span className="text-[#7CF9C2] font-semibold">
              {saved.awardedPoints}
            </span>
            /{displayMaxPoints}
          </div>
        )}
      </div>

      {/* 🔥 PRZYKŁADOWE ROZWIĄZANIE – PRZYWRÓCONE */}
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
