import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(
  req: NextRequest,

  context: { params: Promise<{ id: string }> }
) {
  try {
    const videoId = Number((await context.params).id); // czemu to dziala xD? a bez promisa i context.params nie

    if (!Number.isFinite(videoId)) {
      return NextResponse.json({ error: "Invalid video ID" }, { status: 400 });
    }

    const { title, text, time } = await req.json();

    if (!title || !text) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const created = await prisma.question.create({
      data: {
        title,
        text,
        time: Number.isFinite(time) ? Math.floor(time) : 0,
        video: { connect: { id: videoId } },
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
