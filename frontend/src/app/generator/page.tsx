"use client";

import { useState } from "react";

export default function GeneratorPage() {
  const [loading, setLoading] = useState(false);

  const generateExam = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <main
      className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]
      bg-[#050E19] text-[#F3EAD7] flex items-center"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 2xl:px-10 py-16">
        <div
          className="rounded-2xl border border-[#2C3B55] bg-[rgba(11,27,43,0.88)]
          shadow-[0_0_30px_rgba(0,0,0,0.7)] p-12 md:p-16 max-w-[850px] mx-auto"
        >
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Generator arkuszy – Matematyka
            </h1>
            <p className="mt-4 text-base md:text-lg text-[#F3EAD7]/70">
              Kliknij przycisk poniżej, aby automatycznie wygenerować nowy
              arkusz maturalny.
            </p>
          </header>

          <div className="flex justify-center">
            <button
              onClick={generateExam}
              disabled={loading}
              className="
                inline-flex items-center cursor-pointer gap-2 rounded-md bg-[#FFC857]
                px-8 py-4 text-lg font-semibold text-[#111827]
                shadow-[0_0_14px_rgba(255,200,87,0.75)]
                hover:shadow-[0_0_22px_rgba(255,200,87,0.9)]
                transition-all hover:bg-[#ffd16c]
                disabled:opacity-70 disabled:cursor-not-allowed
              "
            >
              {!loading && <span className="text-xl">⚡</span>}

              {loading ? "Generuję…" : "Wygeneruj arkusz"}

              {loading && (
                <span
                  className="ml-2 h-4 w-4 border-2 border-[#111827]
                  border-t-transparent rounded-full animate-spin"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
