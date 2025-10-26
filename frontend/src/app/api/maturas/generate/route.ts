import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "../../../../../lib/prisma";

const maturaId = "cmh6bkesi0000w194u3xbqj67";
function pickOne<T>(arr: T[]) {
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

  const sections = (tpl.sections as any[]) ?? [];
  const snapshot = sections.map((sec: any) => ({
    name: sec.name,
    tasks: [pickOne(sec.tasks)].map((t: any) => ({
      content: t.content,
      options: t.options,
      correctKey: t.correctKey,
      points: t.points ?? 1,
      userAnswer: null,
    })),
  }));

  const exam = await prisma.userMatura.create({
    data: { userId: user.id, maturaId: tpl.id, snapshot },
  });

  const publicSnapshot = (exam.snapshot as any[]).map((sec) => ({
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
