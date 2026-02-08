import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    const { userId: clerkId } = await auth();

    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const matura = await prisma.matura.findUnique({
      where: { id },
      include: {
        openTasks: true,
        closedTasks: {
          include: { answers: true },
        },
      },
    });

    if (!matura) {
      return NextResponse.json({ error: "Matura not found" }, { status: 404 });
    }

    const userMatura = await prisma.userMatura.findUnique({
      where: {
        userId_maturaId: {
          userId: user.id,
          maturaId: id,
        },
      },
      select: {
        id: true,
        earnedPoints: true,
        closedAnswers: {
          select: {
            closedTaskId: true,
            answer: true,
            isCorrect: true,
          },
        },
        openAnswers: {
          select: {
            openTaskId: true,
            answer: true,
            awardedPoints: true,
            feedback: true,
            gradingJson: true,
            gradedAt: true,
          },
        },
      },
    });

    if (!userMatura) {
      return NextResponse.json(
        { error: "UserMatura not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ matura, userMatura });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
