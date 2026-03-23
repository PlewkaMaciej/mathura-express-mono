"use client";

import { useState } from "react";

export default function BuyCourseButton() {
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
      className="inline-flex items-center justify-center rounded-xl border border-[#FFC857]/70 bg-[rgba(255,200,87,0.08)] px-6 py-3 text-[16px] font-semibold text-[#F3EAD7] shadow-[0_0_12px_rgba(255,200,87,0.12)] transition hover:border-[#FFC857] hover:bg-[rgba(255,200,87,0.16)] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Przetwarzanie..." : "Kup kurs"}
    </button>
  );
}
