import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

type Answer = "A" | "B" | "C" | "D";
type Option = { A: string; B: string; C: string; D: string };
type SnapshotTask = {
  content: string;
  options: Option;
  points: number;
  correctKey: Answer;
  userAnswer: Answer | null;
};
type SnapshotSection = { name: string; tasks: SnapshotTask[] };
type Snapshot = SnapshotSection[];

type PublicTask = {
  content: string;
  options: Option;
  points: number;
  userAnswer: Answer | null;
  isCorrect: boolean | null;
  correctOption: Answer | null;
};
type PublicSection = { name: string; tasks: PublicTask[] };

function toPublicSection(sec: SnapshotSection): PublicSection {
  return {
    name: sec.name,
    tasks: sec.tasks.map((t) => {
      const answered = t.userAnswer != null;
      return {
        content: t.content,
        options: t.options,
        points: t.points,
        userAnswer: t.userAnswer ?? null,
        isCorrect: answered ? t.userAnswer === t.correctKey : null,
        correctOption: answered ? t.correctKey : null,
      };
    }),
  };
}
function computeTotals(snapshot: Snapshot) {
  let score = 0,
    maxPoints = 0;
  for (const s of snapshot)
    for (const t of s.tasks) {
      maxPoints += Number(t.points) || 0;
      if (t.userAnswer != null && t.userAnswer === t.correctKey) {
        score += Number(t.points) || 0;
      }
    }
  return { score, maxPoints };
}

export async function GET(_req: Request, ctx: { params: { examId: string } }) {
  const { examId } = await ctx.params;

  const exam = await prisma.userMatura.findUnique({
    where: { id: examId },
    select: {
      id: true,
      createdAt: true,
      status: true,
      snapshot: true,
      matura: { select: { name: true } },
    },
  });

  if (!exam)
    return NextResponse.json({ error: "Exam not found" }, { status: 404 });

  const snapshot = exam.snapshot as unknown as Snapshot;
  const publicSnapshot = snapshot.map(toPublicSection);
  const { score, maxPoints } = computeTotals(snapshot);
  const name =
    exam.matura?.name ??
    `Arkusz z ${new Date(exam.createdAt).toLocaleString()}`;

  return NextResponse.json(
    {
      id: exam.id,
      status: exam.status,
      name,
      snapshot: publicSnapshot,
      score,
      maxPoints,
    },
    { status: 200 }
  );
}
