import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { error } from "console";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const videoId = Number(id);

    if (!id || !Number.isFinite(videoId)) {
      console.error("Invalid video id:", id);
      return NextResponse.json({ error: "Invalid video ID" }, { status: 400 });
    }

    const body = await req.json();
    const { title, text, time, userId, isPublic } = body ?? {};

    if (typeof title !== "string" || typeof text !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid fields" },
        { status: 400 }
      );
    }

    const timeNum = Number(time);
    const timeValue = Number.isFinite(timeNum)
      ? Math.max(0, Math.floor(timeNum))
      : 0;
    const dbUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!dbUser) {
      console.error("No DB user found for clerkId:", userId);
      return NextResponse.json(
        { error: "User record not found in database" },
        { status: 404 }
      );
    }
    const name = dbUser.firstName;
    const lastName = dbUser.lastName;
    if (!name || !lastName) {
      console.error("User name or last name missing for clerkId:", userId);
      return NextResponse.json(
        { error: "User name or last name missing" },
        { status: 400 }
      );
    }
    const created = await prisma.question.create({
      data: {
        title,
        text,
        time: timeValue,
        video: { connect: { id: videoId } },
        user: { connect: { id: dbUser.id } },
        userName: name,
        lastName: lastName,
        isPublic,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("SERVER ERROR: POST /api/videos/[id]/questions", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
