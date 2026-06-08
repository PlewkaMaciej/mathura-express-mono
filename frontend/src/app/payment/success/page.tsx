import Link from "next/link";
import { CheckCircle2, FileText, Home, Sparkles } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <main className="bg-[#07111f] text-slate-50">
      <section className="mx-auto grid min-h-[calc(100dvh-5rem)] w-full max-w-[1100px] place-items-center px-6 py-12">
        <div className="w-full max-w-2xl rounded-lg border border-white/10 bg-white/[0.06] p-8 text-center shadow-[0_32px_90px_-58px_rgba(0,0,0,1)] backdrop-blur">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-emerald-300 text-slate-950">
            <CheckCircle2 className="h-9 w-9" aria-hidden />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Płatność zakończona
          </p>
          <h1 className="mt-3 text-4xl font-black text-white">
            Dziękujemy za zakup kursu
          </h1>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
            Dostęp zostanie przypisany automatycznie do Twojego konta. Jeśli nie
            widzisz go od razu, odśwież stronę za chwilę.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link
              href="/generator"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-emerald-200"
            >
              <FileText className="h-5 w-5" aria-hidden />
              Przejdź do generatora
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
            >
              <Home className="h-5 w-5" aria-hidden />
              Wróć na stronę główną
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Sparkles className="h-4 w-4 text-amber-300" aria-hidden />
            Możesz już tworzyć arkusze i pracować z zadaniami.
          </div>
        </div>
      </section>
    </main>
  );
}
