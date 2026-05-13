import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Play, Cog } from "lucide-react";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  return (
    <main className="bg-[#0B1020] text-[#F5F7FF]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_540px_at_20%_0%,#1b2252_22%,transparent_60%),radial-gradient(880px_520px_at_100%_15%,#1e3a8a_18%,transparent_65%)]" />

        <div className="mx-auto w-full max-w-[1600px] px-6 2xl:px-10 pt-16 md:pt-24 lg:pt-28 pb-12 relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Nie pozwól, by <span className="text-[#7CF9C2]">matura</span> ci
              odjechała
            </h1>

            <p className="mt-4 text-base md:text-lg text-[#C9D2EE] max-w-xl">
              Kursy maturalne z rozwiązaniami wideo. Generuj arkusze i ćwicz
              efektywnie.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/buyCourse"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-semibold bg-[#7CF9C2] text-[#0B1020] shadow-[0_10px_30px_-10px_rgba(124,249,194,.7)] transition hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0"
              >
                Kup dostęp
              </Link>

              {userId ? (
                <Link
                  href="/generator"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-semibold border border-[#2C335A] text-[#F5F7FF] bg-white/5 hover:bg-white/10 transition"
                >
                  Wypróbuj generator za darmo
                </Link>
              ) : (
                <Link
                  href="/sign-in"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-semibold border border-[#2C335A] text-[#F5F7FF] bg-white/5 hover:bg-white/10 transition"
                >
                  Zaloguj się aby użyć generatora
                </Link>
              )}
            </div>

            <div className="relative h-36 mt-8 md:hidden">
              <Image
                src="/images/train.png"
                alt="Pociąg MathuraExpress"
                fill
                sizes="100vw"
                className="object-contain object-center opacity-90"
                priority
              />
            </div>
          </div>

          <div className="flex-1 relative h-64 sm:h-80 lg:h-[420px] hidden md:block">
            <Image
              src="/images/train.png"
              alt="Pociąg MathuraExpress"
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-contain object-center opacity-95"
              priority
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1600px] px-6 2xl:px-10 pb-16">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 group rounded-xl border border-[#E6E1D0] bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-start gap-4 text-[#0D2238]">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0" aria-hidden />

                <div>
                  <div className="font-semibold text-[18px] leading-tight">
                    Gotowe rozwiązania
                  </div>

                  <div className="text-sm text-[#334155] mt-1">
                    Zadania maturalne z omówieniem krok po kroku.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 group rounded-xl border border-[#E6E1D0] bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-start gap-4 text-[#0D2238]">
                <Play className="w-7 h-7 flex-shrink-0" aria-hidden />

                <div>
                  <div className="font-semibold text-[18px] leading-tight">
                    Wideo-tutoriale
                  </div>

                  <div className="text-sm text-[#334155] mt-1">
                    Instrukcje wideo krok po kroku.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 group rounded-xl border border-[#E6E1D0] bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-start gap-4 text-[#0D2238]">
                <Cog className="w-7 h-7 flex-shrink-0" aria-hidden />

                <div>
                  <div className="font-semibold text-[18px] leading-tight">
                    Generator matur
                  </div>

                  <div className="text-sm text-[#334155] mt-1">
                    Twórz własne arkusze z bazy zadań.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-6 2xl:px-10 pb-20">
        <h3 className="text-center text-2xl md:text-3xl font-extrabold mb-6">
          Co zawiera kurs?
        </h3>

        <div className="mx-auto max-w-4xl rounded-xl border border-[#273258] bg-[#0E1630]/60 overflow-hidden">
          <div className="relative aspect-video">
            <div className="absolute inset-0 grid place-items-center text-[#A7B5DD]">
              <div className="rounded-full bg-white/10 p-4 mb-3">▶</div>

              <p className="text-sm">Wstaw player wideo (intro kursu)</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
