"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Question from "./Question";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import QuestionWithAnswers from "./VideoPlayer/QuestionWithAnswers";
import { useRouter } from "next/navigation";

import { VideoType } from "@/components/video/types/video";
import AllQuestions from "./VideoPlayer/AllQuestion";

export default function Video() {
  const [video, setVideo] = useState<VideoType | null>(null);
  const [buttonStatus, setButtonStatus] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [questionParam, setQuestionParam] = useState<string | null>(null);
  const router = useRouter();

  const searchParams = useSearchParams();

  const fetchVideo = useCallback(async () => {
    try {
      const videoId = searchParams.get("videoId");
      if (!videoId) return;

      const res = await fetch(`/api/videos?id=${videoId}`);
      const data = await res.json();
      setVideo(data);
    } catch (err) {
      console.error("Błąd przy pobieraniu wideo:", err);
    }
  }, [searchParams]);
  useEffect(() => {
    setQuestionParam(searchParams.get("questionId"));
    fetchVideo();
  }, [searchParams, fetchVideo]);

  const openQuestion = () => {
    setButtonStatus((prev) =>
      prev === "questionPanel" ? "" : "questionPanel"
    );
  };

  return (
    <div className="flex flex-row items-start justify-start py-10 px-4 gap-8">
      <div className="flex flex-col gap-3 w-48 bg-gray-50 p-4 rounded-xl shadow-md">
        <button
          onClick={openQuestion}
          className="w-full text-left px-4 py-3 rounded-lg bg-[#7CF9C2] text-black font-semibold shadow hover:text-gray-700 transition"
        >
          Zapytaj
        </button>

        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 text-gray-700 transition">
          Opis
        </button>

        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 text-gray-700 transition">
          Notatnik
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push(
              `/videoexample/question?videoId=${searchParams?.get(
                "videoId"
              )}&questionId=all`
            );
          }}
          className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 text-gray-700 transition"
        >
          Pytania
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center gap-6">
        {video ? (
          <VideoPlayer video={video} onTimeUpdate={setCurrentTime} />
        ) : (
          <p>Ładowanie wideo...</p>
        )}
        {video?.questions &&
          questionParam !== null &&
          questionParam !== "all" && (
            <div className="w-full max-w-4xl">
              <QuestionWithAnswers
                questions={video.questions}
                questionParam={questionParam}
              />
            </div>
          )}
        {video?.questions && questionParam === "all" && (
          <div className="w-full max-w-4xl">
            <AllQuestions questions={video.questions} />
          </div>
        )}
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
              videoId={searchParams.get("videoId") ?? ""}
              onQuestionSubmitted={fetchVideo}
            />
          </div>
        </div>
      )}
    </div>
  );
}
