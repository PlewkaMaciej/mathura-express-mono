"use client";

import { useState } from "react";
import { OpenTaskCard } from "./OpenTaskCard";
import type { OpenTask, OpenAnswerDTO, GeneratedOpenTask } from "./types";
import { useOpenAnswers } from "@/hooks/useOpenAnswers";
import { useSaveOpenAnswer } from "@/hooks/useSaveOpenAnswer";

type Props = {
  openTasks: OpenTask[];
  openAnswers: OpenAnswerDTO[];
  setOpenAnswers: React.Dispatch<React.SetStateAction<OpenAnswerDTO[]>>;
  userMaturaId: string;
  onPointsUpdate: (earned: number) => void;
};

export function OpenTasksSingleAnswer({
  openTasks,
  openAnswers,
  setOpenAnswers,
  userMaturaId,
  onPointsUpdate,
}: Props) {
  const { answersMap, draft, setDraft, isLocked } = useOpenAnswers(
    openAnswers,
    setOpenAnswers,
  );

  const { save, savingTaskId } = useSaveOpenAnswer({
    userMaturaId,
    onPointsUpdate,
    setOpenAnswers,
  });

  // 🔥 KLUCZOWY STAN – TO GO WCZEŚNIEJ UCIĄŁEŚ
  const [practiceMap, setPracticeMap] = useState<
    Record<string, GeneratedOpenTask | null>
  >({});

  return (
    <section className="space-y-5">
      {openTasks.map((task, idx) => {
        const practice = practiceMap[task.id] ?? null;
        const saved = answersMap.get(task.id);

        return (
          <OpenTaskCard
            key={task.id}
            task={task}
            index={idx}
            saved={saved}
            draft={draft[task.id] ?? ""}
            isLocked={isLocked(task.id)}
            practice={practice}
            saving={savingTaskId === task.id}
            onDraftChange={(v) => setDraft((p) => ({ ...p, [task.id]: v }))}
            onInsertMath={(t) =>
              setDraft((p) => ({
                ...p,
                [task.id]: (p[task.id] ?? "") + t,
              }))
            }
            onSave={() =>
              save(
                task.id,
                draft[task.id] ?? "",
                practice?.maxPoints ?? task.maxPoints,
              )
            }
            onGeneratePractice={(gen) => {
              setPracticeMap((prev) => ({
                ...prev,
                [task.id]: gen,
              }));
              setDraft((prev) => ({
                ...prev,
                [task.id]: "",
              }));
            }}
            onRestoreOriginal={() => {
              setPracticeMap((prev) => ({
                ...prev,
                [task.id]: null,
              }));
              setDraft((prev) => ({
                ...prev,
                [task.id]: saved?.answer ?? "",
              }));
            }}
          />
        );
      })}
    </section>
  );
}
