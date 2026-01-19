"use client";

import { useState, useRef, useEffect } from "react";
import { QuestionType } from "@/components/video/types/video";
import { cn } from "@/lib/cn";
import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";

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

  const { userId: clerkId, isLoaded } = useAuth();
  const { user } = useUser();
  const [dbUserId, setDbUserId] = useState<string | null>(null);

  const router = useRouter();
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* =========================
     Pobranie DB userId
  ========================= */
  useEffect(() => {
    if (!isLoaded || !clerkId) return;

    const fetchDbUserId = async () => {
      try {
        const res = await fetch(`/api/users/${clerkId}`);
        if (!res.ok) throw new Error("User not found");

        const data = await res.json();
        setDbUserId(data.id);
      } catch (err) {
        console.error(err);
        setDbUserId(null);
      }
    };

    fetchDbUserId();
  }, [clerkId, isLoaded]);

  /* =========================
     Drag progress bar
  ========================= */
  const getPercentFromClientX = (clientX: number) => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    return Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) =>
      setDragPercent(getPercentFromClientX(e.clientX));

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

  /* =========================
     Tooltip handling
  ========================= */
  const showWithDelay = (index: number) => {
    if (isDragging) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveQuestion(index), 500);
  };

  const hideWithDelay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveQuestion(null), 1200);
  };

  const displayPercent = isDragging
    ? dragPercent
    : duration > 0
      ? currentTime / duration
      : 0;

  /* =========================
     Render
  ========================= */
  return (
    <div
      ref={containerRef}
      onPointerDown={handleMouseDown}
      className={cn(
        "absolute left-0 right-0 bottom-8 z-50 h-2 cursor-pointer transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {/* background */}
      <div className="w-full h-full bg-gray-700/50 rounded-full" />

      {/* progress */}
      <div
        className="absolute top-0 left-0 h-full bg-yellow-500 rounded-full"
        style={{ width: `${displayPercent * 100}%` }}
      />

      {/* question markers */}
      {duration > 0 &&
        questions.map((question, i) => {
          const canSee =
            question.isPublic || question.userId !== Number(dbUserId);
          if (!canSee) return null;

          const left = `${(question.time / duration) * 100}%`;

          return (
            <div
              key={question.id}
              onMouseEnter={() => showWithDelay(i)}
              onMouseLeave={hideWithDelay}
              className="absolute top-0 w-3 h-full bg-black rounded-full cursor-default"
              style={{ left: `calc(${left} - 1px)` }}
            >
              <div
                className={cn(
                  "absolute -top-24 left-1/2 -translate-x-1/2 w-56 transition-all duration-200 ease-out",
                  activeQuestion === i
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                )}
                onPointerDown={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-xl bg-zinc-900 px-4 py-3 text-white shadow-2xl">
                  <div className="text-sm font-semibold leading-snug line-clamp-2">
                    {question.title}
                  </div>

                  <div className="my-2 h-px bg-white/10" />

                  <button
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(
                        `/videoexample/?videoId=${searchParams?.get(
                          "videoId"
                        )}&questionId=${question.id}`
                      );
                    }}
                    className={cn(
                      "w-full rounded-lg bg-yellow-500 px-3 py-1.5 text-xs font-semibold text-black transition-colors",
                      "hover:bg-yellow-400 active:bg-yellow-600"
                    )}
                  >
                    Przejdź do pytania
                  </button>

                  <div className="absolute left-1/2 -bottom-1.5 h-3 w-3 -translate-x-1/2 rotate-45 bg-zinc-900" />
                </div>
              </div>
            </div>
          );
        })}

      {/* thumb */}
      <div
        className={cn(
          "absolute top-1/2 w-3 h-3 bg-black rounded-full shadow-lg -translate-y-1/2 transition-transform duration-100",
          isDragging ? "scale-125" : "scale-100"
        )}
        style={{ left: `${displayPercent * 100}%` }}
      />
    </div>
  );
}
