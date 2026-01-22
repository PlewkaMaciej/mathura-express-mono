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

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm mb-1">Maks. punkty (maxPoints)</label>
          <Field
            name="maxPoints"
            type="number"
            min={0}
            className={input}
            placeholder="np. 2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">
          Rubric (kryteria oceniania) – wymagane
        </label>
        <Field
          name="rubric"
          as="textarea"
          rows={4}
          className={input}
          placeholder="Wpisz schemat punktowania jak w CKE: co jest na 0, 1, 2... pkt, za jakie elementy."
        />
      </div>

      <div>
        <label className="block text-sm mb-1">
          ReferenceAnswer (wzorcowa odpowiedź) – opcjonalnie
        </label>
        <Field
          name="referenceAnswer"
          as="textarea"
          rows={3}
          className={input}
          placeholder="Opcjonalnie: przykładowa odpowiedź / klucz"
        />
      </div>

      <div className="text-xs text-[#B8FFE2] opacity-80">
        Tip: im bardziej rubryka jest “po punktach” (0/1/2...), tym stabilniej
        model oceni.
      </div>
    </div>
  );
}
