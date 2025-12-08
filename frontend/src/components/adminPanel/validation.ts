import * as Yup from "yup";
import { FormValues, TaskType } from "./adminTaskFormTypes";

export const validationSchema: Yup.Schema<FormValues> = Yup.object({
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
