"use client";

import { useEffect, useState } from "react";
import Button from "../Items/Button";
import { useSearchParams } from "next/navigation";
import Question from "./Question";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import { VideoType } from "@/types/video";

export default function Video() {
  const [video, setVideo] = useState<VideoType | null>(null);
  const [buttonStatus, setButtonStatus] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<number>(0);

  const searchParams = useSearchParams();

  const fetchVideo = async () => {
    try {
      const res = await fetch(`/api/videos?id=${searchParams.get("id")}`);
      const data = await res.json();
      setVideo(data);
    } catch (err) {
      console.error("Błąd przy pobieraniu wideo:", err);
    }
  };

  useEffect(() => {
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
        <VideoPlayer video={video} onTimeUpdate={setCurrentTime} />
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
              time={currentTime}
              videoId={searchParams.get("id") ?? ""}
              onQuestionSubmitted={fetchVideo}
            />
          </div>
        </div>
      )}
    </div>
  );
}
