import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
export async function GET() {
  try {
    const sections = await prisma.section.findMany({
      include: {
        subsections: true,
      },
    });
    return NextResponse.json(sections);
  } catch (error) {
    console.error("Fetching sections error", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
