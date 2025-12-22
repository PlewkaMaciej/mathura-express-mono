"use client";

import React, { useEffect, useState } from "react";
import { QuestionType } from "@/components/video/types/video";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth, useUser } from "@clerk/nextjs";
import { AnswerType } from "../types/video";

interface QuestionWithAnswersProps {
  questions: QuestionType[];
  questionParam: string | null;
}

export default function QuestionWithAnswers({
  questions,
  questionParam,
}: QuestionWithAnswersProps) {
  const [answers, setAnswers] = useState<AnswerType[]>([]);
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const { userId, isLoaded } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (!questionParam) return;
    const questionId = parseInt(questionParam, 10);
    if (isNaN(questionId)) return;
    const selectedQuestion = questions.find((q) => q.id === questionId);
    setQuestion(selectedQuestion || null);
    setAnswers(selectedQuestion?.answers || []);
  }, [questions, questionParam]);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
      <div className="mb-4 flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
          {question?.userName?.[0] ?? "?"}
        </div>
        <div>
          <h3 className="font-bold text-lg mb-1">{question?.title}</h3>
          <p className="font-semibold mb-1">{question?.userName}</p>
          <p className="text-gray-600">{question?.text}</p>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        {answers?.length === 0 && (
          <p className="text-sm text-gray-400">Brak odpowiedzi</p>
        )}

        {answers?.map((answer, index) => {
          return (
            <div
              key={index}
              className={`flex items-start gap-4 p-2 rounded-lg cursor-pointer transition-colors
               `}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center font-bold text-white">
                {answer.userName?.[0] ?? "?"}
              </div>
              <div>
                <p className="font-semibold text-sm">{answer.userName}</p>
                <p className="text-gray-700 text-sm">{answer.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Formik
        initialValues={{ text: "" }}
        validationSchema={Yup.object({
          text: Yup.string()
            .required("Odpowiedź jest wymagana")
            .min(3, "Odpowiedź musi mieć minimum 3 znaki"),
        })}
        onSubmit={async (values, { resetForm }) => {
          if (!isLoaded || !userId || !user) return;

          try {
            const res = await fetch(`/api/questions/${question?.id}/answers`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                text: values.text,
                userId: userId,
                userName: user.firstName ?? "Anonim",
                lastName: user.lastName ?? "",
              }),
            });

            if (!res.ok) {
              console.error("Błąd wysyłania odpowiedzi");
              return;
            }

            const newAnswer = await res.json();
            setAnswers((prev) => [...prev, newAnswer]);
            resetForm();
          } catch (err) {
            console.error("Błąd sieci lub serwera:", err);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-3">
            <Field
              name="text"
              as="textarea"
              placeholder="Napisz odpowiedź..."
              className="
                w-full 
                border 
                border-gray-300 
                rounded-lg 
                p-2 
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-color-primary
              "
            />

            <ErrorMessage
              name="text"
              component="div"
              className="text-red-500 text-sm"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#7CF9C2] py-2 rounded-lg hover:bg-green-600 transition"
            >
              Dodaj odpowiedź
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
