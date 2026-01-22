export interface AnswerType {
  id: number;
  text: string;
  userName: string;
  lastName?: string;
  questionId: number;
}

export interface QuestionType {
  id: number;
  title: string;
  text: string;
  time: number;
  isPublic?: boolean;
  userName: string;
  lastName?: string;
  userId: number;
  answers?: AnswerType[];
}

export interface VideoType {
  id: number;
  url: string;
  videoUrl?: string;
  questions: QuestionType[];
  description?: string | null;
}
