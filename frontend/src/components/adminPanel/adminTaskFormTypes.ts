export type TaskType = "open" | "closed";

export type FormValues = {
  name: string;
  content: string;
  taskType: TaskType;
  sectionId: string;
  subSectionId: string;
  rubric: string;
  referenceAnswer: string;
  maxPoints: number;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  correctAnswer: string;
  points: number;
};
