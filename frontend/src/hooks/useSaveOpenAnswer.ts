import { useState } from "react";
import { toast } from "react-toastify";
import type { OpenAnswerDTO } from "@/components/openTask/types";

type Props = {
  userMaturaId: string;
  onPointsUpdate: (earned: number) => void;
  setOpenAnswers: React.Dispatch<React.SetStateAction<OpenAnswerDTO[]>>;
};

export function useSaveOpenAnswer({
  userMaturaId,
  onPointsUpdate,
  setOpenAnswers,
}: Props) {
  const [savingTaskId, setSavingTaskId] = useState<string | null>(null);

  async function save(
    openTaskId: string,
    answer: string,
    maxPoints: number,
    screenshot?: string | null,
  ) {
    if (!answer.trim() && !screenshot) {
      toast.info("Dodaj odpowiedź tekstową lub rysunek.");
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
          answer,
          screenshot,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        toast.error(data.error ?? "Błąd zapisu odpowiedzi");
        return;
      }

      onPointsUpdate(data.earnedPoints);

      setOpenAnswers((prev) => {
        const next = [...prev];
        const idx = next.findIndex((x) => x.openTaskId === openTaskId);

        const updated: OpenAnswerDTO = {
          openTaskId,

          // 🔥 NAJWAŻNIEJSZE
          answer: answer ?? null,
          screenshotUrl: data.open.screenshotUrl ?? null,

          awardedPoints: data.open.awardedPoints,
          feedback: data.open.feedback ?? null,
          gradingJson: data.open.gradingJson ?? null,
          gradedAt: data.open.gradedAt ?? new Date().toISOString(),
        };

        if (idx === -1) {
          next.push(updated);
        } else {
          next[idx] = {
            ...next[idx],
            ...updated,
          };
        }

        return next;
      });

      const ap = data.open.awardedPoints;

      if (ap >= maxPoints) toast.success(`Zaliczone ✅ (+${ap} pkt)`);
      else if (ap > 0) toast.info(`Częściowo ✅ (+${ap} pkt)`);
      else toast.error(`Nie zaliczone ❌ (+${ap} pkt)`);
    } catch {
      toast.error("Błąd zapisu odpowiedzi");
    } finally {
      setSavingTaskId(null);
    }
  }

  return {
    save,
    savingTaskId,
  };
}
