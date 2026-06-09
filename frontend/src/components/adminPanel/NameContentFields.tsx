"use client";

import { Field, ErrorMessage } from "formik";

interface NameContentFieldsProps {
  input: string;
}

export function NameContentFields({ input }: NameContentFieldsProps) {
  return (
    <section className="rounded-lg border border-[#d8e0ec] bg-[#fbfdff] p-4">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-[#111827]">
          Treść zadania
        </h3>
        <p className="mt-1 text-xs text-[#64748b]">
          Nazwa powinna ułatwiać szybkie wyszukiwanie w panelu.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-[#334155]"
          >
            Nazwa zadania
          </label>

          <Field
            id="name"
            name="name"
            type="text"
            data-testid="task-name"
            className={input}
            placeholder="Np. Równania liniowe - zadanie 1"
          />

          <ErrorMessage
            name="name"
            component="div"
            id="name-error"
            className="mt-1 text-xs font-medium text-[#dc2626]"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="content"
            className="block text-sm font-semibold text-[#334155]"
          >
            Polecenie
          </label>

          <Field
            as="textarea"
            id="content"
            name="content"
            rows={10}
            data-testid="task-content"
            className={`${input} min-h-[260px] resize-y leading-6`}
            placeholder="Wpisz treść zadania..."
          />

          <ErrorMessage
            name="content"
            component="div"
            id="content-error"
            className="mt-1 text-xs font-medium text-[#dc2626]"
          />
        </div>
      </div>
    </section>
  );
}
