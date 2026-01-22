"use client";

import { Field, ErrorMessage } from "formik";
import { FormValues } from "./adminTaskFormTypes";

interface AnswerFieldsProps {
  values: FormValues;
  input: string;
}

export function AnswerFields({ values, input }: AnswerFieldsProps) {
  return (
    <>
      <div className="space-y-1.5">
        <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
          Typ zadania
        </label>
        <div className="flex gap-4 text-base">
          <label className="inline-flex items-center gap-2">
            <Field
              type="radio"
              name="taskType"
              value="open"
              checked={values.taskType === "open"}
              className="accent-[#7CF9C2]"
            />
            <span className="text-[#F5F7FF]">Zadanie otwarte</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <Field
              type="radio"
              name="taskType"
              value="closed"
              checked={values.taskType === "closed"}
              className="accent-[#7CF9C2]"
            />
            <span className="text-[#F5F7FF]">Zadanie zamknięte (ABCD)</span>
          </label>
        </div>
        <ErrorMessage
          name="taskType"
          component="div"
          className="text-xs text-[#f97373] mt-1"
        />
      </div>

      {values.taskType === "closed" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                Odpowiedź A
              </label>
              <Field
                name="answerA"
                type="text"
                className={input}
                placeholder="Treść odpowiedzi A"
              />
              <ErrorMessage
                name="answerA"
                component="div"
                className="text-xs text-[#f97373] mt-1"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                Odpowiedź B
              </label>
              <Field
                name="answerB"
                type="text"
                className={input}
                placeholder="Treść odpowiedzi B"
              />
              <ErrorMessage
                name="answerB"
                component="div"
                className="text-xs text-[#f97373] mt-1"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                Odpowiedź C
              </label>
              <Field
                name="answerC"
                type="text"
                className={input}
                placeholder="Treść odpowiedzi C"
              />
              <ErrorMessage
                name="answerC"
                component="div"
                className="text-xs text-[#f97373] mt-1"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                Odpowiedź D
              </label>
              <Field
                name="answerD"
                type="text"
                className={input}
                placeholder="Treść odpowiedzi D"
              />
              <ErrorMessage
                name="answerD"
                component="div"
                className="text-xs text-[#f97373] mt-1"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
              Poprawna odpowiedź (A/B/C/D)
            </label>
            <Field as="select" name="correctAnswer" className={input}>
              <option value="">Wybierz poprawną odpowiedź</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </Field>
            <ErrorMessage
              name="correctAnswer"
              component="div"
              className="text-xs text-[#f97373] mt-1"
            />
          </div>
        </div>
      )}
    </>
  );
}
