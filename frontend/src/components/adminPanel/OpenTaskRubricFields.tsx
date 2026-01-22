"use client";

import { Field } from "formik";

type Props = {
  input: string;
};

export function OpenTaskRubricFields({ input }: Props) {
  return (
    <div className="rounded-lg border border-[#2C3B55] bg-[#0B1B2B] p-4 space-y-3">
      <div className="text-lg font-semibold text-[#F5F7FF]">
        Ocenianie zadania otwartego (matura PL)
      </div>

      <div>
        <label className="block text-sm mb-1">Maks. punkty (maxPoints)</label>
        <Field
          name="maxPoints"
          type="number"
          min={1}
          data-testid="max-points"
          className={input}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">
          Rubric (kryteria oceniania) – wymagane
        </label>
        <Field
          name="rubric"
          as="textarea"
          rows={4}
          data-testid="rubric"
          className={input}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">
          ReferenceAnswer (opcjonalnie)
        </label>
        <Field
          name="referenceAnswer"
          as="textarea"
          rows={3}
          data-testid="reference-answer"
          className={input}
        />
      </div>
    </div>
  );
}
