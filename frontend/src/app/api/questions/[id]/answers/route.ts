import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const questionId = Number(id);

    if (!id || !Number.isFinite(questionId)) {
      console.error("Invalid question id:", id);
      return NextResponse.json(
        { error: "Invalid question ID" },
        { status: 400 },
      );
    }

    const body = await req.json();
    const { text, userId, userName, lastName } = body ?? {};

    if (typeof text !== "string" || !text.trim()) {
      return NextResponse.json(
        { error: "Missing or invalid text" },
        { status: 400 },
      );
    }
    if (typeof userId !== "string" || !userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!dbUser) {
      console.error("No DB user found for clerkId:", userId);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const createdAnswer = await prisma.answer.create({
      data: {
        text,
        question: { connect: { id: questionId } },
        user: { connect: { id: dbUser.id } },
        userName: userName ?? dbUser.firstName ?? "Anonim",
        lastName: lastName ?? dbUser.lastName ?? "",
      },
    });

    return NextResponse.json(createdAnswer, { status: 201 });
  } catch (error) {
    console.error("SERVER ERROR: POST /api/questions/[id]/answers", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
