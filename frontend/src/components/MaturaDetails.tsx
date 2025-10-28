"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

type Answer = "A" | "B" | "C" | "D";

type PublicTask = {
  content: string;
  options: { A: string; B: string; C: string; D: string };
  points: number;
  userAnswer: Answer | null;
  isCorrect: boolean | null;
  correctOption: Answer | null;
};

type PublicSection = {
  name: string;
  tasks: PublicTask[];
};

type MaturaResponse = {
  id: string;
  name: string;
  status: string;
  snapshot: PublicSection[];
  score: number;
  maxPoints: number;
  answered?: number;
};

export default function MaturaDetails() {
  const params = useParams();
  const examId = params?.examId as string | undefined;

  const [matura, setMatura] = useState<MaturaResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalTasks = useMemo(() => {
    if (!matura) return 0;
    return matura.snapshot.reduce((acc, s) => acc + (s.tasks?.length || 0), 0);
  }, [matura]);

  const answeredCount = useMemo(() => {
    if (!matura) return 0;
    return matura.snapshot.reduce(
      (acc, s) => acc + s.tasks.filter((t) => t.userAnswer !== null).length,
      0
    );
  }, [matura]);

  useEffect(() => {
    if (!examId) return;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/maturas/getSingleMatura/${examId}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
        const data: MaturaResponse = await res.json();
        setMatura(data);
      } catch (e: any) {
        setError(e.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [examId]);

  const handleAnswerClick = async (
    sectionIndex: number,
    taskIndex: number,
    answer: Answer
  ) => {
    if (!matura || !examId) return;
    const task = matura.snapshot[sectionIndex].tasks[taskIndex];
    if (task.userAnswer !== null) return;

    const draft = structuredClone(matura) as MaturaResponse;
    draft.snapshot[sectionIndex].tasks[taskIndex].userAnswer = answer;

    setMatura(draft);

    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/maturas/answer/${examId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionIndex, taskIndex, answer }),
      });
      if (!res.ok) {
        const fresh = await fetch(`/api/maturas/getSingleMatura/${examId}`, {
          cache: "no-store",
        });
        const data = (await fresh.json()) as MaturaResponse;
        setMatura(data);
        const msg = await res.json().then((d) => d?.error ?? res.statusText);
        throw new Error(msg);
      }
      const updated: MaturaResponse = await res.json();

      setMatura((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          status: updated.status,
          snapshot: updated.snapshot,
          score: updated.score ?? prev.score,
          maxPoints: updated.maxPoints ?? prev.maxPoints,
        };
      });
    } catch (e: any) {
      setError(e.message ?? "Błąd zapisu");
    } finally {
      setSaving(false);
    }
  };

  const renderOptionBtn = (
    label: Answer,
    text: string,
    selected: Answer | null,
    correctOption: Answer | null,
    isCorrect: boolean | null,
    onClick: () => void
  ) => {
    const isChosen = selected === label;
    const answered = selected !== null;

    const base =
      "cursor-pointer w-full px-4 py-3 rounded-lg transition duration-300 text-sm font-medium text-left";
    let style = "bg-[#3C4B64] text-[#7CF9C2] hover:bg-[#6fd9a0]";

    if (answered) {
      if (isChosen && isCorrect === true) {
        style = "bg-[#7CF9C2] text-[#0B1020] ring-2 ring-[#7CF9C2]";
      } else if (isChosen && isCorrect === false) {
        style = "bg-[#FF6F61] text-white ring-2 ring-[#FF6F61]";
      } else if (correctOption === label) {
        style = "bg-[#2A3144] text-[#A7B5DD] ring-2 ring-[#7CF9C2]";
      } else {
        style = "bg-[#2A3144] text-[#A7B5DD] opacity-70";
      }
    }

    return (
      <button
        key={label}
        onClick={onClick}
        disabled={answered}
        className={[base, style].join(" ")}
        title={answered ? "Odpowiedź została wybrana" : "Zaznacz odpowiedź"}
      >
        <span className="font-semibold mr-2">{label}:</span> {text}
      </button>
    );
  };

  return (
    <div className="bg-[#0B1020] text-[#F5F7FF] min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-14 py-8 md:py-16">
      {loading ? (
        <div className="text-center text-xl text-[#7CF9C2]">
          Ładowanie szczegółów matury...
        </div>
      ) : error ? (
        <div className="text-center text-red-500 text-lg">Błąd: {error}</div>
      ) : !matura ? (
        <div className="text-center text-[#FF6F61]">Nie znaleziono matury.</div>
      ) : (
        <div>
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-[#7CF9C2]">
              {matura.name ?? "Szczegóły matury"}
            </h2>
            <div className="mt-3 flex items-center justify-center gap-4 text-sm">
              <span className="px-2 py-1 rounded-full bg-[#1E2330]">
                Status:{" "}
                <strong className="text-[#7CF9C2]">{matura.status}</strong>
              </span>
              <span className="px-2 py-1 rounded-full bg-[#1E2330]">
                Postęp:{" "}
                <strong className="text-[#7CF9C2]">
                  {answeredCount}/{totalTasks}
                </strong>
              </span>
              <span className="px-2 py-1 rounded-full bg-[#1E2330]">
                Wynik:{" "}
                <strong className="text-[#7CF9C2]">
                  {matura.score}/{matura.maxPoints} pkt
                </strong>
              </span>
            </div>
            {saving && (
              <div className="text-center text-sm text-[#A7B5DD] mt-2">
                Zapisywanie odpowiedzi...
              </div>
            )}
          </div>

          <div className="space-y-8">
            {matura.snapshot?.length ? (
              matura.snapshot.map((section, sIdx) => (
                <div
                  key={sIdx}
                  className="p-6 bg-[#1E2330] rounded-2xl shadow-xl max-w-3xl mx-auto"
                >
                  <h3 className="font-semibold text-xl mb-4 text-center">
                    {section.name}
                  </h3>

                  {section.tasks?.length ? (
                    section.tasks.map((task, tIdx) => (
                      <div key={tIdx} className="mb-6">
                        <h4 className="font-medium text-lg mb-3 text-center">
                          Zadanie {tIdx + 1}: {task.content}
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {(["A", "B", "C", "D"] as Answer[]).map((opt) =>
                            renderOptionBtn(
                              opt,
                              task.options[opt],
                              task.userAnswer,
                              task.correctOption,
                              task.isCorrect,
                              () => handleAnswerClick(sIdx, tIdx, opt)
                            )
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-center text-[#FF6F61]">
                      Brak zadań w tej sekcji.
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-sm text-center text-[#FF6F61]">
                Brak sekcji do wyświetlenia.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
