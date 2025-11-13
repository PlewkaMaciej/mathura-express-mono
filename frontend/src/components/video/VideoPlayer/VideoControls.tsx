"use client";

import { useEffect, useState, RefObject } from "react";
import PlayPauseButton from "./PlayPauseButton";
import ProgressBar from "./ProgressBar";

interface Props {
  videoRef: RefObject<HTMLVideoElement | null>;
  isPlaying: boolean;
  togglePlay: () => void;
  duration: number;
  currentTime: number;
  questionTimes: number[];
  onSeekPercent: (percent: number) => void;
  volume: number;
  onVolumeChange: (vol: number) => void;
  onFullscreen: () => void;
}

export default function VideoControls({
  videoRef,
  isPlaying,
  togglePlay,
  duration,
  currentTime,
  questionTimes,
  onSeekPercent,
  volume,
  onVolumeChange,
  onFullscreen,
}: Props) {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | null = null;

    const show = () => {
      setVisible(true);
      if (t) clearTimeout(t);
      t = setTimeout(() => setVisible(false), 2000);
    };
    const container = videoRef.current;
    if (!container) return;
    const onMove = () => show();

    container.addEventListener("mousemove", onMove);
    window.addEventListener("keydown", onMove);

    show();

    return () => {
      container.removeEventListener("mousemove", onMove);
      window.removeEventListener("keydown", onMove);
      if (t) clearTimeout(t);
    };
  }, [videoRef]);

  return (
    <>
      <PlayPauseButton
        visible={visible}
        isPlaying={isPlaying}
        togglePlay={togglePlay}
      />

      {/* PROGRESS BAR */}
      <ProgressBar
        visible={visible}
        duration={duration}
        currentTime={currentTime}
        questionTimes={questionTimes}
        onSeekPercent={onSeekPercent}
      />

      {/* POD PASKIEM: głośność, fullscreen i czas */}
      <div
        className={`absolute left-4 right-4 bottom-4 flex justify-between items-center transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Lewa strona: przycisk play/pause */}
        <button
          onClick={togglePlay}
          className="text-white bg-black/50 p-1 rounded"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>

        {/* Środek: czas */}
        <span className="text-white text-sm">
          {Math.floor(currentTime)}s / {Math.floor(duration)}s
        </span>

        {/* Prawa strona: głośność i fullscreen */}
        <div className="flex items-center space-x-2">
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="w-24"
          />
          <button
            onClick={onFullscreen}
            className="text-white bg-black/50 p-1 rounded"
          >
            ⛶
          </button>
        </div>
      </div>
    </>
  );
}
