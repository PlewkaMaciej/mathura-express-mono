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
      rubric,
      referenceAnswer,
      maxPoints,
      answerA,
      answerB,
      answerC,
      answerD,
      correctAnswer,
      points,
    } = body;
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Nazwa jest wymagana" },
        { status: 400 }
      );
    }

    if (!content || typeof content !== "string" || !content.trim()) {
      return NextResponse.json(
        { error: "Treść jest wymagana" },
        { status: 400 }
      );
    }

    if (!subSectionId || typeof subSectionId !== "string") {
      return NextResponse.json(
        { error: "subSectionId jest wymagane" },
        { status: 400 }
      );
    }

    if (taskType === "open") {
      if (!rubric || typeof rubric !== "string" || !rubric.trim()) {
        return NextResponse.json(
          { error: "Rubric (kryteria oceniania) jest wymagane" },
          { status: 400 }
        );
      }

      const mp = Number(maxPoints);
      if (!Number.isFinite(mp) || !Number.isInteger(mp) || mp < 0 || mp > 50) {
        return NextResponse.json(
          { error: "maxPoints musi być liczbą całkowitą 0..50" },
          { status: 400 }
        );
      }

      const task = await prisma.openTasks.create({
        data: {
          name: name.trim(),
          content: content.trim(),
          subSectionId,
          rubric: rubric.trim(),
          referenceAnswer:
            typeof referenceAnswer === "string" ? referenceAnswer.trim() : null,
          maxPoints: mp,
        },
      });

      return NextResponse.json({ success: true, task }, { status: 201 });
    }

    if (taskType === "closed") {
      const ca = String(correctAnswer ?? "")
        .trim()
        .toUpperCase();
      if (!["A", "B", "C", "D"].includes(ca)) {
        return NextResponse.json(
          { error: "Poprawna odpowiedź musi być A, B, C lub D" },
          { status: 400 }
        );
      }

      const pts = Number(points);
      if (
        !Number.isFinite(pts) ||
        !Number.isInteger(pts) ||
        pts < 0 ||
        pts > 10
      ) {
        return NextResponse.json(
          { error: "points musi być liczbą całkowitą 0..10" },
          { status: 400 }
        );
      }

      const task = await prisma.closedTasks.create({
        data: {
          name: name.trim(),
          content: content.trim(),
          correctAnswer: ca,
          points: pts,
          subSectionId,
          answers: {
            create: {
              A: String(answerA ?? "").trim(),
              B: String(answerB ?? "").trim(),
              C: String(answerC ?? "").trim(),
              D: String(answerD ?? "").trim(),
            },
          },
        },
        include: { answers: true },
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
