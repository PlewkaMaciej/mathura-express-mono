import { useMemo, useState } from "react";
import type { OpenAnswerDTO } from "@/components/openTask/types";

export function useOpenAnswers(
  openAnswers: OpenAnswerDTO[],
  setOpenAnswers: React.Dispatch<React.SetStateAction<OpenAnswerDTO[]>>,
) {
  const answersMap = useMemo(() => {
    const map = new Map<string, OpenAnswerDTO>();
    for (const oa of openAnswers) {
      map.set(oa.openTaskId, oa);
    }
    return map;
  }, [openAnswers]);

  const [draft, setDraft] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    for (const oa of openAnswers) {
      if (typeof oa.answer === "string") {
        init[oa.openTaskId] = oa.answer;
      }
    }
    return init;
  });

  // 🔥 TERAZ blokuje gdy:
  // - jest tekst
  // - jest screenshot
  // - są przyznane punkty
  function isLocked(openTaskId: string) {
    const saved = answersMap.get(openTaskId);

    return Boolean(
      saved?.answer?.trim().length ||
      saved?.screenshotUrl ||
      saved?.awardedPoints !== undefined,
    );
  }

  function upsertOpenAnswer(
    openTaskId: string,
    update: Partial<OpenAnswerDTO>,
  ) {
    setOpenAnswers((prev) => {
      const next = [...prev];
      const idx = next.findIndex((x) => x.openTaskId === openTaskId);

      if (idx === -1) {
        next.push({ openTaskId, ...update });
      } else {
        next[idx] = { ...next[idx], ...update };
      }

      return next;
    });
  }

  return {
    answersMap,
    draft,
    setDraft,
    isLocked,
    upsertOpenAnswer,
  };
}
