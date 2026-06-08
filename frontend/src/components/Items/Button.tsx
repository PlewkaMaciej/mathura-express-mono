import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="
        inline-flex items-center gap-2 px-6 py-3 rounded-lg
        text-base font-semibold 
        bg-emerald-300 text-slate-950
        shadow-[0_14px_36px_-18px_rgba(52,211,153,0.9)] 
        transition 
        hover:bg-emerald-200 hover:-translate-y-0.5 
        active:translate-y-0
      "
    >
      {children}
    </button>
  );
}
