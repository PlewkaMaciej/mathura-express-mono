import "./globals.css";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/ams"] },
  tex: { packages: { "[+]": ["ams"] } },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className="antialiased min-h-dvh flex flex-col">
        <Header />
        <MathJaxContext version={3} config={config}>
          <main className="flex-1 bg-[#0D2238]">{children}</main>
        </MathJaxContext>
        <Footer />
      </body>
    </html>
  );
}
