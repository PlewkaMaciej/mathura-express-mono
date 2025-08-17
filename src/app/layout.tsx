import "./globals.css";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className="antialiased min-h-dvh flex flex-col">
        <Header />
        <main className="flex-1 bg-[#0D2238]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
