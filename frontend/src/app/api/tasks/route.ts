import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      content,
      taskType,
      subSectionId,
      openAnswer,
      answerA,
      answerB,
      answerC,
      answerD,
      correctAnswer,
    } = body;

    if (taskType === "open") {
      const task = await prisma.openTasks.create({
        data: {
          name,
          content,
          answer: String(openAnswer),
          subSectionId,
        },
      });

      return NextResponse.json({ success: true, task }, { status: 201 });
    }

    if (taskType === "closed") {
      const task = await prisma.closedTasks.create({
        data: {
          name,
          content,
          correctAnswer,
          subSectionId,
          answers: {
            create: {
              A: answerA ?? "",
              B: answerB ?? "",
              C: answerC ?? "",
              D: answerD ?? "",
            },
          },
        },
      });

      return NextResponse.json({ success: true, task }, { status: 201 });
    }

    return NextResponse.json(
      { error: "Nieprawidłowy typ zadania" },
      { status: 400 }
    );
  } catch (error) {
    console.error("TASK CREATE ERROR:", error);
    return NextResponse.json(
      { error: "Błąd serwera przy dodawaniu zadania" },
      { status: 500 }
    );
  }
}
