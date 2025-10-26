import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void; // opcjonalny handler kliknięcia
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-semibold 
                 bg-[#7CF9C2] text-[#0B1020] 
                 shadow-[0_10px_30px_-10px_rgba(124,249,194,.7)] 
                 transition 
                 hover:brightness-95 hover:-translate-y-0.5 
                 active:translate-y-0"
    >
      {children}
    </button>
  );
}
