"use client";

import { MathToolbar } from "./MathToolbar";
import { InlineDrawingCanvas } from "./InlineDrawingCanvas";

type Props = {
  value: string;
  disabled: boolean;
  isPractice: boolean;
  textareaRef?: (el: HTMLTextAreaElement | null) => void;
  onChange: (val: string) => void;
  onInsert: (text: string) => void;
};

export function OpenAnswerTextarea({
  value,
  disabled,
  isPractice,
  textareaRef,
  onChange,
  onInsert,
}: Props) {
  const cls = isPractice
    ? "mt-3 w-full rounded-lg bg-[#0B1B2B] border border-[#2C3B55] px-3 py-2.5 text-[#E9EEF7]"
    : "mt-3 w-full rounded-lg bg-[#0B1B2B] border border-[#2C3B55] px-3 py-2.5 text-[#7CF9C2]";

  return (
    <>
      <MathToolbar onInsert={onInsert} />
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        rows={6}
        className={cls}
        placeholder="Wpisz odpowiedź…"
      />
      <InlineDrawingCanvas />
    </>
  );
}
