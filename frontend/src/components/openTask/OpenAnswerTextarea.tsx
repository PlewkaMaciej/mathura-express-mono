"use client";

import { MathToolbar } from "./MathToolbar";
import { InlineDrawingCanvas } from "./InlineDrawingCanvas";

type Props = {
  value: string;
  disabled: boolean;
  mode: "text" | "drawing";
  taskTitle?: string;
  taskContent?: string;
  textareaRef?: (el: HTMLTextAreaElement | null) => void;
  onChange: (val: string) => void;
  onInsert: (text: string) => void;
  onScreenshotChange?: (dataUrl: string | null) => void;
};

export function OpenAnswerTextarea({
  value,
  disabled,
  mode,
  taskTitle,
  taskContent,
  textareaRef,
  onChange,
  onInsert,
  onScreenshotChange,
}: Props) {
  const cls =
    "mt-3 w-full rounded-lg border border-white/10 bg-[#07111f] px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-emerald-300/70 disabled:cursor-not-allowed disabled:opacity-60";

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
            placeholder="Wpisz odpowiedź..."
          />
        </>
      )}

      {mode === "drawing" && (
        <InlineDrawingCanvas
          disabled={disabled}
          taskTitle={taskTitle}
          taskContent={taskContent}
          onScreenshotChange={onScreenshotChange}
        />
      )}
    </>
  );
}
