"use client";

import { useState, useRef } from "react";

interface Props {
  visible: boolean;
  duration: number;
  currentTime: number;
  questionTimes: number[];
  onSeekPercent: (percent: number) => void; // 0..1
}

export default function ProgressBar({
  visible,
  duration,
  currentTime,
  questionTimes,
  onSeekPercent,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const getPercentFromClientX = (clientX: number) => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const percent = (clientX - rect.left) / rect.width;
    return Math.min(1, Math.max(0, percent));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const percent = getPercentFromClientX(e.clientX);
    onSeekPercent(percent);
    setIsDragging(true);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const newPercent = getPercentFromClientX(moveEvent.clientX);
      onSeekPercent(newPercent);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      className={`absolute left-4 right-4 bottom-10 h-1.5 rounded-full cursor-pointer overflow-visible transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full h-full bg-gray-800/50 rounded-full" />
      <div
        className="absolute top-0 left-0 h-full bg-white rounded-full"
        style={{ width: `${progressPercent}%` }}
      />
      {duration > 0 &&
        questionTimes.map((t, i) => {
          const left = `${(t / duration) * 100}%`;
          return (
            <div
              key={i}
              className="absolute top-0 w-1 h-1.5 bg-yellow-400 rounded-full"
              style={{ left: `calc(${left} - 0.5px)` }}
            />
          );
        })}
      <div
        className={`absolute top-1/2 w-3 h-3 bg-red-500 rounded-full shadow-lg -translate-y-1/2 cursor-pointer ${
          isDragging ? "" : "transition-all duration-150"
        }`}
        style={{ left: `${progressPercent}%` }}
      />
    </div>
  );
}
