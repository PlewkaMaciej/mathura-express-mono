"use client";

import { useEffect, useState, RefObject } from "react";
import ProgressBar from "./ProgressBar";

interface Props {
  videoRef: RefObject<HTMLVideoElement | null>;
  videoMother: RefObject<HTMLDivElement | null>;
  isPlaying: boolean;
  togglePlay: () => void;
  duration: number;
  currentTime: number;
  questions:any[];
  onSeekPercent: (percent: number) => void;
  volume: number;
  onVolumeChange: (vol: number) => void;
}

export default function VideoControls({
  videoRef,
  videoMother,
  isPlaying,
  togglePlay,
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
        className={`absolute left-0 right-0 bottom-0 px-4 py-2 flex justify-between items-center transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={togglePlay}
          className="text-white hover:scale-110 transition-transform p-1 focus:outline-none active:outline-none"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="black"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="black"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>

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
            className="w-28 h-1 accent-yellow-500 rounded-lg cursor-pointer"
          />
          <button
            onClick={handleFullscreen}
            className="text-black text-xl hover:text-yellow-500 transition-colors"
          >
            ⛶
          </button>
        </div>
      </div>
    </>
  );
}
