import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { auth } from "@clerk/nextjs/server";
const closedTask = 20;
const openTask = 5;
function pickRandom<Task extends { id: string }>(
  items: Task[],
  count: number
): string[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(count, arr.length)).map((x) => x.id);
}
export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const {
      name,
      status = false,
    }: {
      name: string;
      status?: boolean;
    } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Pole 'name' jest wymagane." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        { status: 404 }
      );
    }
    const subsectionWithMustShuffle = await prisma.subSection.findMany({
      where: {
        mustBeShuffle: true,
      },
      include: {
        openTasks: true,
        closedTasks: true,
      },
    });
    let selectedClosedTaskIds: string[] = [];
    let selectedOpenTaskIds: string[] = [];
    for (const singleSubsection of subsectionWithMustShuffle) {
      if (
        singleSubsection.closedTasksToShuffle !== null &&
        singleSubsection.closedTasksToShuffle > 0
      ) {
        const ids = pickRandom(
          singleSubsection.closedTasks,
          singleSubsection.closedTasksToShuffle
        );
        selectedClosedTaskIds.push(...ids);
      }
      if (
        singleSubsection.openTasksToShuffle !== null &&
        singleSubsection.openTasksToShuffle > 0
      ) {
        const ids = pickRandom(
          singleSubsection.openTasks,
          singleSubsection.openTasksToShuffle
        );
        selectedOpenTaskIds.push(...ids);
      }
    }
    selectedClosedTaskIds = [...new Set(selectedClosedTaskIds)];
    selectedOpenTaskIds = [...new Set(selectedOpenTaskIds)];
    const closedTasksNeeded = Math.max(
      closedTask - selectedClosedTaskIds.length,
      0
    );
    if (closedTasksNeeded > 0) {
      const ClosedCandidates = await prisma.closedTasks.findMany({
        where: {
          id: { notIn: selectedClosedTaskIds },
        },
      });

      const extraClosedIds = pickRandom(ClosedCandidates, closedTasksNeeded);
      selectedClosedTaskIds.push(...extraClosedIds);
    }
    const openTaskNeeded = Math.max(openTask - selectedOpenTaskIds.length, 0);
    if (openTaskNeeded > 0) {
      const openCandidates = await prisma.openTasks.findMany({
        where: {
          id: { notIn: selectedOpenTaskIds },
        },
      });

      const extraOpenIds = pickRandom(openCandidates, openTaskNeeded);
      selectedOpenTaskIds.push(...extraOpenIds);
    }
    const fullMatura = await prisma.$transaction(async (tx) => {
      const matura = await tx.matura.create({
        data: {
          name,
          status,
          closedTasks:
            selectedClosedTaskIds.length > 0
              ? {
                  connect: selectedClosedTaskIds.map((id) => ({ id })),
                }
              : undefined,
          openTasks:
            selectedOpenTaskIds.length > 0
              ? {
                  connect: selectedOpenTaskIds.map((id) => ({ id })),
                }
              : undefined,
        },
      });
      await tx.userMatura.create({
        data: {
          userId: user.id,
          maturaId: matura.id,
        },
      });
      return tx.matura.findUnique({
        where: { id: matura.id },
        include: {
          openTasks: true,
          closedTasks: {
            include: { answers: true },
          },
          userMaturas: {
            select: { userId: true },
          },
        },
      });
    });
    return NextResponse.json(fullMatura, { status: 201 });
  } catch (error: any) {
    console.error("Error generating matura:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error?.message },
      { status: 500 }
    );
  }
}
