import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get("id"); // pobieramy ?id=1

  try {
    if (idParam) {
      const id = parseInt(idParam, 10);
      const video = await prisma.video.findUnique({
        where: { id },
      });

      if (!video) {
        return NextResponse.json({ error: "Video not found" }, { status: 404 });
      }

      return NextResponse.json(video);
    }
    const videos = await prisma.video.findMany();
    return NextResponse.json(videos);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}
