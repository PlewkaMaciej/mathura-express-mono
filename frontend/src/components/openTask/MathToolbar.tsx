"use client";

type Props = {
  onInsert: (text: string) => void;
};

export function MathToolbar({ onInsert }: Props) {
  const btn =
    "rounded-lg border border-[#2C3B55] bg-[#081524] px-2.5 py-1.5 text-sm hover:border-[#7CF9C2] transition";

  return (
    <div className="flex flex-wrap gap-2">
      {[
        ["√()", "√"],
        ["^2", "x²"],
        ["^()", "x^y"],
        ["π", "π"],
        ["°", "°"],
        ["∠", "∠"],
        ["≈", "≈"],
        ["≠", "≠"],
        ["≤", "≤"],
        ["≥", "≥"],
        ["\\frac{}{ }", "\\frac"],
      ].map(([val, label]) => (
        <button
          key={val}
          type="button"
          className={btn}
          onClick={() => onInsert(val)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
