"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  className?: string;
};

export default function BuyCourseButton({ className = "" }: Props) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to start checkout");
      }

      if (!data?.url) {
        throw new Error("Missing checkout URL");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("CHECKOUT ERROR:", error);
      alert(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-300 px-6 py-3 text-[16px] font-bold text-slate-950 shadow-[0_20px_50px_-24px_rgba(52,211,153,0.95)] transition hover:-translate-y-0.5 hover:bg-emerald-200 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {loading ? "Przetwarzanie..." : "Kup kurs"}
      {!loading && <ArrowRight className="h-5 w-5" aria-hidden />}
    </button>
  );
}
