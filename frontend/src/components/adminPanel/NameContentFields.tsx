"use client";

import { Field, ErrorMessage } from "formik";

interface NameContentFieldsProps {
  input: string;
}

export function NameContentFields({ input }: NameContentFieldsProps) {
  return (
    <>
      <div className="space-y-1.5">
        <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
          Nazwa zadania
        </label>
        <Field
          name="name"
          type="text"
          data-testid="task-name"
          className={input}
          placeholder="Np. Równania liniowe – zadanie 1"
        />
        <ErrorMessage
          name="name"
          component="div"
          className="text-xs text-[#f97373] mt-1"
        />
      </div>

      <div className="space-y-1.5">
        <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
          Treść zadania
        </label>
        <Field
          as="textarea"
          name="content"
          rows={5}
          data-testid="task-content"
          className={`${input} resize-none`}
          placeholder="Wpisz treść zadania..."
        />
        <ErrorMessage
          name="content"
          component="div"
          className="text-xs text-[#f97373] mt-1"
        />
      </div>
    </>
  );
}
