"use client";
import Video from "@/components/video/VideoPanel";

import { Suspense } from "react";

export default function VideoExample() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Suspense fallback={<div>Ładowanie...</div>}>
        <Video />
      </Suspense>
    </div>
  );
}
