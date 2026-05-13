"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

const NAV = [{ href: "/generator", label: "Generator matur" }];

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`relative rounded-md px-3 py-2 text-[17px] font-medium text-[#F3EAD7]/90 transition hover:text-[#F3EAD7] md:text-lg ${
        active
          ? "after:absolute after:-bottom-1.5 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[#FFC857]"
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
      className={`inline-flex items-center justify-center rounded-xl border px-4 py-2 text-[15px] font-semibold transition-all duration-200 ${
        active
          ? "border-[#FFC857] bg-[#FFC857] text-[#0B1B2B] shadow-[0_0_18px_rgba(255,200,87,0.35)]"
          : "border-[#FFC857]/70 bg-[rgba(255,200,87,0.08)] text-[#F3EAD7] shadow-[0_0_12px_rgba(255,200,87,0.12)] hover:border-[#FFC857] hover:bg-[rgba(255,200,87,0.16)] hover:text-white"
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
    <header className="sticky top-0 z-50 border-b border-[#2C3B55] bg-[rgba(11,27,43,0.85)] backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-6 md:h-20 2xl:px-10">
        <Link
          href="/"
          className="text-[20px] font-semibold tracking-tight text-[#F3EAD7] md:text-[22px]"
        >
          MathuraExpress
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}

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
          className="rounded-md p-3 text-[#F3EAD7]/90 transition hover:bg-white/5 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-[#2C3B55] bg-[rgba(11,27,43,0.95)] md:hidden">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col px-6 py-4 2xl:px-10">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-[18px] text-[#F3EAD7]/90 transition hover:text-[#F3EAD7]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {isAdmin && (
              <Link
                href="/admin-panel"
                className="py-3 text-[18px] text-[#F3EAD7]/90 transition hover:text-[#F3EAD7]"
                onClick={() => setOpen(false)}
              >
                Panel administratora
              </Link>
            )}

            <Link
              href="/buyCourse"
              className="mt-3 inline-flex items-center justify-center rounded-xl border border-[#FFC857]/70 bg-[rgba(255,200,87,0.08)] px-4 py-3 text-[18px] font-semibold text-[#F3EAD7] shadow-[0_0_12px_rgba(255,200,87,0.12)] transition hover:border-[#FFC857] hover:bg-[rgba(255,200,87,0.16)] hover:text-white"
              onClick={() => setOpen(false)}
            >
              Kup kurs
            </Link>

            <SignedOut>
              <Link
                href="/sign-in"
                className="py-3 text-[18px] text-[#F3EAD7]/90 transition hover:text-[#F3EAD7]"
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
