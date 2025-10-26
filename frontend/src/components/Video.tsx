"use client";

import { useEffect, useState } from "react";
import Button from "./Items/Button";

interface VideoType {
  id: number;
  url: string;
  videoUrl: string;
}

export default function Video() {
  const [video, setVideo] = useState<VideoType | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await fetch("/api/videos?id=1");
        const data = await res.json();

        console.log(data); // obiekt { id: 1, url: "..." }
        console.log(data.url); // URL wideo

        setVideo(data);
      } catch (err) {
        console.error("Błąd przy pobieraniu wideo:", err);
      }
    };

    fetchVideo();
  }, []);

  const OpenQuestion = () => {
    console.log("xd");
  };

  return (
    <div className="flex flex-col items-center justify-start py-10 px-4">
      {video ? (
        <video controls width="640" className="rounded-lg shadow-lg mb-6">
          <source src={video.url} type="video/mp4" />
          Twoja przeglądarka nie obsługuje elementu video.
        </video>
      ) : (
        <p>Ładowanie wideo...</p>
      )}

      <div className="flex gap-4">
        <Button onClick={OpenQuestion}>Pytania</Button>
        <Button>Opis</Button>
        <Button>Notatnik</Button>
      </div>
    </div>
  );
}
