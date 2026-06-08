import "./globals.css";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { clerkLocale } from "../../clerkStyles/clerkLocale";
import { ToastProvider } from "@/components/Toast/ToastProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <ClerkProvider localization={clerkLocale}>
          <div className="flex min-h-dvh flex-col bg-[#07111f]">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ToastProvider />
        </ClerkProvider>
      </body>
    </html>
  );
}
