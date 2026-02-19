"use client";

import { Field, ErrorMessage } from "formik";

type Props = {
  input: string;
};

export function OpenTaskRubricFields({ input }: Props) {
  return (
    <div className="rounded-lg border border-[#2C3B55] bg-[#0B1B2B] p-4 space-y-4">
      <div className="text-lg font-semibold text-[#F5F7FF]">
        Ocenianie zadania otwartego (matura PL)
      </div>

      <div className="space-y-1.5">
        <label htmlFor="maxPoints" className="block text-sm">
          Maks. punkty (maxPoints)
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
          className="text-xs text-[#f97373]"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="rubric" className="block text-sm">
          Rubric (kryteria oceniania) – wymagane
        </label>

        <Field
          id="rubric"
          name="rubric"
          as="textarea"
          rows={4}
          data-testid="rubric"
          className={input}
          aria-describedby="rubric-error"
        />

        <ErrorMessage
          name="rubric"
          component="div"
          id="rubric-error"
          className="text-xs text-[#f97373]"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="referenceAnswer" className="block text-sm">
          ReferenceAnswer (opcjonalnie)
        </label>

        <Field
          id="referenceAnswer"
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
