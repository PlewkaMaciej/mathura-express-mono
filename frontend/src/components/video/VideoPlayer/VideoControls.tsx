"use client";

import { useEffect, useState, RefObject } from "react";
import ProgressBar from "./ProgressBar";
import { QuestionType } from "@/components/video/types/video";

interface Props {
  videoRef: RefObject<HTMLVideoElement | null>;
  videoMother: RefObject<HTMLDivElement | null>;
  isPlaying: boolean;
  togglePlay: () => void;
  duration: number;
  currentTime: number;
  questions: QuestionType[];
  onSeekPercent: (percent: number) => void;
  volume: number;
  onVolumeChange: (vol: number) => void;
  togglePlayButton?: React.ReactNode;
}

export default function VideoControls({
  videoRef,
  videoMother,
  togglePlayButton,
  duration,
  currentTime,
  questions,
  onSeekPercent,
  volume,
  onVolumeChange,
}: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | null = null;

    const show = () => {
      setVisible(true);
      if (t) clearTimeout(t);
      t = setTimeout(() => setVisible(false), 2500);
    };

    const container = videoRef.current;
    if (!container) return;

    const onMove = () => show();
    container.addEventListener("mousemove", onMove);

    show();

    return () => {
      container.removeEventListener("mousemove", onMove);
      if (t) clearTimeout(t);
    };
  }, [videoRef]);

  const handleFullscreen = () => {
    if (!videoMother.current) return;

    if (!document.fullscreenElement) {
      videoMother.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <>
      <ProgressBar
        visible={visible}
        duration={duration}
        currentTime={currentTime}
        onSeekPercent={onSeekPercent}
        questions={questions}
      />

      <div
        className={`absolute left-0 right-0 bottom-0 px-4 py-1 flex justify-between items-center transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {togglePlayButton}
        <span className="text-black text-sm select-none">
          {Math.floor(currentTime)} / {Math.floor(duration)} s
        </span>

        <div className="flex items-center space-x-3">
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="w-28 h-1 rounded-full cursor-pointer accent-red-600 hover:accent-red-500 transition-colors"
          />

          <button
            onClick={handleFullscreen}
            className="text-black text-xl hover:text-red-600 transition-colors"
          >
            ⛶
          </button>
        </div>
      </div>
    </>
  );
}
