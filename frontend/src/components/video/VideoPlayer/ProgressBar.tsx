"use client";
import { useState, useRef, useEffect } from "react";

interface Props {
  visible: boolean;
  duration: number;
  currentTime: number;
  questionTimes: number[];
  onSeekPercent: (percent: number) => void;
}

export default function ProgressBar({
  visible,
  duration,
  currentTime,
  questionTimes,
  onSeekPercent,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragPercent, setDragPercent] = useState(0);
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
      const newPercent = getPercentFromClientX(e.clientX);
      setDragPercent(newPercent);
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
    const percent = getPercentFromClientX(e.clientX);
    setDragPercent(percent);
    setIsDragging(true);
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
      className={`absolute left-0 z-50 right-0 bottom-8 h-2 cursor-pointer transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full h-full bg-gray-700/50 rounded-full" />

      <div
        className="absolute top-0 left-0 h-full bg-yellow-500 rounded-full"
        style={{ width: `${displayPercent * 100}%` }}
      />

      {duration > 0 &&
        questionTimes.map((t, i) => {
          const left = `${(t / duration) * 100}%`;
          return (
            <div
              key={i}
              className="absolute top-0 w-1 h-full bg-black rounded-full pointer-events-none"
              style={{ left: `calc(${left} - 0.5px)` }}
            />
          );
        })}

      <div
        className={`absolute top-1/2 w-3 h-3 bg-black rounded-full shadow-lg -translate-y-1/2 transform transition-transform duration-100 ${
          isDragging ? "scale-125" : "scale-100"
        }`}
        style={{ left: `${displayPercent * 100}%` }}
      />
    </div>
  );
}
