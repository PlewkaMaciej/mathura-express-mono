"use client";

import { Field, ErrorMessage } from "formik";
import type React from "react";
import type { SectionType } from "@/types/sections-task-types";

interface TaskSelectorsProps {
  sections: SectionType[];
  currentSubsections: { id: string; name: string }[];
  valuesSectionId: string;
  setFieldValue: (field: string, value: unknown) => void;
  input: string;
}

export function TaskSelectors({
  sections,
  currentSubsections,
  valuesSectionId,
  setFieldValue,
  input,
}: TaskSelectorsProps) {
  return (
    <section className="rounded-lg border border-[#d8e0ec] bg-[#fbfdff] p-4">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-[#111827]">
          Klasyfikacja
        </h3>
        <p className="mt-1 text-xs text-[#64748b]">
          Przypisz zadanie do właściwego działu i poddziału.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="sectionId"
            className="block text-sm font-semibold text-[#334155]"
          >
            Dział
          </label>

          <Field
            as="select"
            id="sectionId"
            name="sectionId"
            data-testid="section-select"
            className={input}
            aria-describedby="sectionId-error"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const id = e.target.value;
              setFieldValue("sectionId", id);
              setFieldValue("subSectionId", "");
            }}
          >
            <option value="">Wybierz dział</option>
            {sections.map((section) => (
              <option key={section.id} value={section.id}>
                {section.name}
              </option>
            ))}
          </Field>

          <ErrorMessage
            name="sectionId"
            component="div"
            id="sectionId-error"
            className="mt-1 text-xs font-medium text-[#dc2626]"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="subSectionId"
            className="block text-sm font-semibold text-[#334155]"
          >
            Poddział
          </label>

          <Field
            as="select"
            id="subSectionId"
            name="subSectionId"
            data-testid="subsection-select"
            className={input}
            disabled={!valuesSectionId}
            aria-describedby="subSectionId-error"
          >
            <option value="">
              {valuesSectionId ? "Wybierz poddział" : "Najpierw wybierz dział"}
            </option>

            {currentSubsections.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.name}
              </option>
            ))}
          </Field>

          <ErrorMessage
            name="subSectionId"
            component="div"
            id="subSectionId-error"
            className="mt-1 text-xs font-medium text-[#dc2626]"
          />
        </div>
      </div>
    </section>
  );
}
