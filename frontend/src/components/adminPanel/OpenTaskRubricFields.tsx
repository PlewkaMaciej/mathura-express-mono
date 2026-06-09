"use client";

import { Field, ErrorMessage } from "formik";

type Props = {
  input: string;
};

export function OpenTaskRubricFields({ input }: Props) {
  return (
    <section className="rounded-lg border border-[#d8e0ec] bg-[#fbfdff] p-4">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-[#111827]">
            Ocenianie zadania otwartego
          </h3>
          <p className="mt-1 text-xs text-[#64748b]">
            Dodaj kryteria, maksymalną punktację i opcjonalną odpowiedź
            wzorcową.
          </p>
        </div>
        <span className="w-fit rounded-full bg-[#eef6ff] px-2.5 py-1 text-xs font-semibold text-[#2563eb]">
          Matura PL
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-[180px_minmax(0,1fr)]">
        <div className="space-y-1.5">
          <label
            htmlFor="maxPoints"
            className="block text-sm font-semibold text-[#334155]"
          >
            Maks. punkty
          </label>

          <Field
            id="maxPoints"
            name="maxPoints"
            type="number"
            min={1}
            data-testid="max-points"
            className={input}
            aria-describedby="maxPoints-error"
          />

          <ErrorMessage
            name="maxPoints"
            component="div"
            id="maxPoints-error"
            className="text-xs font-medium text-[#dc2626]"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="rubric"
            className="block text-sm font-semibold text-[#334155]"
          >
            Kryteria oceniania
          </label>

          <Field
            id="rubric"
            name="rubric"
            as="textarea"
            rows={5}
            aria-label="Rubric"
            data-testid="rubric"
            className={`${input} resize-y leading-6`}
            aria-describedby="rubric-error"
            placeholder="Opisz zasady przyznawania punktów..."
          />

          <ErrorMessage
            name="rubric"
            component="div"
            id="rubric-error"
            className="text-xs font-medium text-[#dc2626]"
          />
        </div>
      </div>

      <div className="mt-4 space-y-1.5">
        <label
          htmlFor="referenceAnswer"
          className="block text-sm font-semibold text-[#334155]"
        >
          Odpowiedź wzorcowa
        </label>

        <Field
          id="referenceAnswer"
          name="referenceAnswer"
          as="textarea"
          rows={4}
          aria-label="ReferenceAnswer"
          data-testid="reference-answer"
          className={`${input} resize-y leading-6`}
          placeholder="Opcjonalnie dodaj przykładowe rozwiązanie..."
        />
      </div>
    </section>
  );
}
