export type TaskType = "open" | "closed";

export interface FormValues {
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
