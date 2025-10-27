"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Task {
  content: string;
  options: { A: string; B: string; C: string; D: string };
}

interface Matura {
  id: string;
  name: string;
  snapshot: { name: string; tasks: Task[] }[];
}

const MaturaDetails = () => {
  const [matura, setMatura] = useState<Matura | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { examId } = useParams();

  useEffect(() => {
    if (!examId) {
      console.log("Brak examId, kończymy...");
      return;
    }

    const fetchMaturaDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/maturas/getSingleMatura/${examId}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch matura details: ${res.statusText}`);
        }
        const data: Matura = await res.json();
        setMatura(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMaturaDetails();
  }, [examId]);

  const handleAnswerClick = (answer: "A" | "B" | "C" | "D") => {
    console.log("Wybrana odpowiedź:", answer);
  };

  return (
    <div className="bg-[#0B1020] text-[#F5F7FF] min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-14 py-8 md:py-16">
      {loading ? (
        <div className="text-center text-xl text-[#7CF9C2]">
          Ładowanie szczegółów matury...
        </div>
      ) : error ? (
        <div className="text-center text-red-500 text-lg">Błąd: {error}</div>
      ) : (
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-[#7CF9C2]">
            Szczegóły matury: {matura?.name}
          </h2>

          <div className="space-y-8">
            {matura?.snapshot && matura?.snapshot.length > 0 ? (
              matura?.snapshot.map((section, index) => (
                <div
                  key={index}
                  className="p-6 bg-[#1E2330] rounded-2xl shadow-xl max-w-3xl mx-auto"
                >
                  <h3 className="font-semibold text-xl mb-4 text-center ">
                    {section.name}
                  </h3>

                  {section.tasks && section.tasks.length > 0 ? (
                    section.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="mb-6">
                        <h4 className="font-medium text-lg mb-2 text-center ">
                          Zadanie {taskIndex + 1}: {task.content}
                        </h4>
                        <div className="mt-4 space-y-2 text-center">
                          <h5 className="font-semibold text-sm">
                            Wybierz odpowiedź:
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {["A", "B", "C", "D"].map((option) => (
                              <button
                                key={option}
                                onClick={() =>
                                  handleAnswerClick(
                                    option as "A" | "B" | "C" | "D"
                                  )
                                }
                                className="cursor-pointer w-full px-4 py-3 bg-[#3C4B64] text-[#7CF9C2] rounded-lg hover:bg-[#6fd9a0] transition duration-300 text-sm font-medium "
                              >
                                {option}:{" "}
                                {task.options[option as "A" | "B" | "C" | "D"]}
                              </button>
                            ))}
                          </div>
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
};

export default MaturaDetails;
