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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1.5">
        <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
          Dział
        </label>
        <Field
          as="select"
          name="sectionId"
          data-testid="section-select"
          className={input}
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
          className="text-xs text-[#f97373] mt-1"
        />
      </div>

      <div className="space-y-1.5">
        <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
          Poddział
        </label>
        <Field
          as="select"
          name="subSectionId"
          data-testid="subsection-select"
          className={input}
          disabled={!valuesSectionId}
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
          className="text-xs text-[#f97373] mt-1"
        />
      </div>
    </div>
  );
}
