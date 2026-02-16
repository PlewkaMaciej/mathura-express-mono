import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ clerkId: string }> },
) {
  const { clerkId } = await params;

  const user = await prisma.user.findUnique({
    where: { clerkId },
  });

  if (!user)
    return NextResponse.json(
      { error: "Nie znaleziono użytkownika" },
      { status: 404 },
    );

  return NextResponse.json({ id: user.id });
}
