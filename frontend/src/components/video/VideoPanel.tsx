"use client";

import { useEffect, useState, useRef } from "react";
import Button from "../Items/Button";
import { useSearchParams } from "next/navigation";
import Question from "./Question";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

interface VideoType {
  id: number;
  url: string;
  videoUrl: string;
}

export default function Video() {
  const [video, setVideo] = useState<VideoType | null>(null);
  const [buttonStatus, setButtonStatus] = useState<string>("");
  const [questionTimes, setQuestionTimes] = useState<number[]>([]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchVideo = async () => {
      setQuestionTimes([120, 160, 300]);

      try {
        const res = await fetch(`/api/videos?id=${searchParams.get("id")}`);
        const data = await res.json();
        setVideo(data);
      } catch (err) {
        console.error("Błąd przy pobieraniu wideo:", err);
      }
    };

    fetchVideo();
  }, [searchParams]);

  const OpenQuestion = () => {
    setButtonStatus((prev) =>
      prev === "questionPanel" ? "" : "questionPanel"
    );
  };

  return (
    <div className="flex flex-col items-center justify-start py-10 px-4">
      {video ? (
        <VideoPlayer video={video} questionTimes={questionTimes} />
      ) : (
        <p>Ładowanie wideo...</p>
      )}

      <div className="flex gap-4">
        <Button onClick={OpenQuestion}>Zapytaj</Button>
        <Button>Opis</Button>
        <Button>Notatnik</Button>
      </div>

      {buttonStatus === "questionPanel" && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setButtonStatus("")}
        >
          <div
            className="bg-white p-8 rounded-2xl shadow-2xl max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setButtonStatus("")}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
            >
              ×
            </button>

            <Question
              buttonStateProps={[buttonStatus, setButtonStatus]}
              time={videoRef.current?.currentTime ?? 0}
              videoId={searchParams.get("id") ?? ""}
            />
          </div>
        </div>
      )}
    </div>
  );
}
