"use client";

import { MathToolbar } from "./MathToolbar";
import { InlineDrawingCanvas } from "./InlineDrawingCanvas";

type Props = {
  value: string;
  disabled: boolean;
  mode: "text" | "drawing";
  textareaRef?: (el: HTMLTextAreaElement | null) => void;
  onChange: (val: string) => void;
  onInsert: (text: string) => void;
  onScreenshotChange?: (dataUrl: string | null) => void;
};

export function OpenAnswerTextarea({
  value,
  disabled,
  mode,
  textareaRef,
  onChange,
  onInsert,
  onScreenshotChange,
}: Props) {
  const cls =
    "mt-3 w-full rounded-lg bg-[#0B1B2B] border border-[#2C3B55] px-3 py-2.5 text-[#E9EEF7]";

  return (
    <>
      {mode === "text" && (
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
        </>
      )}

      {mode === "drawing" && (
        <InlineDrawingCanvas
          disabled={disabled}
          onScreenshotChange={onScreenshotChange}
        />
      )}
    </>
  );
}
