"use client";

import React, { useState } from "react";
import { RefreshCw } from "lucide-react";
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
          !data.ok ? data.error : "Nie udało się wygenerować zadania.",
        );
        return;
      }

      onGenerated(data.generated);
      toast.success("Wygenerowano podobne zadanie");
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
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/60 hover:bg-white/[0.08] disabled:opacity-60"
      title="Wygeneruj podobne zadanie do ćwiczeń"
    >
      <RefreshCw
        className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
        aria-hidden
      />
      {loading ? "Generuję..." : "Wygeneruj podobne"}
    </button>
  );
}
