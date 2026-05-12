import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export const runtime = "nodejs";

const CLOSED_TASK_TARGET = 20;
const OPEN_TASK_TARGET = 5;

function pickRandom<T extends { id: string }>(
  items: T[],
  count: number,
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

    const clerkUser = await currentUser();

    if (!clerkUser) {
      return NextResponse.json(
        { error: "Clerk user not found" },
        { status: 401 },
      );
    }

    const email =
      clerkUser.primaryEmailAddress?.emailAddress ??
      clerkUser.emailAddresses[0]?.emailAddress ??
      "";

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
        { status: 400 },
      );
    }

    const user = await prisma.user.upsert({
      where: {
        clerkId,
      },
      update: {
        email,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
      },
      create: {
        clerkId,
        email,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
      },
    });

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
          singleSubsection.closedTasksToShuffle,
        );

        selectedClosedTaskIds.push(...ids);
      }

      if (
        singleSubsection.openTasksToShuffle !== null &&
        singleSubsection.openTasksToShuffle > 0
      ) {
        const ids = pickRandom(
          singleSubsection.openTasks,
          singleSubsection.openTasksToShuffle,
        );

        selectedOpenTaskIds.push(...ids);
      }
    }

    selectedClosedTaskIds = [...new Set(selectedClosedTaskIds)];
    selectedOpenTaskIds = [...new Set(selectedOpenTaskIds)];

    const closedTasksNeeded = Math.max(
      CLOSED_TASK_TARGET - selectedClosedTaskIds.length,
      0,
    );

    if (closedTasksNeeded > 0) {
      const closedCandidates = await prisma.closedTasks.findMany({
        where: {
          id: {
            notIn: selectedClosedTaskIds,
          },
        },
        select: {
          id: true,
        },
      });

      const extraClosedIds = pickRandom(closedCandidates, closedTasksNeeded);
      selectedClosedTaskIds.push(...extraClosedIds);
    }

    const openTasksNeeded = Math.max(
      OPEN_TASK_TARGET - selectedOpenTaskIds.length,
      0,
    );

    if (openTasksNeeded > 0) {
      const openCandidates = await prisma.openTasks.findMany({
        where: {
          id: {
            notIn: selectedOpenTaskIds,
          },
        },
        select: {
          id: true,
        },
      });

      const extraOpenIds = pickRandom(openCandidates, openTasksNeeded);
      selectedOpenTaskIds.push(...extraOpenIds);
    }

    const fullMatura = await prisma.$transaction(async (tx) => {
      const matura = await tx.matura.create({
        data: {
          name,
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
          status,
        },
      });

      return tx.matura.findUnique({
        where: {
          id: matura.id,
        },
        include: {
          openTasks: true,
          closedTasks: {
            include: {
              answers: true,
            },
          },
          userMaturas: {
            select: {
              userId: true,
            },
          },
        },
      });
    });

    return NextResponse.json(fullMatura, { status: 201 });
  } catch (error: unknown) {
    console.error("Error generating matura:", error);

    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        error: "Internal server error",
        details: message,
      },
      { status: 500 },
    );
  }
}
