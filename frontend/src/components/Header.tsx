"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { GraduationCap, Menu, X } from "lucide-react";

const NAV = [{ href: "/generator", label: "Generator matur" }];

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`relative rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white md:text-[15px] ${
        active
          ? "bg-white/10 text-white after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-emerald-300"
          : ""
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

function BuyCourseButton() {
  const pathname = usePathname();
  const active = pathname === "/buyCourse";

  return (
    <Link
      href="/buyCourse"
      className={`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-[15px] font-semibold transition-all duration-200 ${
        active
          ? "border-emerald-300 bg-emerald-300 text-slate-950 shadow-[0_14px_36px_-18px_rgba(52,211,153,0.9)]"
          : "border-white/10 bg-white/10 text-white shadow-[0_16px_40px_-28px_rgba(15,23,42,1)] hover:border-emerald-300/70 hover:bg-emerald-300 hover:text-slate-950"
      }`}
    >
      Kup kurs
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, isLoaded } = useUser();

  const isAdmin = isLoaded && user?.publicMetadata?.role === "admin";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-6 md:h-20 2xl:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[20px] font-bold tracking-tight text-white md:text-[22px]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-300 text-slate-950">
            <GraduationCap className="h-5 w-5" aria-hidden />
          </span>
          MathuraExpress
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-6">
          <SignedIn>
            {NAV.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </SignedIn>

          {isAdmin && (
            <NavItem href="/admin-panel" label="Panel administratora" />
          )}

          <BuyCourseButton />

          <SignedOut>
            <NavItem href="/sign-in" label="Zaloguj" />
          </SignedOut>

          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </nav>

        <button
          className="rounded-lg p-3 text-slate-100 transition hover:bg-white/10 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#07111f]/95 md:hidden">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col px-6 py-4 2xl:px-10">
            <SignedIn>
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-[17px] text-slate-200 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </SignedIn>

            {isAdmin && (
              <Link
                href="/admin-panel"
                className="rounded-lg px-3 py-3 text-[17px] text-slate-200 transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                Panel administratora
              </Link>
            )}

            <Link
              href="/buyCourse"
              className="mt-3 inline-flex items-center justify-center rounded-lg border border-emerald-300/70 bg-emerald-300 px-4 py-3 text-[17px] font-semibold text-slate-950 shadow-[0_14px_36px_-18px_rgba(52,211,153,0.9)] transition hover:border-emerald-200 hover:bg-emerald-200"
              onClick={() => setOpen(false)}
            >
              Kup kurs
            </Link>

            <SignedOut>
              <Link
                href="/sign-in"
                className="rounded-lg px-3 py-3 text-[17px] text-slate-200 transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                Zaloguj
              </Link>
            </SignedOut>

            <SignedIn>
              <div className="mt-4">
                <UserButton showName />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
}
