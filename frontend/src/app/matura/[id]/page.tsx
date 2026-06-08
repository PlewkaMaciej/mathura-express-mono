"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, Circle, Trophy } from "lucide-react";
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

  const maxPoints = useMemo(() => {
    if (!matura) return 0;

    const closed = matura.closedTasks.reduce(
      (sum, task) => sum + (task.points ?? 1),
      0,
    );
    const open = matura.openTasks.reduce(
      (sum, task) => sum + task.maxPoints,
      0,
    );

    return closed + open;
  }, [matura]);

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
        ? toast.success("Dobrze! Odpowiedź zapisana.")
        : toast.error("Źle. Poprawna odpowiedź jest zaznaczona na zielono.");
    } catch {
      toast.error("Błąd zapisu odpowiedzi");
    } finally {
      setSavingTaskId(null);
    }
  }

  function optionClass(task: ClosedTask, opt: Option) {
    const userAnswer = getUserAnswer(task.id);
    const base =
      "group flex min-h-[64px] w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm leading-6 transition disabled:cursor-not-allowed";

    if (!userAnswer) {
      return `${base} border-white/10 bg-white/[0.04] text-slate-200 hover:border-emerald-300/60 hover:bg-white/[0.07]`;
    }

    const picked = userAnswer.answer;
    const correct = task.correctAnswer;

    if (userAnswer.isCorrect && opt === picked) {
      return `${base} border-emerald-400/60 bg-emerald-400/10 text-emerald-100`;
    }

    if (!userAnswer.isCorrect && opt === picked) {
      return `${base} border-red-400/60 bg-red-400/10 text-red-100`;
    }

    if (!userAnswer.isCorrect && opt === correct) {
      return `${base} border-emerald-400/60 bg-emerald-400/10 text-emerald-100`;
    }

    return `${base} border-white/10 bg-white/[0.025] text-slate-500`;
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#07111f] text-slate-50">
        <ToastContainer position="top-center" theme="dark" />
        <div className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-[1100px] place-items-center px-6">
          <div className="rounded-lg border border-white/10 bg-white/[0.05] px-6 py-5 text-slate-300">
            Ładowanie arkusza...
          </div>
        </div>
      </main>
    );
  }

  if (!matura) {
    return (
      <main className="min-h-screen bg-[#07111f] text-slate-50">
        <ToastContainer position="top-center" theme="dark" />
        <div className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-[1100px] place-items-center px-6">
          <div className="rounded-lg border border-white/10 bg-white/[0.05] p-8 text-center">
            <h1 className="text-2xl font-bold text-white">
              Nie znaleziono matury
            </h1>
            <button
              onClick={() => router.push("/generator")}
              className="mt-5 rounded-lg bg-emerald-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-emerald-200"
            >
              Wróć do generatora
            </button>
          </div>
        </div>
      </main>
    );
  }

  const answeredClosed = closedAnswers.length;
  const totalTasks = matura.closedTasks.length + matura.openTasks.length;
  const answeredOpen = openAnswers.filter(
    (answer) => answer.answer || (answer as any).screenshotUrl,
  ).length;

  return (
    <main className="min-h-screen bg-[#07111f] text-slate-50">
      <ToastContainer position="top-center" theme="dark" />

      <div className="mx-auto w-full max-w-[1180px] px-6 py-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => router.back()}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Wróć
          </button>

          <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">
            <Trophy className="h-4 w-4" aria-hidden />
            Punkty: {points}
            {maxPoints > 0 ? ` / ${maxPoints}` : ""}
          </div>
        </div>

        <header className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(15,35,55,0.9),rgba(18,43,46,0.72))] p-6 shadow-[0_32px_90px_-58px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Arkusz maturalny
              </p>
              <h1 className="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">
                {matura.name}
              </h1>
              <p className="mt-3 text-slate-300">
                Rozwiązuj zadania, zapisuj odpowiedzi i sprawdzaj postęp w
                jednym widoku.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3">
                <div className="text-xl font-black text-white">
                  {matura.closedTasks.length}
                </div>
                <div className="mt-1 text-xs text-slate-400">zamknięte</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3">
                <div className="text-xl font-black text-white">
                  {matura.openTasks.length}
                </div>
                <div className="mt-1 text-xs text-slate-400">otwarte</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3">
                <div className="text-xl font-black text-white">
                  {answeredClosed + answeredOpen}/{totalTasks}
                </div>
                <div className="mt-1 text-xs text-slate-400">zrobione</div>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                Część 1
              </p>
              <h2 className="mt-1 text-2xl font-black text-white">
                Zadania zamknięte
              </h2>
            </div>
            <span className="text-sm text-slate-400">
              {answeredClosed}/{matura.closedTasks.length} odpowiedzi
            </span>
          </div>

          <div className="space-y-4">
            {matura.closedTasks.map((task, idx) => {
              const alreadyAnswered = !!getUserAnswer(task.id);

              return (
                <article
                  key={task.id}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_70px_-58px_rgba(0,0,0,1)]"
                >
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-emerald-300">
                        Zadanie {idx + 1}
                      </p>
                      <div className="mt-2 whitespace-pre-wrap leading-7 text-slate-100">
                        {task.content}
                      </div>
                    </div>
                    <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-slate-300">
                      {task.points ?? 1} pkt
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    {options.map((opt) => {
                      const userAnswer = getUserAnswer(task.id);
                      const isSelected = userAnswer?.answer === opt;
                      const isCorrectAfterAnswer =
                        !!userAnswer && task.correctAnswer === opt;

                      return (
                        <button
                          key={opt}
                          disabled={alreadyAnswered || savingTaskId === task.id}
                          onClick={() => answerTask(task, opt)}
                          className={optionClass(task, opt)}
                        >
                          <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-current text-xs font-black">
                            {opt}
                          </span>
                          <span className="min-w-0 flex-1">
                            {task.answers?.[0]?.[opt]}
                          </span>
                          {(isSelected || isCorrectAfterAnswer) &&
                            (isCorrectAfterAnswer ? (
                              <CheckCircle2
                                className="mt-1 h-5 w-5 shrink-0"
                                aria-hidden
                              />
                            ) : (
                              <Circle
                                className="mt-1 h-5 w-5 shrink-0"
                                aria-hidden
                              />
                            ))}
                        </button>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Część 2
            </p>
            <h2 className="mt-1 text-2xl font-black text-white">
              Zadania otwarte
            </h2>
          </div>

          {userMaturaId && matura.openTasks.length ? (
            <OpenTasksSingleAnswer
              openTasks={matura.openTasks}
              userMaturaId={userMaturaId}
              openAnswers={openAnswers}
              setOpenAnswers={setOpenAnswers}
              onPointsUpdate={(p: any) => setPoints(p)}
            />
          ) : (
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 text-slate-300">
              Brak zadań otwartych.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
