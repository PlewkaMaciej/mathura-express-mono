import { PrismaClient } from "../../../../../generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

type Body = {
  userMaturaId: string;
  closedTaskId: string;
  answer: "A" | "B" | "C" | "D";
};

async function recalculateEarnedPoints(userMaturaId: string) {
  const closedPoints = await prisma.userClosedAnswer.count({
    where: { userMaturaId, isCorrect: true },
  });

  const openAgg = await prisma.userOpenAnswer.aggregate({
    where: { userMaturaId },
    _sum: { awardedPoints: true },
  });

  const openPoints = openAgg._sum.awardedPoints ?? 0;
  const total = closedPoints + openPoints;

  await prisma.userMatura.update({
    where: { id: userMaturaId },
    data: { earnedPoints: total },
  });

  return total;
}

export async function POST(req: Request) {
  let body: Partial<Body>;

  try {
    body = (await req.json()) as Partial<Body>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { userMaturaId, closedTaskId, answer } = body;

  if (!userMaturaId || !closedTaskId || !answer) {
    return NextResponse.json({ error: "Fields error" }, { status: 400 });
  }

  if (!["A", "B", "C", "D"].includes(answer)) {
    return NextResponse.json(
      { error: "Answer must be A/B/C/D" },
      { status: 400 },
    );
  }

  const task = await prisma.closedTasks.findUnique({
    where: { id: closedTaskId },
    select: { correctAnswer: true },
  });

  if (!task) {
    return NextResponse.json(
      { error: "Closed task not found" },
      { status: 404 },
    );
  }

  const isCorrect = answer === task.correctAnswer;

  const existing = await prisma.userClosedAnswer.findUnique({
    where: {
      userMaturaId_closedTaskId: { userMaturaId, closedTaskId },
    },
    select: { id: true },
  });

  if (existing) {
    return NextResponse.json(
      { ok: false, error: "Już odpowiedziałeś na to zadanie." },
      { status: 409 },
    );
  }

  await prisma.userClosedAnswer.create({
    data: { userMaturaId, closedTaskId, answer, isCorrect },
  });

  const earnedPoints = await recalculateEarnedPoints(userMaturaId);

  return NextResponse.json({
    ok: true,
    isCorrect,
    earnedPoints,
  });
}
