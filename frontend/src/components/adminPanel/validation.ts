import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().trim().required("Nazwa zadania jest wymagana"),
  content: Yup.string().trim().required("Treść zadania jest wymagana"),
  taskType: Yup.mixed<"open" | "closed">()
    .oneOf(["open", "closed"])
    .required("Wybierz typ zadania"),
  sectionId: Yup.string().required("Wybierz dział"),
  subSectionId: Yup.string().required("Wybierz poddział"),

  rubric: Yup.string().when("taskType", {
    is: "open",
    then: (s) => s.trim().required("Rubric jest wymagany"),
    otherwise: (s) => s.optional(),
  }),
  maxPoints: Yup.number().when("taskType", {
    is: "open",
    then: (s) => s.required().min(1).max(20),
    otherwise: (s) => s.optional(),
  }),
  referenceAnswer: Yup.string().when("taskType", {
    is: "open",
    then: (s) => s.optional(),
    otherwise: (s) => s.optional(),
  }),

  // CLOSED
  answerA: Yup.string().when("taskType", {
    is: "closed",
    then: (s) => s.trim().required("Odpowiedź A jest wymagana"),
    otherwise: (s) => s.optional(),
  }),
  answerB: Yup.string().when("taskType", {
    is: "closed",
    then: (s) => s.trim().required("Odpowiedź B jest wymagana"),
    otherwise: (s) => s.optional(),
  }),
  answerC: Yup.string().when("taskType", {
    is: "closed",
    then: (s) => s.trim().required("Odpowiedź C jest wymagana"),
    otherwise: (s) => s.optional(),
  }),
  answerD: Yup.string().when("taskType", {
    is: "closed",
    then: (s) => s.trim().required("Odpowiedź D jest wymagana"),
    otherwise: (s) => s.optional(),
  }),
  correctAnswer: Yup.string().when("taskType", {
    is: "closed",
    then: (s) =>
      s.oneOf(["A", "B", "C", "D"]).required("Wybierz poprawną odpowiedź"),
    otherwise: (s) => s.optional(),
  }),
});
