"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import type React from "react";
import { SectionType } from "@/types/sections-task-types";
import { toast } from "react-hot-toast";

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
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          const res = await fetch("/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });

          if (!res.ok) {
            toast.error("Nie udało się zapisać zadania 😢");
            return;
          }

          toast.success("Zadanie zostało zapisane!");
          resetForm();
        } catch (e) {
          console.error(e);
          toast.error("Wystąpił błąd przy zapisie zadania");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => {
        const currentSubsections =
          sections.find((section) => section.id === values.sectionId)
            ?.subsections ?? [];

        const inputBaseClasses =
          "w-full rounded-lg bg-[#0E1630] border border-[#273258] px-3 py-2.5 text-base text-[#F5F7FF] placeholder:text-[#A7B5DD] outline-none focus:border-[#7CF9C2] focus:ring-0";

        return (
          <Form className="space-y-4 max-w-xl text-[#F5F7FF] text-base">
            <div className="space-y-1.5">
              <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                Nazwa zadania
              </label>
              <Field
                name="name"
                type="text"
                className={inputBaseClasses}
                placeholder="Np. Równania liniowe – zadanie 1"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-xs text-[#f97373] mt-1"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                Treść zadania
              </label>
              <Field
                as="textarea"
                name="content"
                rows={5}
                className={`${inputBaseClasses} resize-none`}
                placeholder="Wpisz treść zadania..."
              />
              <ErrorMessage
                name="content"
                component="div"
                className="text-xs text-[#f97373] mt-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                  Dział
                </label>
                <Field
                  as="select"
                  name="sectionId"
                  className={inputBaseClasses}
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
                  className={inputBaseClasses}
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
                  className="text-xs text-[#f97373] mt-1"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                Typ zadania
              </label>
              <div className="flex gap-4 text-base">
                <label className="inline-flex items-center gap-2">
                  <Field
                    type="radio"
                    name="taskType"
                    value="open"
                    checked={values.taskType === "open"}
                    className="accent-[#7CF9C2]"
                  />
                  <span className="text-[#F5F7FF]">Zadanie otwarte</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <Field
                    type="radio"
                    name="taskType"
                    value="closed"
                    checked={values.taskType === "closed"}
                    className="accent-[#7CF9C2]"
                  />
                  <span className="text-[#F5F7FF]">
                    Zadanie zamknięte (ABCD)
                  </span>
                </label>
              </div>
              <ErrorMessage
                name="taskType"
                component="div"
                className="text-xs text-[#f97373] mt-1"
              />
            </div>

            {values.taskType === "open" && (
              <div className="space-y-1.5">
                <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                  Poprawna odpowiedź
                </label>
                <Field
                  name="openAnswer"
                  type="text"
                  className={inputBaseClasses}
                  placeholder="Np. 4"
                />
                <ErrorMessage
                  name="openAnswer"
                  component="div"
                  className="text-xs text-[#f97373] mt-1"
                />
              </div>
            )}

            {values.taskType === "closed" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                      Odpowiedź A
                    </label>
                    <Field
                      name="answerA"
                      type="text"
                      className={inputBaseClasses}
                      placeholder="Treść odpowiedzi A"
                    />
                    <ErrorMessage
                      name="answerA"
                      component="div"
                      className="text-xs text-[#f97373] mt-1"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                      Odpowiedź B
                    </label>
                    <Field
                      name="answerB"
                      type="text"
                      className={inputBaseClasses}
                      placeholder="Treść odpowiedzi B"
                    />
                    <ErrorMessage
                      name="answerB"
                      component="div"
                      className="text-xs text-[#f97373] mt-1"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                      Odpowiedź C
                    </label>
                    <Field
                      name="answerC"
                      type="text"
                      className={inputBaseClasses}
                      placeholder="Treść odpowiedzi C"
                    />
                    <ErrorMessage
                      name="answerC"
                      component="div"
                      className="text-xs text-[#f97373] mt-1"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                      Odpowiedź D
                    </label>
                    <Field
                      name="answerD"
                      type="text"
                      className={inputBaseClasses}
                      placeholder="Treść odpowiedzi D"
                    />
                    <ErrorMessage
                      name="answerD"
                      component="div"
                      className="text-xs text-[#f97373] mt-1"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-bold text-[#C9D2EE] text-[1.3rem]">
                    Poprawna odpowiedź (A/B/C/D)
                  </label>
                  <Field
                    as="select"
                    name="correctAnswer"
                    className={inputBaseClasses}
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
                    className="text-xs text-[#f97373] mt-1"
                  />
                </div>
              </div>
            )}

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
