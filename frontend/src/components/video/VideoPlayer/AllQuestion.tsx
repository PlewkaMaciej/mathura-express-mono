"use client";

import { QuestionType } from "@/components/video/types/video";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface AllQuestionsProps {
  questions: QuestionType[];
}

export default function AllQuestions({ questions }: AllQuestionsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className="space-y-6">
      {" "}
      {questions.map((q) => (
        <div
          key={q.id}
          onClick={() => {
            router.push(
              `/videoexample/question?videoId=${searchParams?.get(
                "videoId"
              )}&questionId=${q.id}`
            );
          }}
          className="mb-3 bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white mr-3">
              {q.userName?.[0] ?? "?"}
            </div>
            <div>
              <h3 className="font-bold text-lg">{q.title}</h3>
              <p className="text-sm text-gray-500">Autor: {q.userName}</p>
            </div>
          </div>
          <p className="text-gray-700">{q.text}</p>
          <p className="text-xs text-gray-400 mt-2">Czas wideo: {q.time}s</p>
        </div>
      ))}
    </div>
  );
}
