"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#07111f] text-slate-300">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row 2xl:px-10">
        <div className="text-sm">
          © {new Date().getFullYear()} MathuraExpress
        </div>
        <div className="flex gap-4 text-sm">
          <a href="/terms" className="transition hover:text-white">
            Regulamin
          </a>
          <a href="/privacy" className="transition hover:text-white">
            Polityka prywatności
          </a>
          <a href="/contact" className="transition hover:text-white">
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
}
