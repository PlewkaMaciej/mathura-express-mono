"use client";

import clsx from "clsx";
import { Field, ErrorMessage } from "formik";
import { twMerge } from "tailwind-merge";

interface NameContentFieldsProps {
  input: string;
}

export function NameContentFields({ input }: NameContentFieldsProps) {
  const input1 = twMerge(
    clsx(
      "border-[#FFF002] px-3 py-2.5 text-base text-[#FFF002] placeholder:text-[#A7B5DD] outline-none focus:border-[#7CF9C2] focus:ring-0"
    )
  );
  return (
    <>
      <div className="space-y-1.5">
        <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
          Nazwa zadania
        </label>
        <Field
          name="name"
          type="text"
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
