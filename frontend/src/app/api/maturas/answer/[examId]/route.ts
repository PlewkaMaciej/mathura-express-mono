import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "../../../../../../lib/prisma";

type Answer = "A" | "B" | "C" | "D";
type Option = { A: string; B: string; C: string; D: string };

type TaskCore = {
  content: string;
  options: Option;
  points: number;
  userAnswer: Answer | null;
};

type SnapshotTask = TaskCore & { correctKey: Answer };
type SnapshotSection = { name: string; tasks: SnapshotTask[] };
type Snapshot = SnapshotSection[];

type PublicTask = Omit<SnapshotTask, "correctKey"> & {
  isCorrect: boolean | null;
  correctOption: Answer | null;
};
type PublicSection = { name: string; tasks: PublicTask[] };

const cloneDeep: <T>(v: T) => T = (globalThis as any).structuredClone
  ? (v) => (globalThis as any).structuredClone(v)
  : (v) => JSON.parse(JSON.stringify(v));

const isAnswer = (x: unknown): x is Answer =>
  x === "A" || x === "B" || x === "C" || x === "D";

function toPublicSection(sec: SnapshotSection): PublicSection {
  return {
    name: sec.name,
    tasks: sec.tasks.map((t) => {
      const answered = t.userAnswer != null;
      return {
        content: t.content,
        options: t.options,
        points: t.points,
        userAnswer: t.userAnswer,
        isCorrect: answered ? t.userAnswer === t.correctKey : null,
        correctOption: answered ? t.correctKey : null,
      };
    }),
  };
}

function recompute(snapshot: Snapshot) {
  let score = 0;
  let answered = 0;
  let maxPoints = 0;
  let totalTasks = 0;

  for (const s of snapshot) {
    for (const t of s.tasks) {
      totalTasks += 1;
      const pts = Number(t.points) || 0;
      maxPoints += pts;
      if (t.userAnswer != null) {
        answered += 1;
        if (t.userAnswer === t.correctKey) score += pts;
      }
    }
  }
  const finished = totalTasks > 0 && answered === totalTasks;
  return { score, answered, maxPoints, finished };
}

export async function POST(req: Request, ctx: { params: { examId: string } }) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { examId } = ctx.params;

  const body = await req.json();
  const { sectionIndex, taskIndex, answer } = body as {
    sectionIndex: number;
    taskIndex: number;
    answer: unknown;
  };

  if (!isAnswer(answer)) {
    return NextResponse.json({ error: "Invalid answer" }, { status: 400 });
  }

  const updated = await prisma
    .$transaction(async (tx) => {
      const me = await tx.user.findUnique({
        where: { clerkId },
        select: { id: true },
      });
      if (!me) throw new Error("USER_NOT_FOUND");

      const exam = await tx.userMatura.findUnique({
        where: { id: examId },
        select: {
          userId: true,
          status: true,
          snapshot: true,
          finishedAt: true,
        },
      });
      if (!exam) throw new Error("EXAM_NOT_FOUND");
      if (exam.userId !== me.id) throw new Error("FORBIDDEN");

      const snapshot = exam.snapshot as unknown as Snapshot;

      const sec = snapshot?.[sectionIndex];
      const task = sec?.tasks?.[taskIndex];
      if (!task) throw new Error("BAD_INDEXES");

      if (task.userAnswer !== null) throw new Error("ALREADY_SET");

      task.userAnswer = answer;

      const { score, answered, maxPoints, finished } = recompute(snapshot);

      const data: Record<string, any> = {
        snapshot: cloneDeep(snapshot),
        score,
        answered,
        maxPoints,
      };
      if (finished && exam.status !== "FINISHED") {
        data.status = "FINISHED";
        data.finishedAt = new Date();
      }

      const saved = await tx.userMatura.update({
        where: { id: examId },
        data,
        select: {
          id: true,
          status: true,
          snapshot: true,
          score: true,
          maxPoints: true,
        },
      });

      return saved;
    })
    .catch((e: any) => {
      switch (String(e?.message)) {
        case "USER_NOT_FOUND":
          return { error: "User not found", code: 404 } as const;
        case "EXAM_NOT_FOUND":
          return { error: "Exam not found", code: 404 } as const;
        case "FORBIDDEN":
          return { error: "Forbidden", code: 403 } as const;
        case "BAD_INDEXES":
          return { error: "Bad indexes", code: 400 } as const;
        case "ALREADY_SET":
          return { error: "Answer already set", code: 409 } as const;
        default:
          console.error("Answer error:", e);
          return { error: "Internal error", code: 500 } as const;
      }
    });

  if ("error" in updated) {
    return NextResponse.json(
      { error: updated.error },
      { status: updated.code }
    );
  }

  const publicSnapshot: PublicSection[] = (
    updated.snapshot as unknown as Snapshot
  ).map(toPublicSection);

  return NextResponse.json(
    {
      examId: updated.id,
      status: updated.status,
      snapshot: publicSnapshot,
      score: updated.score,
      maxPoints: updated.maxPoints,
    },
    { status: 200 }
  );
}
