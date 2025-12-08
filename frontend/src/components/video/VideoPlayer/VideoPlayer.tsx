"use client";

import { useEffect, useRef, useState } from "react";
import VideoControls from "./VideoControls";

interface VideoType {
  id: number;
  url: string;
  questions: any[];
}

interface Props {
  video: VideoType;
  onTimeUpdate?: (t: number) => void;
}

export default function VideoPlayer({ video, onTimeUpdate }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoMother = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onLoaded = () => setDuration(v.duration || 0);
    const onTime = () => {
      const t = v.currentTime || 0;
      setCurrentTime(t);
      if (onTimeUpdate) onTimeUpdate(t);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    if (v.readyState >= 1) {
      const t = v.currentTime || 0;
      setDuration(v.duration || 0);
      setCurrentTime(t);
      if (onTimeUpdate) onTimeUpdate(t);
      setIsPlaying(!v.paused);
    }

    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, [video.url, onTimeUpdate]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  const handleProgressClick = (percent: number) => {
    const v = videoRef.current;
    if (!v || duration === 0) return;
    v.currentTime = percent * duration;
    setCurrentTime(v.currentTime);
    if (onTimeUpdate) onTimeUpdate(v.currentTime);
  };

  const handleVolumeChange = (vol: number) => {
    setVolume(vol);
    if (videoRef.current) videoRef.current.volume = vol;
  };

  return (
    <div
      ref={videoMother}
      className="relative flex flex-col items-center w-full max-w-2xl mx-auto group"
    >
      <video
        ref={videoRef}
        controls={false}
        className="w-full rounded-xl shadow-lg"
        src={video.url}
        onClick={togglePlay}
      >
        <source src={video.url} type="video/mp4" />
        Twoja przeglądarka nie obsługuje elementu video.
      </video>

      <VideoControls
        questions={video.questions}
        togglePlay={togglePlay}
        videoRef={videoRef}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
        onSeekPercent={handleProgressClick}
        volume={volume}
        onVolumeChange={handleVolumeChange}
        videoMother={videoMother}
      />
    </div>
  );
}