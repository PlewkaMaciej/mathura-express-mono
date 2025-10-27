/*
  Warnings:

  - You are about to drop the column `sections` on the `Matura` table. All the data in the column will be lost.
  - Added the required column `name` to the `Matura` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "maturaId" TEXT NOT NULL,
    CONSTRAINT "Section_maturaId_fkey" FOREIGN KEY ("maturaId") REFERENCES "Matura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "options" JSONB NOT NULL,
    "correctKey" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "sectionId" TEXT,
    CONSTRAINT "Task_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Matura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Matura" ("id") SELECT "id" FROM "Matura";
DROP TABLE "Matura";
ALTER TABLE "new_Matura" RENAME TO "Matura";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
