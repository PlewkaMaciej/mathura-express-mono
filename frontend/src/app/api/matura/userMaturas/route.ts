import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export const runtime = "nodejs";

export async function GET(_req: NextRequest) {
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

    const dbUser = await prisma.user.upsert({
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
      select: {
        id: true,
      },
    });

    const userMaturas = await prisma.userMatura.findMany({
      where: {
        userId: dbUser.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        status: true,
        earnedPoints: true,
        createdAt: true,
        matura: {
          select: {
            id: true,
            name: true,
            createdAt: true,
            closedTasks: {
              select: {
                points: true,
              },
            },
            openTasks: {
              select: {
                maxPoints: true,
              },
            },
          },
        },
      },
    });

    const maturas = userMaturas.map((userMatura) => {
      const closedTasks = userMatura.matura.closedTasks;
      const openTasks = userMatura.matura.openTasks;

      let closedMaxPoints = 0;
      let openMaxPoints = 0;

      for (const task of closedTasks) {
        closedMaxPoints += task.points ?? 1;
      }

      for (const task of openTasks) {
        openMaxPoints += task.maxPoints ?? 0;
      }

      return {
        id: userMatura.matura.id,
        name: userMatura.matura.name,
        status: userMatura.status,
        createdAt: userMatura.createdAt,
        earnedPoints: userMatura.earnedPoints,
        maxPoints: closedMaxPoints + openMaxPoints,
      };
    });

    return NextResponse.json({ maturas }, { status: 200 });
  } catch (e: unknown) {
    console.error("GET USER MATURAS ERROR:", e);

    const message = e instanceof Error ? e.message : "Unknown error";

    return NextResponse.json(
      {
        error: "Internal server error",
        details: message,
      },
      { status: 500 },
    );
  }
}
