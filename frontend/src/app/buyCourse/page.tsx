import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  LockKeyhole,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import BuyCourseButton from "@/components/BuyCourseButton";
import prisma from "@/lib/prisma";

const benefits = [
  "Pełny dostęp do materiałów kursu",
  "Rozwiązania wideo krok po kroku",
  "Generator arkuszy do samodzielnej pracy",
  "Zadania zamknięte i otwarte w jednym miejscu",
];

const modules = [
  {
    icon: PlayCircle,
    title: "Wideo",
    text: "Zobacz tok rozumowania i typowe pułapki w zadaniach maturalnych.",
  },
  {
    icon: FileText,
    title: "Arkusze",
    text: "Generuj zestawy zadań i wracaj do nich z poziomu swojego konta.",
  },
  {
    icon: Sparkles,
    title: "Ćwiczenia",
    text: "Ćwicz podobne zadania po wysłaniu odpowiedzi do zadania otwartego.",
  },
];

function SignInPrompt() {
  return (
    <main className="bg-[#07111f] text-slate-50">
      <section className="mx-auto grid min-h-[calc(100dvh-5rem)] w-full max-w-[1200px] place-items-center px-6 py-12">
        <div className="max-w-xl rounded-lg border border-white/10 bg-white/[0.05] p-8 text-center shadow-[0_32px_90px_-58px_rgba(0,0,0,1)]">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-emerald-300 text-slate-950">
            <LockKeyhole className="h-6 w-6" aria-hidden />
          </div>
          <h1 className="mt-6 text-3xl font-black text-white">Kup kurs</h1>
          <p className="mt-3 leading-7 text-slate-300">
            Zaloguj się, żeby przypisać zakup do swojego konta i od razu uzyskać
            dostęp po płatności.
          </p>
          <Link
            href="/sign-in"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-emerald-200"
          >
            Zaloguj się
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default async function BuyCoursePage() {
  const { userId: clerkUserId } = await auth();

  if (!clerkUserId) {
    return <SignInPrompt />;
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: clerkUserId },
  });

  if (!user) {
    return (
      <main className="bg-[#07111f] text-slate-50">
        <section className="mx-auto grid min-h-[calc(100dvh-5rem)] w-full max-w-[1200px] place-items-center px-6 py-12">
          <div className="max-w-xl rounded-lg border border-red-400/20 bg-red-500/10 p-8 text-center">
            <h1 className="text-3xl font-black text-white">Kup kurs</h1>
            <p className="mt-3 text-red-100">
              Nie znaleziono użytkownika. Spróbuj odświeżyć stronę albo zaloguj
              się ponownie.
            </p>
          </div>
        </section>
      </main>
    );
  }

  if (user.boughtCourse) {
    return (
      <main className="bg-[#07111f] text-slate-50">
        <section className="mx-auto grid min-h-[calc(100dvh-5rem)] w-full max-w-[1200px] place-items-center px-6 py-12">
          <div className="max-w-xl rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-8 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-300" />
            <h1 className="mt-5 text-3xl font-black text-white">
              Masz już dostęp
            </h1>
            <p className="mt-3 leading-7 text-slate-300">
              Kurs jest przypisany do Twojego konta. Możesz przejść do
              generatora i zacząć pracę nad arkuszem.
            </p>
            <Link
              href="/generator"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-emerald-200"
            >
              Przejdź do generatora
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#07111f] text-slate-50">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#07111f_0%,#0f2337_52%,#122b2e_100%)]" />

        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-[1fr_420px] lg:items-center 2xl:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-medium text-emerald-100">
              <Sparkles className="h-4 w-4 text-emerald-300" aria-hidden />
              Jednorazowy dostęp do kursu
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
              Kurs maturalny, który prowadzi od zadania do wyniku
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Kup dostęp do materiałów, rozwiązań wideo i generatora arkuszy.
              Wszystko jest spięte z kontem, więc możesz wracać do swoich
              arkuszy i wyników.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-emerald-300"
                    aria-hidden
                  />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-[0_32px_90px_-58px_rgba(0,0,0,1)] backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Dostęp
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  Pełny kurs
                </h2>
              </div>
              <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm font-semibold text-emerald-200">
                Na konto
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="text-sm text-slate-400">Płatność</div>
              <div className="mt-1 text-3xl font-black text-white">
                Jednorazowa
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Po zakupie Stripe przekieruje Cię na stronę potwierdzenia, a
                webhook przypisze dostęp do konta.
              </p>
            </div>

            <div className="mt-6">
              <BuyCourseButton className="w-full" />
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <Clock3 className="h-4 w-4 text-amber-300" aria-hidden />
              Dostęp pojawi się automatycznie po zaksięgowaniu płatności.
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-4 px-6 py-10 md:grid-cols-3 2xl:px-10">
        {modules.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <Icon className="h-7 w-7 text-emerald-300" aria-hidden />
              <h2 className="mt-4 text-xl font-bold text-white">
                {item.title}
              </h2>
              <p className="mt-2 leading-6 text-slate-300">{item.text}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
