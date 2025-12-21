"use client";

import { useState, useRef, useEffect } from "react";
import { QuestionType } from "@/types/video";
import Button from "@/components/Items/Button";
interface Props {
  visible: boolean;
  duration: number;
  currentTime: number;
  questions: QuestionType[];
  onSeekPercent: (percent: number) => void;
}

export default function ProgressBar({
  visible,
  duration,
  currentTime,
  questions,
  onSeekPercent,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragPercent, setDragPercent] = useState(0);

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const getPercentFromClientX = (clientX: number) => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const percent = (clientX - rect.left) / rect.width;
    return Math.min(1, Math.max(0, percent));
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      setDragPercent(getPercentFromClientX(e.clientX));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      onSeekPercent(dragPercent);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragPercent, onSeekPercent]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragPercent(getPercentFromClientX(e.clientX));
    setIsDragging(true);
  };

  const showWithDelay = (index: number) => {
    if (isDragging) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setActiveQuestion(index);
    }, 120);
  };

  const hideWithDelay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setActiveQuestion(null);
    }, 250);
  };

  const displayPercent = isDragging
    ? dragPercent
    : duration > 0
      ? currentTime / duration
      : 0;

  return (
    <div
      ref={containerRef}
      onPointerDown={handleMouseDown}
      className={`absolute left-0 right-0 bottom-8 z-50 h-2 cursor-pointer transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="w-full h-full bg-gray-700/50 rounded-full" />

      <div
        className="absolute top-0 left-0 h-full bg-yellow-500 rounded-full"
        style={{ width: `${displayPercent * 100}%` }}
      />

      {duration > 0 &&
        questions.map((question, i) => {
          const left = `${(question.time / duration) * 100}%`;

          return (
            <div
              key={i}
              onMouseEnter={() => showWithDelay(i)}
              onMouseLeave={hideWithDelay}
              onClick={() => onSeekPercent(question.time / duration)}
              className="absolute top-0 w-3 h-full bg-black rounded-full cursor-pointer group"
              style={{ left: `calc(${left} - 1px)` }}
            >
              <div
                className={`
                        absolute -top-24 left-1/2 -translate-x-1/2
                        w-56
                        pointer-events-none
                        transition-all duration-200 ease-out
    ${
      activeQuestion === i
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-2 scale-95"
    }
  `}
              >
                <div
                  className="
                          relative
                          rounded-xl
                          bg-zinc-900
                          text-white
                          shadow-2xl
                          px-4 py-3
  "
                >
                  <div className="text-sm font-semibold leading-snug line-clamp-2">
                    {question.title}
                  </div>

                  <div className="my-2 h-px bg-white/10" />

                  <button
                    className="
        w-full
        rounded-lg
        bg-yellow-500
        px-3 py-1.5
        text-xs font-semibold text-black
        transition-colors
        hover:bg-yellow-400
        active:bg-yellow-600
      "
                  >
                    Przejdź do pytania
                  </button>

                  <div
                    className="
        absolute left-1/2 -bottom-1.5
        h-3 w-3
        -translate-x-1/2 rotate-45
        bg-zinc-900
      "
                  />
                </div>
              </div>
            </div>
          );
        })}

      <div
        className={`absolute top-1/2 w-3 h-3 bg-black rounded-full shadow-lg
          -translate-y-1/2 transition-transform duration-100
          ${isDragging ? "scale-125" : "scale-100"}
        `}
        style={{ left: `${displayPercent * 100}%` }}
      />
    </div>
  );
}
