"use client";

import { useEffect, useRef, useState } from "react";
import VideoControls from "./VideoControls";

interface VideoType {
  id: number;
  url: string;
}

interface Props {
  video: VideoType;
  questionTimes: number[];
}

export default function VideoPlayer({ video, questionTimes }: Props) {
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
    const onTime = () => setCurrentTime(v.currentTime || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    if (v.readyState >= 1) {
      setDuration(v.duration || 0);
      setCurrentTime(v.currentTime || 0);
      setIsPlaying(!v.paused);
    }

    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, [video.url]);

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
        togglePlay={togglePlay}
        videoRef={videoRef}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
        questionTimes={questionTimes}
        onSeekPercent={handleProgressClick}
        volume={volume}
        onVolumeChange={handleVolumeChange}
        videoMother={videoMother}
      />
    </div>
  );
}
