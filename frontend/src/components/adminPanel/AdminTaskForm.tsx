"use client";

import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Loader2, Save } from "lucide-react";
import type { SectionType, SubSectionType } from "@/types/sections-task-types";

import { validationSchema } from "./validation";
import { FormValues } from "./adminTaskFormTypes";
import { NameContentFields } from "./NameContentFields";
import { TaskSelectors } from "./TaskSelectors";
import { AnswerFields } from "./AnswerFields";
import { OpenTaskRubricFields } from "./OpenTaskRubricFields";
import { ClosedTaskFields } from "./ClosedTaskFields";
import clsx from "clsx";

export function AdminTaskForm() {
  const [sections, setSections] = useState<SectionType[]>([]);

  useEffect(() => {
    const fetchSections = async () => {
      const res = await fetch("/api/sections");
      const data = await res.json();
      setSections(data);
    };
    fetchSections();
  }, []);

  const initialValues: FormValues = {
    name: "",
    content: "",
    taskType: "open",
    sectionId: "",
    subSectionId: "",
    rubric: "",
    referenceAnswer: "",
    maxPoints: 2,
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    correctAnswer: "",
    points: 1,
  };

  const input = clsx(
    "w-full rounded-md border border-[#cbd5e1] bg-white px-3 py-2.5 text-sm text-[#172033] shadow-sm outline-none transition placeholder:text-[#94a3b8]",
    "focus:border-[#1f8f6a] focus:ring-4 focus:ring-[#1f8f6a]/10",
    "disabled:cursor-not-allowed disabled:bg-[#f1f5f9] disabled:text-[#94a3b8]",
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const res = await fetch("/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });

          if (!res.ok) {
            const err = await res.json().catch(() => null);
            toast.error(err?.error ?? "Nie udało się zapisać zadania");
            return;
          }

          toast.success("Zadanie zostało zapisane!");
          resetForm();
        } catch (e) {
          console.error(e);
          toast.error("Nie udało się zapisać zadania");
        }
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => {
        let currentSubsections: SubSectionType[] = [];

        const foundSection = sections.find(
          (section) => section.id === values.sectionId,
        );

        if (foundSection) {
          currentSubsections = foundSection.subsections;
        }

        return (
          <Form className="space-y-6 text-sm text-[#172033]">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-5">
                <NameContentFields input={input} />
              </div>

              <div className="space-y-5">
                <TaskSelectors
                  input={input}
                  sections={sections}
                  currentSubsections={currentSubsections}
                  valuesSectionId={values.sectionId}
                  setFieldValue={setFieldValue}
                />

                <AnswerFields values={values} />
              </div>
            </div>

            {values.taskType === "open" && (
              <OpenTaskRubricFields input={input} />
            )}

            {values.taskType === "closed" && <ClosedTaskFields input={input} />}

            <div className="flex flex-col gap-3 border-t border-[#e2e8f0] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[#64748b]">
                Zapis doda zadanie do bazy i udostępni je w wybranym dziale.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                data-testid="save-task"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#17684f] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#11543f] focus:outline-none focus:ring-4 focus:ring-[#1f8f6a]/20 disabled:cursor-not-allowed disabled:opacity-65"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}
                {isSubmitting ? "Zapisywanie..." : "Zapisz zadanie"}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
