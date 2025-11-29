import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "../../../../../lib/prisma";

type Answer = "A" | "B" | "C" | "D";
type Option = { A: string; B: string; C: string; D: string };
type TaskTpl = {
  content: string;
  options: Option;
  correctKey: keyof Option;
  points: number;
};
type SectionTpl = { name: string; tasks: TaskTpl[] };

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

const TEMPLATE_ID = "cmhwbf4x80000w1qcq2zn9u3j";

const clean = <T>(v: T) => JSON.parse(JSON.stringify(v));
const pickOne = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

function toPublicSection(sec: SnapshotSection): PublicSection {
  return {
    name: sec.name,
    tasks: sec.tasks.map((t) => ({
      content: t.content,
      options: t.options,
      points: t.points,
      userAnswer: t.userAnswer ?? null,
      isCorrect: t.userAnswer !== null ? t.userAnswer === t.correctKey : null,
      correctOption: t.userAnswer !== null ? t.correctKey : null,
    })),
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

async function ensureUser(clerkId: string) {
  let user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) {
    const userData = await currentUser();
    user = await prisma.user.create({
      data: {
        clerkId,
        email:
          userData?.emailAddresses?.[0]?.emailAddress ??
          `${clerkId}@placeholder.local`,
        firstName: userData?.firstName ?? null,
        lastName: userData?.lastName ?? null,
      },
    });
  }
  return user;
}

export async function GET() {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await ensureUser(userId);
  const exams = await prisma.userMatura.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    select: { id: true, createdAt: true, status: true, snapshot: true },
  });

  const mapped = exams.map((e) => {
    const { score, maxPoints } = computeTotals(
      e.snapshot as unknown as Snapshot
    );
    return {
      id: e.id,
      createdAt: e.createdAt,
      status: e.status,
      score,
      maxPoints,
    };
  });

  return NextResponse.json(mapped, { status: 200 });
}

export async function POST() {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await ensureUser(userId);

  const tpl = await prisma.matura.findUnique({ where: { id: TEMPLATE_ID } });
  if (!tpl)
    return NextResponse.json({ error: "Template not found" }, { status: 404 });

  const sectionsTpl: SectionTpl[] = (tpl.sections as SectionTpl[]) ?? [];
  if (!sectionsTpl.length)
    return NextResponse.json(
      { error: "Template has no sections" },
      { status: 400 }
    );

  const snapshot: Snapshot = sectionsTpl.map((sec) => ({
    name: sec.name,
    tasks: [pickOne(sec.tasks)].map((t) => ({
      content: t.content,
      options: t.options,
      points: t.points,
      correctKey: t.correctKey as Answer,
      userAnswer: null,
    })),
  }));

  const created = await prisma.userMatura.create({
    data: {
      userId: user.id,
      maturaId: tpl.id,
      snapshot: clean(snapshot),
    },
    select: { id: true, status: true, snapshot: true, createdAt: true },
  });

  const publicSnapshot = (created.snapshot as unknown as Snapshot).map(
    toPublicSection
  );
  const { score, maxPoints } = computeTotals(
    created.snapshot as unknown as Snapshot
  );

  return NextResponse.json(
    {
      examId: created.id,
      status: created.status,
      snapshot: publicSnapshot,
      score,
      maxPoints,
    },
    { status: 201 }
  );
}
