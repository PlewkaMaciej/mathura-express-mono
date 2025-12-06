import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
export const dynamic = "force-dynamic";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  console.log("xd");
  try {
    const { id } = await context.params;
    const videoId = Number(id);

    if (!id || !Number.isFinite(videoId)) {
      console.error("Invalid video id:", id);
      return NextResponse.json({ error: "Invalid video ID" }, { status: 400 });
    }

    const body = await req.json();
    const { title, text, time } = body ?? {};

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

    const created = await prisma.question.create({
      data: {
        title,
        text,
        time: timeValue,
        videoId,
        userId,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("SERVER ERROR: POST /api/videos/[id]/questions", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
