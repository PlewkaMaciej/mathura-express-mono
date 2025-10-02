"use client";
export default function Footer() {
  return (
    <footer className="w-full border-t border-[#2C3B55] bg-[#0D2238] text-[#F3EAD7]">
      <div className="mx-auto w-full max-w-[1600px] px-6 2xl:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm opacity-90">
          © {new Date().getFullYear()} MathuraExpress
        </div>
        <div className="flex gap-4 text-sm">
          <a href="/terms" className="hover:underline">
            Regulamin
          </a>
          <a href="/privacy" className="hover:underline">
            Polityka prywatności
          </a>
          <a href="/contact" className="hover:underline">
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
}
