"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
const NAV = [
  { href: "/library", label: "Biblioteka" },
  { href: "/generator", label: "Generator" },
  { href: "/pricing", label: "Cennik" },
  { href: "/sign-in", label: "Zaloguj" },
];

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`relative rounded-md px-3 py-2 text-[17px] md:text-lg font-medium text-[#F3EAD7]/90 hover:text-[#F3EAD7] ${
        active
          ? "after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-1 after:rounded-full after:bg-[#FFC857]"
          : ""
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#2C3B55] bg-[rgba(11,27,43,0.85)] backdrop-blur">
     
     
      <div className="mx-auto w-full max-w-[1600px] h-16 md:h-20 px-6 2xl:px-10 flex items-center justify-between">
      <div className="flex justify-between">
     
     </div>
        <Link
          href="/"
          className="text-[#F3EAD7] font-semibold tracking-tight text-[20px] md:text-[22px]"
        >
          MathuraExpress
        </Link>
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV.map((i) => (
            <NavItem key={i.href} {...i} />
          ))}
          <UserButton showName/>
        </nav>
        <button
          className="md:hidden text-[#F3EAD7]/90 p-3 rounded hover:bg-white/5"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#2C3B55] bg-[rgba(11,27,43,0.95)]">
          <div className="mx-auto w-full max-w-[1600px] px-6 2xl:px-10 py-4 flex flex-col">
            {NAV.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-[18px] py-3 text-[#F3EAD7]/90 hover:text-[#F3EAD7]"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </Link>
            ))}
            
          </div>
        </div>
      )}
      
    </header>
  );
}
