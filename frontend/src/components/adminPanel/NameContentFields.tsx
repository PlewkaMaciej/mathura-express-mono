"use client";

import { Field, ErrorMessage } from "formik";

interface NameContentFieldsProps {
  input: string;
}

export function NameContentFields({ input }: NameContentFieldsProps) {
  return (
    <>
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="block font-bold text-[#C9D2EE] text-[1.3rem]"
        >
          Nazwa zadania
        </label>

        <Field
          id="name"
          name="name"
          type="text"
          data-testid="task-name"
          className={input}
          placeholder="Np. Równania liniowe – zadanie 1"
        />

        <ErrorMessage
          name="name"
          component="div"
          id="name-error"
          className="text-xs text-[#f97373] mt-1"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="content"
          className="block font-bold text-[#C9D2EE] text-[1.3rem]"
        >
          Treść zadania
        </label>

        <Field
          as="textarea"
          id="content"
          name="content"
          rows={5}
          data-testid="task-content"
          className={`${input} resize-none`}
          placeholder="Wpisz treść zadania..."
        />

        <ErrorMessage
          name="content"
          component="div"
          id="content-error"
          className="text-xs text-[#f97373] mt-1"
        />
      </div>
    </>
  );
}
