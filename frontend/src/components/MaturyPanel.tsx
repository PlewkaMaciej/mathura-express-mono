"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const MaturyPanel = () => {
  const [matury, setMatury] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMatury = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/maturas/generate");
        if (!res.ok)
          throw new Error(`Failed to fetch matury: ${res.statusText}`);
        const data = await res.json();
        setMatury(data);
      } catch (e: any) {
        console.error("Błąd podczas pobierania matur:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMatury();
  }, []);

  const generateNewMatura = async () => {
    try {
      const res = await fetch("/api/maturas/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok)
        throw new Error(`Error generating matura: ${res.statusText}`);
      const data = await res.json();
      if (data?.examId) router.push(`/singleMatura/${data.examId}`);
    } catch (e: any) {
      console.error("Błąd podczas generowania matury:", e);
      setError(e.message);
    }
  };

  return (
    <div className="bg-[#0B1020] text-[#F5F7FF] min-h-[80vh] pb-28">
      <main className="pt-12 md:pt-16">
        <section className="relative mx-auto w-full max-w-[1600px] px-6 2xl:px-10">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_540px_at_20%_0%,#1b2252_22%,transparent_60%),radial-gradient(880px_520px_at_100%_15%,#1e3a8a_18%,transparent_65%)]" />
            <div className="px-6 md:px-10 lg:px-14 py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Wygeneruj swoją maturalną przygodę
              </h1>
              <p className="mt-4 text-base md:text-lg text-[#C9D2EE] max-w-2xl">
                Przygotuj się do matury, twórz arkusze i ćwicz rozwiązując
                zadania.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1600px] px-6 2xl:px-10 mt-10">
          {loading ? (
            <div className="text-center">Ładowanie matur...</div>
          ) : error ? (
            <div className="text-center text-red-500">Błąd: {error}</div>
          ) : (
            <div>
              {matury.length > 0 ? (
                <ul className="space-y-4">
                  {matury.map((matura: any, index: number) => (
                    <li
                      key={matura.id}
                      className="
                        group relative overflow-hidden
                        flex items-center justify-between gap-4
                        rounded-2xl bg-[#1E2330] p-4 shadow-md ring-1 ring-white/5
                        transition hover:ring-white/15 hover:shadow-lg
                        before:absolute before:inset-0 before:rounded-2xl before:p-[1px]
                        before:bg-[linear-gradient(120deg,rgba(124,249,194,.25),transparent)]
                        before:opacity-0 group-hover:before:opacity-100 before:transition
                        before:pointer-events-none
                      "
                    >
                      <span className="relative z-10 text-[#A7B5DD] w-10">
                        {index + 1}.
                      </span>

                      <div className="relative z-10 flex-1">
                        <div className="text-sm text-gray-400">
                          Data: {new Date(matura.createdAt).toLocaleString()}
                        </div>
                        <div className="text-sm text-[#7CF9C2] mt-1">
                          {matura.status === "ACTIVE"
                            ? "Aktywny"
                            : "Nieaktywny"}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          router.push(`/singleMatura/${matura.id}`)
                        }
                        className="
                          relative z-10 cursor-pointer ml-2 px-4 py-2 rounded-xl
                          bg-[#7CF9C2] text-[#0B1020] font-medium
                          shadow-md ring-1 ring-black/5
                          transition-transform duration-200
                          hover:scale-[1.03] hover:shadow-lg hover:bg-[#6fe7b4]
                          active:scale-[0.98]
                          focus:outline-none focus:ring-2 focus:ring-[#7CF9C2]/40
                        "
                        title="Przejdź do szczegółów matury"
                      >
                        Zobacz szczegóły
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center">Brak matur do wyświetlenia.</div>
              )}
            </div>
          )}
        </section>

        <div className="fixed left-1/2 bottom-10 -translate-x-1/2 z-50">
          <button
            type="button"
            onClick={generateNewMatura}
            className="
              cursor-pointer px-6 py-3 rounded-full
              bg-[#7CF9C2] text-[#0B1020] font-semibold
              shadow-[0_10px_30px_-10px_rgba(124,249,194,.55)]
              backdrop-blur-sm
              transition-all duration-200
              hover:shadow-[0_14px_36px_-10px_rgba(124,249,194,.75)]
              hover:scale-[1.04]
              active:scale-[0.98]
              focus:outline-none focus:ring-4 focus:ring-[#7CF9C2]/40
            "
          >
            Wygeneruj nową maturę
          </button>
        </div>
      </main>
    </div>
  );
};

export default MaturyPanel;
