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
        earnedPoints: true,
        createdAt: true,
        matura: {
          select: {
            id: true,
            name: true,
            status: true,
            createdAt: true,
            closedTasks: { select: { points: true } },
            openTasks: { select: { points: true } },
          },
        },
      },
    });

    const maturas = userMaturas.map((um) => {
      const closedMax = um.matura.closedTasks.reduce(
        (s, t) => s + (t.points ?? 1),
        0
      );
      const openMax = um.matura.openTasks.reduce(
        (s, t) => s + (t.points ?? 0),
        0
      );

      return {
        id: um.matura.id,
        name: um.matura.name,
        status: um.matura.status,
        createdAt: um.matura.createdAt,

        earnedPoints: um.earnedPoints,
        maxPoints: closedMax + openMax,
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
