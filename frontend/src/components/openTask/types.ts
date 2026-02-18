export type OpenTask = {
  id: string;
  name: string;
  content: string;
  maxPoints: number;
  rubric: string;
  referenceAnswer?: string | null;
};

export type OpenAnswerDTO = {
  openTaskId: string;
  answer?: string | null;
  awardedPoints?: number | null;
  feedback?: string | null;
  gradingJson?: string | null;
  gradedAt?: string | null;
  screenshotUrl?: string | null;
};

export type GeneratedOpenTask = {
  name: string;
  content: string;
  maxPoints: number;
  rubric: string;
  referenceAnswer?: string | null;
};
