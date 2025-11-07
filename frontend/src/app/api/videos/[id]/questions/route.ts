import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const videoId = Number(params.id);

    if (isNaN(videoId)) {
      return NextResponse.json({ error: "Invalid video ID" }, { status: 400 });
    }

    const { title, text, time } = await req.json();

    const createdQuestion = await prisma.question.create({
      data: {
        title,
        text,
        time,
        video: {
          connect: { id: videoId },
        },
      },
    });

    return NextResponse.json(createdQuestion, { status: 201 });
  } catch (error) {
    console.error("Error creating question:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
