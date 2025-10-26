import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { examId: string } }
) {
  try {
    const { examId } = await params;

    console.log("Otrzymano examId:", examId);

    const exam = await prisma.userMatura.findUnique({
      where: { id: examId },
      include: { matura: true },
    });

    if (!exam) {
      return NextResponse.json({ error: "Exam not found" }, { status: 404 });
    }

    return NextResponse.json(exam, { status: 200 });
  } catch (error) {
    console.error("Błąd przy pobieraniu matury:", error);
    return NextResponse.json(
      { error: "Error fetching exam details" },
      { status: 500 }
    );
  }
}
