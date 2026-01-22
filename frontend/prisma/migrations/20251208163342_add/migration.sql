/*
  Warnings:

  - You are about to drop the column `maturaId` on the `ClosedTasks` table. All the data in the column will be lost.
  - You are about to drop the column `maturaId` on the `OpenTasks` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_ClosedTasksToMatura" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ClosedTasksToMatura_A_fkey" FOREIGN KEY ("A") REFERENCES "ClosedTasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ClosedTasksToMatura_B_fkey" FOREIGN KEY ("B") REFERENCES "Matura" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_MaturaToOpenTasks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_MaturaToOpenTasks_A_fkey" FOREIGN KEY ("A") REFERENCES "Matura" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MaturaToOpenTasks_B_fkey" FOREIGN KEY ("B") REFERENCES "OpenTasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ClosedTasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "subSectionId" TEXT NOT NULL,
    CONSTRAINT "ClosedTasks_subSectionId_fkey" FOREIGN KEY ("subSectionId") REFERENCES "SubSection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ClosedTasks" ("content", "correctAnswer", "id", "name", "subSectionId") SELECT "content", "correctAnswer", "id", "name", "subSectionId" FROM "ClosedTasks";
DROP TABLE "ClosedTasks";
ALTER TABLE "new_ClosedTasks" RENAME TO "ClosedTasks";
CREATE TABLE "new_OpenTasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "answer" INTEGER NOT NULL,
    "subSectionId" TEXT NOT NULL,
    "openTaskId" TEXT,
    CONSTRAINT "OpenTasks_subSectionId_fkey" FOREIGN KEY ("subSectionId") REFERENCES "SubSection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OpenTasks" ("answer", "content", "id", "name", "openTaskId", "subSectionId") SELECT "answer", "content", "id", "name", "openTaskId", "subSectionId" FROM "OpenTasks";
DROP TABLE "OpenTasks";
ALTER TABLE "new_OpenTasks" RENAME TO "OpenTasks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_ClosedTasksToMatura_AB_unique" ON "_ClosedTasksToMatura"("A", "B");

-- CreateIndex
CREATE INDEX "_ClosedTasksToMatura_B_index" ON "_ClosedTasksToMatura"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MaturaToOpenTasks_AB_unique" ON "_MaturaToOpenTasks"("A", "B");

-- CreateIndex
CREATE INDEX "_MaturaToOpenTasks_B_index" ON "_MaturaToOpenTasks"("B");
