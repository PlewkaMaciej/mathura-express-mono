"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

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

type Props = {
  openTaskId: string;
  disabled?: boolean;
  onGenerated: (generated: GeneratedOpenTask) => void;
};

export function PracticeOpenTaskButton({
  openTaskId,
  disabled,
  onGenerated,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (disabled || loading) return;

    setLoading(true);
    try {
      const res = await fetch("/api/practice/open", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ openTaskId }),
      });

      const data = (await res.json()) as ApiResponse;

      if (!res.ok || !data.ok) {
        toast.error(
          !data.ok ? data.error : "Nie udało się wygenerować zadania."
        );
        return;
      }

      onGenerated(data.generated);
      toast.success("Wygenerowano podobne zadanie ✅");
    } catch {
      toast.error("Błąd generowania zadania");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleGenerate}
      disabled={disabled || loading}
      className="inline-flex items-center justify-center rounded-lg border border-[#2C3B55] bg-[#081524] px-4 py-2 text-sm font-semibold hover:border-[#7CF9C2] transition disabled:opacity-60"
      title="Wygeneruj podobne zadanie do ćwiczeń"
    >
      {loading ? "Generuję..." : "Wygeneruj podobne (ćwiczenia)"}
    </button>
  );
}
