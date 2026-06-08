import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Play,
  Sparkles,
} from "lucide-react";
import { auth } from "@clerk/nextjs/server";

const features = [
  {
    icon: CheckCircle2,
    title: "Gotowe rozwiązania",
    description: "Zadania maturalne z omówieniem krok po kroku.",
  },
  {
    icon: Play,
    title: "Wideo-tutoriale",
    description: "Krótkie lekcje prowadzące przez typowe schematy zadań.",
  },
  {
    icon: FileText,
    title: "Generator matur",
    description: "Twórz własne arkusze z bazy zadań i ćwicz wybrane działy.",
  },
];

const stats = [
  { value: "3 kroki", label: "od wyboru działu do arkusza" },
  { value: "Wideo", label: "do najważniejszych typów zadań" },
  { value: "AI", label: "wsparcie przy ćwiczeniu odpowiedzi" },
];

export default async function Home() {
  const { userId } = await auth();

  return (
    <main className="bg-[#07111f] text-slate-50">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#07111f_0%,#0f2337_48%,#122b2e_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#07111f] to-transparent" />

        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-6 pb-10 pt-8 md:grid-cols-[1.02fr_0.98fr] md:pb-12 md:pt-12 lg:gap-12 2xl:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-medium text-emerald-100 shadow-[0_16px_60px_-36px_rgba(16,185,129,0.75)] backdrop-blur">
              <Sparkles className="h-4 w-4 text-emerald-300" aria-hidden />
              Kurs i generator arkuszy do matury z matematyki
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              Nie pozwól, by matura z matematyki Ci odjechała
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Ćwicz na zadaniach maturalnych, oglądaj rozwiązania wideo i
              generuj własne arkusze wtedy, kiedy naprawdę ich potrzebujesz.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/buyCourse"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-300 px-6 py-3 text-base font-bold text-slate-950 shadow-[0_20px_50px_-24px_rgba(52,211,153,0.95)] transition hover:-translate-y-0.5 hover:bg-emerald-200 active:translate-y-0"
              >
                Kup dostęp
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>

              <Link
                href={userId ? "/generator" : "/sign-in"}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:border-white/20 hover:bg-white/15"
              >
                {userId
                  ? "Wypróbuj generator"
                  : "Zaloguj się, aby użyć generatora"}
              </Link>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.value}
                  className="rounded-lg border border-white/10 bg-white/[0.06] p-4 backdrop-blur"
                >
                  <div className="text-lg font-bold text-white">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm leading-5 text-slate-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-[8px] border border-white/10 bg-[#0b1726]/70 shadow-[0_40px_90px_-50px_rgba(0,0,0,1)] md:min-h-[420px]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
            <div className="absolute left-5 top-5 z-10 rounded-lg border border-white/10 bg-[#07111f]/80 px-4 py-3 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                MathuraExpress
              </div>
              <div className="mt-1 text-sm text-slate-300">
                Nauka, arkusze, rozwiązania
              </div>
            </div>
            <Image
              src="/images/train.png"
              alt="Pociąg MathuraExpress"
              fill
              sizes="(min-width: 768px) 46vw, 100vw"
              className="object-contain object-center p-8 pt-20 md:p-10"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-6 py-10 2xl:px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_70px_-50px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-white/[0.07]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-300 text-slate-950">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h2>
                <p className="mt-2 leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-6 pb-14 pt-6 2xl:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Podgląd kursu
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-white md:text-4xl">
              Wideo i zadania w jednym miejscu
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Sekcja kursu może prowadzić ucznia od teorii, przez przykłady, aż
              do samodzielnego arkusza. Bez przełączania się między notatkami i
              losowymi materiałami.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0b1726] shadow-[0_28px_90px_-54px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <span className="text-sm text-slate-400">
                Intro kursu maturalnego
              </span>
            </div>
            <div className="relative aspect-video">
              <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#0f2337,#07111f)]">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-300 text-slate-950 shadow-[0_18px_44px_-22px_rgba(52,211,153,1)]">
                  <Play className="ml-1 h-7 w-7 fill-current" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
