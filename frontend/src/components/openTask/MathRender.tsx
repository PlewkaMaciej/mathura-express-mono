"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

function normalizeMath(text: string) {
  if (!text) return "";

  return text
    .replace(/\\\\Delta|\\Delta/gi, "Δ")
    .replace(/\b(delta|delte|deltę|delty|delcie)\b/gi, "Δ")
    .replace(/\\\(/g, "$")
    .replace(/\\\)/g, "$")
    .replace(/\\\[/g, "$$")
    .replace(/\\\]/g, "$$");
}

export function MathRender({ text }: { text: string }) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {normalizeMath(text)}
      </ReactMarkdown>
    </div>
  );
}
