export interface QuestionType {
  id: number;
  title: string;
  text: string;
  time: number;
  userId: number;
  answers?: { id: number }[];
}

export interface VideoType {
  id: number;
  url: string;
  videoUrl?: string;
  questions: QuestionType[];
}
