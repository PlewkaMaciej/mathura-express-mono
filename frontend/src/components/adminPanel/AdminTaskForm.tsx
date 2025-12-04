"use client";

import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import type { SectionType } from "@/types/sections-task-types";

import { validationSchema } from "./validation";
import { FormValues } from "./adminTaskFormTypes";
import { NameContentFields } from "./NameContentFields";
import { TaskSelectors } from "./TaskSelectors";
import { AnswerFields } from "./AnswerFields";
import clsx from "clsx";
import { SubSectionType } from "@/types/sections-task-types";
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
    openAnswer: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    correctAnswer: "",
  };

  const input = clsx(
    "w-full rounded-lg bg-[#0E1630] border border-[#FFF002] px-3 py-2.5 text-base text-[#FFF002] placeholder:text-[#A7B5DD] outline-none focus:border-[#7CF9C2] focus:ring-0"
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

        const foundSection = sections.find((section) => {
          return section.id === values.sectionId;
        });

        if (foundSection) {
          currentSubsections = foundSection.subsections;
        }

        return (
          <Form className="space-y-4 max-w-xl text-[#F5F7FF] text-base">
            <NameContentFields input={input} />

            <TaskSelectors
              input={input}
              sections={sections}
              currentSubsections={currentSubsections}
              valuesSectionId={values.sectionId}
              setFieldValue={setFieldValue}
            />

            <AnswerFields values={values} input={input} />

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#7CF9C2] px-6 py-3 text-[1.02rem] font-semibold text-[#0B1020] shadow-[0_10px_30px_-10px_rgba(124,249,194,.7)] hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 transition disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Zapisywanie..." : "Zapisz zadanie"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
