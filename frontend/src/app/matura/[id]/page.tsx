"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OpenTasksSingleAnswer } from "@/components/openTask/OpenTaskSingleAnswer";

type Option = "A" | "B" | "C" | "D";

type ClosedTask = {
  id: string;
  content: string;
  correctAnswer: Option;
  answers?: { A: string; B: string; C: string; D: string }[];
  points?: number;
};

export type OpenTask = {
  id: string;
  name: string;
  content: string;
  maxPoints: number;
  rubric: string;
  referenceAnswer?: string | null;
};

export type OpenAnswerDTO = {
  openTaskId: string;
  answer?: string | null;
  awardedPoints?: number | null;
  feedback?: string | null;
  gradingJson?: string | null;
  gradedAt?: string | null;
};

type Matura = {
  id: string;
  name: string;
  createdAt: string;
  status: boolean;
  closedTasks: ClosedTask[];
  openTasks: OpenTask[];
};

type ClosedAnswerDTO = {
  closedTaskId: string;
  answer: Option;
  isCorrect: boolean;
};

type UserMaturaDTO = {
  id: string;
  earnedPoints: number;
  closedAnswers: ClosedAnswerDTO[];
  openAnswers: OpenAnswerDTO[];
};

type GetResponse = {
  matura: Matura;
  userMatura: UserMaturaDTO;
};

type SaveResponse = {
  ok: boolean;
  isCorrect: boolean;
  earnedPoints: number;
  error?: string;
};

const options: Option[] = ["A", "B", "C", "D"];

export default function MaturaPage() {
  const router = useRouter();
  const { id: maturaId } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(true);
  const [matura, setMatura] = useState<Matura | null>(null);

  const [userMaturaId, setUserMaturaId] = useState<string | null>(null);
  const [points, setPoints] = useState(0);

  const [savingTaskId, setSavingTaskId] = useState<string | null>(null);

  const [closedAnswers, setClosedAnswers] = useState<ClosedAnswerDTO[]>([]);
  const [openAnswers, setOpenAnswers] = useState<OpenAnswerDTO[]>([]);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(`/api/matura/${maturaId}`);
        const data = (await res.json()) as GetResponse;

        if (!res.ok) throw new Error((data as any)?.error ?? "Fetch error");

        setMatura(data.matura);
        setUserMaturaId(data.userMatura.id);
        setPoints(data.userMatura.earnedPoints);
        setClosedAnswers(data.userMatura.closedAnswers ?? []);
        setOpenAnswers(data.userMatura.openAnswers ?? []);
      } catch (e) {
        console.error(e);
        toast.error("Błąd pobierania matury");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [maturaId]);

  function getUserAnswer(taskId: string) {
    return closedAnswers.find((a) => a.closedTaskId === taskId);
  }

  async function answerTask(task: ClosedTask, picked: Option) {
    if (!userMaturaId) return;

    const existing = getUserAnswer(task.id);
    if (existing) {
      toast.info("Na to zadanie już odpowiedziałeś");
      return;
    }

    setSavingTaskId(task.id);

    try {
      const res = await fetch("/api/matura/closed-answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userMaturaId,
          closedTaskId: task.id,
          answer: picked,
        }),
      });

      const data = (await res.json()) as SaveResponse;

      if (!res.ok || !data.ok) {
        toast.error(data.error ?? "Błąd zapisu odpowiedzi");
        return;
      }

      setClosedAnswers((prev) => [
        ...prev,
        { closedTaskId: task.id, answer: picked, isCorrect: data.isCorrect },
      ]);

      setPoints(data.earnedPoints);

      data.isCorrect
        ? toast.success("Dobrze! ✅")
        : toast.error("Źle ❌ (poprawna zaznaczona na zielono)");
    } catch {
      toast.error("Błąd zapisu odpowiedzi");
    } finally {
      setSavingTaskId(null);
    }
  }

  function optionClass(task: ClosedTask, opt: Option) {
    const userAnswer = getUserAnswer(task.id);
    const base = "text-left rounded-lg border px-4 py-3 text-sm transition";

    if (!userAnswer) {
      return `${base} border-[#2C3B55] bg-[rgba(11,27,43,0.35)] text-[#F3EAD7]/85 hover:border-[#7CF9C2]`;
    }

    const picked = userAnswer.answer;
    const correct = task.correctAnswer;

    if (userAnswer.isCorrect && opt === picked) {
      return `${base} border-green-500/60 bg-green-500/10 text-green-200`;
    }

    if (!userAnswer.isCorrect && opt === picked) {
      return `${base} border-red-500/60 bg-red-500/10 text-red-200`;
    }

    if (!userAnswer.isCorrect && opt === correct) {
      return `${base} border-green-500/60 bg-green-500/10 text-green-200`;
    }

    return `${base} border-[#2C3B55] bg-[rgba(11,27,43,0.25)] text-[#F3EAD7]/50`;
  }

  if (loading) {
    return (
      <main className="bg-[#050E19] min-h-screen text-[#F3EAD7]">
        <ToastContainer position="top-center" theme="dark" />
        <div className="p-10 text-center text-white/70">Ładowanie…</div>
      </main>
    );
  }

  if (!matura) {
    return (
      <main className="bg-[#050E19] min-h-screen text-[#F3EAD7]">
        <ToastContainer position="top-center" theme="dark" />
        <div className="p-10 text-center text-white/70">
          Nie znaleziono matury.
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#050E19] min-h-screen text-[#F3EAD7]">
      <ToastContainer position="top-center" theme="dark" />

      <div className="mx-auto max-w-[1100px] px-6 py-12">
        <div className="flex justify-between mb-6">
          <button
            onClick={() => router.back()}
            className="opacity-70 hover:opacity-100"
          >
            ← Wróć
          </button>
          <div className="text-[#7CF9C2] font-semibold">Punkty: {points}</div>
        </div>

        <h1 className="text-3xl font-semibold mb-8">{matura.name}</h1>

        <section className="space-y-5">
          {matura.closedTasks.map((task, idx) => {
            const alreadyAnswered = !!getUserAnswer(task.id);

            return (
              <div
                key={task.id}
                className="border border-[#2C3B55] rounded-xl p-5"
              >
                <p className="text-sm opacity-70 mb-2">Zadanie {idx + 1}</p>
                <div className="mb-4 whitespace-pre-wrap">{task.content}</div>

                <div className="grid md:grid-cols-2 gap-3">
                  {options.map((opt) => (
                    <button
                      key={opt}
                      disabled={alreadyAnswered || savingTaskId === task.id}
                      onClick={() => answerTask(task, opt)}
                      className={optionClass(task, opt)}
                    >
                      <b>{opt}:</b> {task.answers?.[0]?.[opt]}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <h2 className="text-2xl font-semibold mt-10 mb-5">Zadania otwarte</h2>

        {userMaturaId && matura.openTasks.length ? (
          <OpenTasksSingleAnswer
            openTasks={matura.openTasks}
            userMaturaId={userMaturaId}
            openAnswers={openAnswers}
            setOpenAnswers={setOpenAnswers}
            onPointsUpdate={(p: any) => setPoints(p)}
          />
        ) : (
          <div className="text-white/70">Brak zadań otwartych.</div>
        )}
      </div>
    </main>
  );
}
