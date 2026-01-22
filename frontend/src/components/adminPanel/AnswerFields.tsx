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
              data-testid="task-type-open"
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
              data-testid="task-type-closed"
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
    </>
  );
}
