// app/admin-panel/AdminTaskForm.tsx
"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { SectionType } from "@/types/sections-task-types";

type TaskType = "open" | "closed";

interface FormValues {
  name: string;
  content: string;
  taskType: TaskType;
  sectionId: string;
  subSectionId: string;
  openAnswer?: string;
  answerA?: string;
  answerB?: string;
  answerC?: string;
  answerD?: string;
  correctAnswer?: string;
}

const validationSchema: Yup.Schema<FormValues> = Yup.object({
  name: Yup.string().trim().required("Nazwa zadania jest wymagana"),
  content: Yup.string().trim().required("Treść zadania jest wymagana"),
  taskType: Yup.mixed<TaskType>()
    .oneOf(["open", "closed"])
    .required("Wybierz typ zadania"),
  sectionId: Yup.string().required("Wybierz dział"),
  subSectionId: Yup.string().required("Wybierz poddział"),
  openAnswer: Yup.string().when("taskType", {
    is: "open",
    then: (schema) =>
      schema.trim().required("Poprawna odpowiedź jest wymagana"),
    otherwise: (schema) => schema.trim().notRequired(),
  }),
  answerA: Yup.string().when("taskType", {
    is: "closed",
    then: (schema) => schema.trim().required("Odpowiedź A jest wymagana"),
    otherwise: (schema) => schema.trim().notRequired(),
  }),
  answerB: Yup.string().when("taskType", {
    is: "closed",
    then: (schema) => schema.trim().required("Odpowiedź B jest wymagana"),
    otherwise: (schema) => schema.trim().notRequired(),
  }),
  answerC: Yup.string().when("taskType", {
    is: "closed",
    then: (schema) => schema.trim().required("Odpowiedź C jest wymagana"),
    otherwise: (schema) => schema.trim().notRequired(),
  }),
  answerD: Yup.string().when("taskType", {
    is: "closed",
    then: (schema) => schema.trim().required("Odpowiedź D jest wymagana"),
    otherwise: (schema) => schema.trim().notRequired(),
  }),
  correctAnswer: Yup.string().when("taskType", {
    is: "closed",
    then: (schema) =>
      schema
        .oneOf(
          ["A", "B", "C", "D"],
          "Poprawna odpowiedź musi być A, B, C lub D"
        )
        .required("Wybierz poprawną odpowiedź"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await fetch("/api/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        resetForm();
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => {
        const currentSubsections =
          sections.find((section) => section.id === values.sectionId)
            ?.subsections ?? [];

        return (
          <Form className="space-y-4 max-w-xl">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">Nazwa zadania</label>
              <Field
                name="name"
                type="text"
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-[#FFC857]"
                placeholder="Np. Równania liniowe – zadanie 1"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-xs text-red-400 mt-1"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium">Treść zadania</label>
              <Field
                as="textarea"
                name="content"
                rows={5}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-[#FFC857] resize-none"
                placeholder="Wpisz treść zadania..."
              />
              <ErrorMessage
                name="content"
                component="div"
                className="text-xs text-red-400 mt-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-sm font-medium">Dział</label>
                <Field
                  as="select"
                  name="sectionId"
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-[#FFC857]"
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
                  className="text-xs text-red-400 mt-1"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-medium">Poddział</label>
                <Field
                  as="select"
                  name="subSectionId"
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-[#FFC857]"
                  disabled={!values.sectionId}
                >
                  <option value="">
                    {values.sectionId
                      ? "Wybierz poddział"
                      : "Najpierw wybierz dział"}
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
                  className="text-xs text-red-400 mt-1"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium">Typ zadania</label>
              <div className="flex gap-4 text-sm">
                <label className="inline-flex items-center gap-2">
                  <Field
                    type="radio"
                    name="taskType"
                    value="open"
                    checked={values.taskType === "open"}
                    className="accent-[#FFC857]"
                  />
                  Zadanie otwarte
                </label>
                <label className="inline-flex items-center gap-2">
                  <Field
                    type="radio"
                    name="taskType"
                    value="closed"
                    checked={values.taskType === "closed"}
                    className="accent-[#FFC857]"
                  />
                  Zadanie zamknięte (ABCD)
                </label>
              </div>
              <ErrorMessage
                name="taskType"
                component="div"
                className="text-xs text-red-400 mt-1"
              />
            </div>

            {values.taskType === "open" && (
              <div className="space-y-1.5">
                <label className="block text-sm font-medium">
                  Poprawna odpowiedź
                </label>
                <Field
                  name="openAnswer"
                  type="text"
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-[#FFC857]"
                  placeholder="Np. 4"
                />
                <ErrorMessage
                  name="openAnswer"
                  component="div"
                  className="text-xs text-red-400 mt-1"
                />
              </div>
            )}

            {values.taskType === "closed" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium">
                      Odpowiedź A
                    </label>
                    <Field
                      name="answerA"
                      type="text"
                      className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-[#FFC857]"
                      placeholder="Treść odpowiedzi A"
                    />
                    <ErrorMessage
                      name="answerA"
                      component="div"
                      className="text-xs text-red-400 mt-1"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium">
                      Odpowiedź B
                    </label>
                    <Field
                      name="answerB"
                      type="text"
                      className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-[#FFC857]"
                      placeholder="Treść odpowiedzi B"
                    />
                    <ErrorMessage
                      name="answerB"
                      component="div"
                      className="text-xs text-red-400 mt-1"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium">
                      Odpowiedź C
                    </label>
                    <Field
                      name="answerC"
                      type="text"
                      className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-[#FFC857]"
                      placeholder="Treść odpowiedzi C"
                    />
                    <ErrorMessage
                      name="answerC"
                      component="div"
                      className="text-xs text-red-400 mt-1"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium">
                      Odpowiedź D
                    </label>
                    <Field
                      name="answerD"
                      type="text"
                      className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-[#FFC857]"
                      placeholder="Treść odpowiedzi D"
                    />
                    <ErrorMessage
                      name="answerD"
                      component="div"
                      className="text-xs text-red-400 mt-1"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium">
                    Poprawna odpowiedź (A/B/C/D)
                  </label>
                  <Field
                    as="select"
                    name="correctAnswer"
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-[#FFC857]"
                  >
                    <option value="">Wybierz poprawną odpowiedź</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </Field>
                  <ErrorMessage
                    name="correctAnswer"
                    component="div"
                    className="text-xs text-red-400 mt-1"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#FFC857] px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-[#ffd774] disabled:opacity-60"
            >
              {isSubmitting ? "Zapisywanie..." : "Zapisz zadanie"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
