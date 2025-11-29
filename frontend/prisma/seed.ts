import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

async function main() {
  await prisma.matura.create({
    data: {
      sections: [
        // ZADANIE 1 — 3 warianty
        {
          name: "Zadanie 1",
          tasks: [
            {
              content: "2 + 2 = ?",
              options: { A: "3", B: "4", C: "5", D: "6" },
              correctKey: "B",
              points: 1,
            },
            {
              content: "7 − 3 = ?",
              options: { A: "5", B: "4", C: "3", D: "2" },
              correctKey: "B",
              points: 1,
            },
            {
              content: "3 × 5 = ?",
              options: { A: "12", B: "13", C: "14", D: "15" },
              correctKey: "D",
              points: 1,
            },
          ],
        },
  
        // ZADANIE 2 — 3 warianty
        {
          name: "Zadanie 2",
          tasks: [
            {
              content: "Pole kwadratu o boku 3 wynosi:",
              options: { A: "6", B: "9", C: "12", D: "18" },
              correctKey: "B",
              points: 1,
            },
            {
              content: "Pole trójkąta o podstawie 6 i wysokości 4 wynosi:",
              options: { A: "24", B: "18", C: "12", D: "10" },
              correctKey: "C",
              points: 1,
            },
            {
              content: "Pole prostokąta o bokach 4 i 5 wynosi:",
              options: { A: "9", B: "16", C: "18", D: "20" },
              correctKey: "D",
              points: 1,
            },
          ],
        },

        // ZADANIE 3 — 3 warianty
        {
          name: "Zadanie 3",
          tasks: [
            {
              content: "25% z 80 to:",
              options: { A: "15", B: "20", C: "25", D: "30" },
              correctKey: "B",
              points: 1,
            },
            {
              content: "10% z 250 to:",
              options: { A: "15", B: "20", C: "25", D: "30" },
              correctKey: "C",
              points: 1,
            },
            {
              content: "15% z 200 to:",
              options: { A: "25", B: "30", C: "35", D: "40" },
              correctKey: "B",
              points: 1,
            },
          ],
        },

        // ZADANIE 4 — 3 warianty
        {
          name: "Zadanie 4",
          tasks: [
            {
              content: "Rozwiąż: x + 5 = 12. x = ?",
              options: { A: "5", B: "6", C: "7", D: "8" },
              correctKey: "C",
              points: 1,
            },
            {
              content: "Rozwiąż: 2x = 18. x = ?",
              options: { A: "7", B: "8", C: "9", D: "10" },
              correctKey: "C",
              points: 1,
            },
            {
              content: "Rozwiąż: 3x − 6 = 0. x = ?",
              options: { A: "1", B: "2", C: "3", D: "6" },
              correctKey: "B",
              points: 1,
            },
          ],
        },

        // ZADANIE 5 — 3 warianty
        {
          name: "Zadanie 5",
          tasks: [
            {
              content: "2^3 = ?",
              options: { A: "6", B: "7", C: "8", D: "9" },
              correctKey: "C",
              points: 1,
            },
            {
              content: "√64 = ?",
              options: { A: "6", B: "7", C: "8", D: "9" },
              correctKey: "C",
              points: 1,
            },
            {
              content: "log₁₀(100) = ?",
              options: { A: "1", B: "2", C: "10", D: "100" },
              correctKey: "B",
              points: 1,
            },
          ],
        },
      ],
    },
  });

  console.log("Seed OK");
}

main().finally(() => prisma.$disconnect());
