"use client";

import { Field, ErrorMessage } from "formik";
import { CheckSquare, PenLine } from "lucide-react";
import { FormValues } from "./adminTaskFormTypes";

interface AnswerFieldsProps {
  values: FormValues;
}

export function AnswerFields({ values }: AnswerFieldsProps) {
  return (
    <section className="rounded-lg border border-[#d8e0ec] bg-[#fbfdff] p-4">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-[#111827]">
          Typ zadania
        </h3>
        <p className="mt-1 text-xs text-[#64748b]">
          Wybór typu zmienia pola oceniania poniżej.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label
          className={`flex cursor-pointer items-center gap-3 rounded-md border px-3 py-3 transition ${
            values.taskType === "open"
              ? "border-[#96dec7] bg-[#e8f7f1] text-[#17684f]"
              : "border-[#d8e0ec] bg-white text-[#475569] hover:border-[#b6c3d4]"
          }`}
        >
          <Field
            type="radio"
            name="taskType"
            value="open"
            data-testid="task-type-open"
            checked={values.taskType === "open"}
            className="sr-only"
          />
          <PenLine className="h-4 w-4 shrink-0" />
          <span className="font-semibold">Zadanie otwarte</span>
        </label>

        <label
          className={`flex cursor-pointer items-center gap-3 rounded-md border px-3 py-3 transition ${
            values.taskType === "closed"
              ? "border-[#96dec7] bg-[#e8f7f1] text-[#17684f]"
              : "border-[#d8e0ec] bg-white text-[#475569] hover:border-[#b6c3d4]"
          }`}
        >
          <Field
            type="radio"
            name="taskType"
            value="closed"
            data-testid="task-type-closed"
            checked={values.taskType === "closed"}
            className="sr-only"
          />
          <CheckSquare className="h-4 w-4 shrink-0" />
          <span className="font-semibold">Zadanie zamknięte ABCD</span>
        </label>
      </div>

      <ErrorMessage
        name="taskType"
        component="div"
        className="mt-2 text-xs font-medium text-[#dc2626]"
      />
    </section>
  );
}
