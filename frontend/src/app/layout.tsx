// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { clerkLocale } from "../../clerkStyles/clerkLocale";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <ClerkProvider localization={clerkLocale}>
          <div className="min-h-dvh flex flex-col bg-[#0D2238]">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
