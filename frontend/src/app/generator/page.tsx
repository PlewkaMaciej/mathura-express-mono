"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type MaturaListItem = {
  id: string;
  name: string;
  createdAt: string;
  status: boolean;

  earnedPoints: number;
  maxPoints: number;
};

type UserMaturasResponse = {
  maturas: MaturaListItem[];
  error?: string;
};

export default function GeneratorPage() {
  const router = useRouter();

  const [isGenerating, setIsGenerating] = useState(false);
  const [examNameInput, setExamNameInput] = useState("");
  const [generateError, setGenerateError] = useState("");

  const [isListLoading, setIsListLoading] = useState(false);
  const [listError, setListError] = useState("");
  const [maturaList, setMaturaList] = useState<MaturaListItem[]>([]);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString("pl-PL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

  async function loadUserMaturas() {
    setListError("");
    setIsListLoading(true);

    try {
      const res = await fetch("/api/matura/userMaturas", { method: "GET" });
      const data = (await res.json()) as UserMaturasResponse;

      if (!res.ok) {
        setListError(data?.error ?? "Nie udało się pobrać matur.");
        setMaturaList([]);
        return;
      }

      setMaturaList(Array.isArray(data?.maturas) ? data.maturas : []);
    } catch {
      setListError("Błąd połączenia przy pobieraniu matur.");
      setMaturaList([]);
    } finally {
      setIsListLoading(false);
    }
  }

  useEffect(() => {
    loadUserMaturas();
  }, []);

  async function generateExam() {
    if (!examNameInput.trim()) {
      setGenerateError("Podaj nazwę matury");
      return;
    }

    setGenerateError("");
    setIsGenerating(true);

    try {
      const response = await fetch("/api/matura/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: examNameInput.trim(),
          status: false,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        setGenerateError(
          payload?.error ?? "Nie udało się wygenerować arkusza."
        );
        return;
      }

      setExamNameInput("");
      await loadUserMaturas();
    } catch (e) {
      console.error("Generate error:", e);
      setGenerateError("Błąd połączenia przy generowaniu arkusza.");
    } finally {
      setIsGenerating(false);
    }
  }

  let emptyText = "Nie masz jeszcze żadnych matur. Wygeneruj pierwszą 👇";
  if (isListLoading) emptyText = "Ładuję Twoje matury…";
  else if (listError) emptyText = listError;

  return (
    <main
      className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]
      bg-[#050E19] text-[#F3EAD7]"
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
              Wpisz nazwę arkusza i kliknij przycisk poniżej, aby automatycznie
              wygenerować nowy arkusz maturalny.
            </p>
          </header>

          <div className="max-w-md mx-auto space-y-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="examName"
                className="text-sm font-medium text-[#F3EAD7]/80"
              >
                Nazwa matury
              </label>

              <input
                id="examName"
                type="text"
                value={examNameInput}
                onChange={(e) => {
                  setExamNameInput(e.target.value);
                  if (generateError) setGenerateError("");
                }}
                placeholder="Nazwa twojej matury"
                className="w-full rounded-lg bg-[#0B1524] border border-[#2C3B55]
                  px-3 py-2.5 text-base text-[#F3EAD7]
                  placeholder:text-[#A7B5DD]
                  outline-none focus:border-[#FFC857] focus:ring-0"
              />

              {generateError && (
                <p className="text-red-400 text-sm font-medium">
                  {generateError}
                </p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                onClick={generateExam}
                disabled={isGenerating}
                className="
                  inline-flex items-center cursor-pointer gap-2 rounded-md bg-[#FFC857]
                  px-8 py-4 text-lg font-semibold text-[#111827]
                  shadow-[0_0_14px_rgba(255,200,87,0.75)]
                  hover:shadow-[0_0_24px_rgba(255,200,87,0.95)]
                  transition-all hover:bg-[#ffd16c]
                  disabled:opacity-70 disabled:cursor-not-allowed
                "
              >
                {!isGenerating && <span className="text-xl">⚡</span>}
                {isGenerating ? "Generuję…" : "Wygeneruj arkusz"}
                {isGenerating && (
                  <span
                    className="ml-2 h-4 w-4 border-2 border-[#111827]
                    border-t-transparent rounded-full animate-spin"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <div className="max-w-[1000px] mx-auto">
            <div className="mb-5">
              <h2 className="text-xl md:text-2xl font-semibold">
                Twoje arkusze
              </h2>
              <p className="mt-1 text-sm text-[#F3EAD7]/60">
                Lista wygenerowanych arkuszy przypisanych do Twojego konta.
              </p>
            </div>

            <div
              className="rounded-2xl border border-[#2C3B55] bg-[rgba(11,27,43,0.55)]
              shadow-[0_0_25px_rgba(0,0,0,0.55)] p-6 md:p-8"
            >
              {maturaList.length === 0 ? (
                <div className="text-center py-12 text-[#F3EAD7]/70">
                  {emptyText}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {maturaList.map((m) => (
                    <div
                      key={m.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => router.push(`/matura/${m.id}`)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          router.push(`/matura/${m.id}`);
                        }
                      }}
                      className="
                        group relative overflow-hidden rounded-2xl border border-[#2C3B55]
                        bg-[linear-gradient(180deg,rgba(5,14,25,0.70),rgba(5,14,25,0.35))]
                        p-6 transition-all duration-200 cursor-pointer
                        hover:border-[#FFC857]
                        hover:shadow-[0_0_30px_rgba(255,200,87,0.14)]
                        active:scale-[0.99]
                        outline-none focus-visible:ring-2 focus-visible:ring-[#FFC857]/60
                      "
                    >
                      <div
                        className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full
                        bg-[rgba(255,200,87,0.12)] blur-2xl opacity-0 group-hover:opacity-100 transition"
                      />

                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold leading-snug truncate">
                            {m.name}
                          </h3>

                          <p className="mt-1 text-sm text-[#F3EAD7]/65">
                            Utworzono: {formatDate(m.createdAt)}
                          </p>

                          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#2C3B55] bg-[rgba(11,27,43,0.45)] px-3 py-1.5">
                            <span className="text-xs text-[#F3EAD7]/60">
                              Punkty:
                            </span>

                            <span className="text-sm font-semibold text-[#7CF9C2]">
                              {m.earnedPoints}
                            </span>

                            <span className="text-sm text-[#F3EAD7]/60">/</span>

                            <span className="text-sm font-semibold text-[#F3EAD7]/85">
                              {m.maxPoints}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full border ${
                            m.status
                              ? "border-green-500/40 text-green-300 bg-green-500/10"
                              : "border-yellow-500/40 text-yellow-200 bg-yellow-500/10"
                          }`}
                        >
                          {m.status ? "Zakończona" : "Aktywna"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {listError && maturaList.length > 0 && (
              <p className="mt-3 text-sm text-red-400">{listError}</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
