import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "../../../../../lib/prisma";
import { JsonValue } from "@prisma/client/runtime/client";
const maturaId = "cmh6bkesi0000w194u3xbqj67";

type Option = { A: string; B: string; C: string; D: string };

type Task = {
  content: string;
  options: Option;
  correctKey: keyof Option;
  points: number;
};

type Section = {
  name: string;
  tasks: Task[];
};

type UserMaturaSnapshot = {
  name: string;
  tasks: {
    content: string;
    options: Option;
    correctKey: string;
    points: number;
    userAnswer: null | "A" | "B" | "C" | "D";
  }[];
};

type UserMatura = {
  id: string;
  userId: string;
  maturaId: string;
  snapshot: JsonValue;
};

function pickOne<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

export async function POST(req: Request) {
  const { userId: clerkId } = await auth();
  if (!clerkId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) {
    return NextResponse.json(
      {
        error: "User not found in local DB. Create it via Clerk webhook first.",
      },
      { status: 400 }
    );
  }

  const tpl = await prisma.matura.findUnique({ where: { id: maturaId } });
  if (!tpl)
    return NextResponse.json({ error: "Template not found" }, { status: 404 });

  const sections: Section[] = tpl.sections ? (tpl.sections as Section[]) : [];

  const snapshot: UserMaturaSnapshot[] = sections.map((sec: Section) => ({
    name: sec.name,
    tasks: [pickOne(sec.tasks)].map((t: Task) => ({
      content: t.content,
      options: t.options,
      correctKey: t.correctKey,
      points: t.points,
      userAnswer: null,
    })),
  }));

  const parsedSnapshot: JsonValue = snapshot;

  const exam: UserMatura = await prisma.userMatura.create({
    data: {
      userId: user.id,
      maturaId: tpl.id,
      snapshot: parsedSnapshot,
    },
  });

  const publicSnapshot = (exam.snapshot as UserMaturaSnapshot[]).map((sec) => ({
    name: sec.name,
    tasks: sec.tasks.map((t: any) => ({
      content: t.content,
      options: t.options,
      points: t.points,
      userAnswer: t.userAnswer,
    })),
  }));

  return NextResponse.json(
    { examId: exam.id, status: "ACTIVE", snapshot: publicSnapshot },
    { status: 201 }
  );
}

export async function GET(req: Request) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({ where: { clerkId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    const userMatury = await prisma.userMatura.findMany({
      where: { userId: user.id },
    });

    return NextResponse.json(userMatury, { status: 200 });
  } catch (error) {
    console.error("Błąd przy pobieraniu matur:", error);
    return NextResponse.json(
      { error: "Error fetching matury" },
      { status: 500 }
    );
  }
}
