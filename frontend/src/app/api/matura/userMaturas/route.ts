import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET(_req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });

    if (!dbUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userMaturas = await prisma.userMatura.findMany({
      where: { userId: dbUser.id },
      orderBy: { createdAt: "desc" },
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
            closedTasks: { select: { points: true } },
            openTasks: { select: { maxPoints: true } }, 
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
        openMaxPoints += task.maxPoints ?? 0; // ✅ tu zmiana
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
  } catch (e: any) {
    console.error("GET USER MATURAS ERROR:", e);
    return NextResponse.json(
      { error: "Internal server error", details: e?.message },
      { status: 500 }
    );
  }
}
