import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get("id"); 

  try {
    if (idParam) {
      const id = parseInt(idParam, 10);
      const video = await prisma.video.findUnique({
        where: { id },
        include: {
          questions: {
            include: {
              answers: true, 
            },
          },
        },
      });

      if (!video) {
        return NextResponse.json({ error: "Video not found" }, { status: 404 });
      }

      return NextResponse.json(video);
    }

    const videos = await prisma.video.findMany({
      include: {
        questions: {
          include: { answers: true },
        },
      },
    });

    return NextResponse.json(videos);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}
