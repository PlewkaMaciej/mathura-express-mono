import prisma from "../lib/prisma";

// 👉 TU WPISZ ID SWOICH ZADAŃ WZORCOWYCH
const CLOSED_TASK_ID = "cmkfni57w0001w1c8uvd0msez";
const OPEN_TASK_ID = "cmkfnn72f0004w1c8b9gmmglh";

async function main() {
  // 1️⃣ Pobierz zadania wzorcowe
  const closedTemplate = await prisma.closedTasks.findUnique({
    where: { id: CLOSED_TASK_ID },
    include: { answers: true },
  });

  if (!closedTemplate) {
    throw new Error("Nie znaleziono zadania zamkniętego o podanym ID");
  }

  const openTemplate = await prisma.openTasks.findUnique({
    where: { id: OPEN_TASK_ID },
  });

  if (!openTemplate) {
    throw new Error("Nie znaleziono zadania otwartego o podanym ID");
  }

  // 2️⃣ Pobierz wszystkie poddziały
  const subsections = await prisma.subSection.findMany({
    orderBy: { name: "asc" },
  });

  if (subsections.length === 0) {
    console.log("Brak poddziałów (SubSection) w bazie.");
    return;
  }

  let createdClosed = 0;
  let createdOpen = 0;

  for (const sub of subsections) {
    // ========== CLOSED ==========
    const existingClosed = await prisma.closedTasks.findFirst({
      where: {
        subSectionId: sub.id,
        name: closedTemplate.name,
      },
    });

    if (!existingClosed) {
      await prisma.closedTasks.create({
        data: {
          name: closedTemplate.name,
          content: closedTemplate.content,
          correctAnswer: closedTemplate.correctAnswer,
          subSectionId: sub.id,
          answers: {
            create: {
              A: closedTemplate.answers[0]?.A ?? "",
              B: closedTemplate.answers[0]?.B ?? "",
              C: closedTemplate.answers[0]?.C ?? "",
              D: closedTemplate.answers[0]?.D ?? "",
            },
          },
        },
      });
      createdClosed++;
    }

    // ========== OPEN ==========
    const existingOpen = await prisma.openTasks.findFirst({
      where: {
        subSectionId: sub.id,
        name: openTemplate.name,
      },
    });

    if (!existingOpen) {
      await prisma.openTasks.create({
        data: {
          name: openTemplate.name,
          content: openTemplate.content,
          rubric: openTemplate.rubric,
          referenceAnswer: openTemplate.referenceAnswer,
          maxPoints: openTemplate.maxPoints,
          subSectionId: sub.id,
        },
      });
      createdOpen++;
    }
  }

  console.log(`✅ Gotowe!`);
  console.log(`Dodano zadań zamkniętych: ${createdClosed}`);
  console.log(`Dodano zadań otwartych: ${createdOpen}`);
}

main()
  .catch((e) => {
    console.error("SEED ERROR:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
