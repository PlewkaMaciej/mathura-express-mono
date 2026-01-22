import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // 1️⃣ Upewnij się, że istnieje Alltasks (root)
  let alltasks = await prisma.alltasks.findFirst();

  if (!alltasks) {
    alltasks = await prisma.alltasks.create({
      data: {},
    });
  }

  // 2️⃣ Definicja działów i poddziałów
  const sections = [
    {
      name: "Algebra",
      subsections: [
        { name: "Równania liniowe", mustBeShuffle: false },
        { name: "Układy równań", mustBeShuffle: false },
        { name: "Nierówności", mustBeShuffle: false },
      ],
    },
    {
      name: "Funkcje",
      subsections: [
        { name: "Funkcja liniowa", mustBeShuffle: false },
        { name: "Funkcja kwadratowa", mustBeShuffle: false },
        { name: "Własności funkcji", mustBeShuffle: false },
      ],
    },
    {
      name: "Geometria",
      subsections: [
        { name: "Planimetria", mustBeShuffle: false },
        { name: "Geometria analityczna", mustBeShuffle: false },
        { name: "Bryły obrotowe", mustBeShuffle: false },
      ],
    },
  ];

  // 3️⃣ Dodawanie sekcji i podsekcji
  for (const section of sections) {
    let dbSection = await prisma.section.findFirst({
      where: {
        name: section.name,
        alltasksId: alltasks.id,
      },
    });

    if (!dbSection) {
      dbSection = await prisma.section.create({
        data: {
          name: section.name,
          alltasksId: alltasks.id,
        },
      });
    }

    for (const sub of section.subsections) {
      const existingSub = await prisma.subSection.findFirst({
        where: {
          name: sub.name,
          sectionId: dbSection.id,
        },
      });

      if (!existingSub) {
        await prisma.subSection.create({
          data: {
            name: sub.name,
            sectionId: dbSection.id,
            mustBeShuffle: sub.mustBeShuffle,
          },
        });
      }
    }
  }

  console.log("✅ Sekcje i podsekcje dodane (bez migracji)");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
