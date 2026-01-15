/*
  Warnings:

  - You are about to drop the `OpenTaskStep` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserOpenStepAnswer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `answer` on the `OpenTasks` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `OpenTasks` table. All the data in the column will be lost.
  - You are about to drop the column `isCorrect` on the `UserOpenAnswer` table. All the data in the column will be lost.
  - Added the required column `rubric` to the `OpenTasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "OpenTaskStep_openTaskId_order_key";

-- DropIndex
DROP INDEX "OpenTaskStep_openTaskId_idx";

-- DropIndex
DROP INDEX "UserOpenStepAnswer_userOpenAnswerId_stepId_key";

-- DropIndex
DROP INDEX "UserOpenStepAnswer_stepId_idx";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "OpenTaskStep";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserOpenStepAnswer";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OpenTasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rubric" TEXT NOT NULL,
    "referenceAnswer" TEXT,
    "maxPoints" INTEGER NOT NULL DEFAULT 2,
    "subSectionId" TEXT NOT NULL,
    "openTaskId" TEXT,
    CONSTRAINT "OpenTasks_subSectionId_fkey" FOREIGN KEY ("subSectionId") REFERENCES "SubSection" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_OpenTasks" ("content", "id", "name", "openTaskId", "subSectionId") SELECT "content", "id", "name", "openTaskId", "subSectionId" FROM "OpenTasks";
DROP TABLE "OpenTasks";
ALTER TABLE "new_OpenTasks" RENAME TO "OpenTasks";
CREATE INDEX "OpenTasks_subSectionId_idx" ON "OpenTasks"("subSectionId");
CREATE TABLE "new_UserOpenAnswer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userMaturaId" TEXT NOT NULL,
    "openTaskId" TEXT NOT NULL,
    "answer" TEXT,
    "awardedPoints" INTEGER,
    "feedback" TEXT,
    "gradingJson" TEXT,
    "gradedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserOpenAnswer_userMaturaId_fkey" FOREIGN KEY ("userMaturaId") REFERENCES "UserMatura" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserOpenAnswer_openTaskId_fkey" FOREIGN KEY ("openTaskId") REFERENCES "OpenTasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserOpenAnswer" ("answer", "awardedPoints", "createdAt", "id", "openTaskId", "updatedAt", "userMaturaId") SELECT "answer", "awardedPoints", "createdAt", "id", "openTaskId", "updatedAt", "userMaturaId" FROM "UserOpenAnswer";
DROP TABLE "UserOpenAnswer";
ALTER TABLE "new_UserOpenAnswer" RENAME TO "UserOpenAnswer";
CREATE INDEX "UserOpenAnswer_openTaskId_idx" ON "UserOpenAnswer"("openTaskId");
CREATE INDEX "UserOpenAnswer_userMaturaId_idx" ON "UserOpenAnswer"("userMaturaId");
CREATE UNIQUE INDEX "UserOpenAnswer_userMaturaId_openTaskId_key" ON "UserOpenAnswer"("userMaturaId", "openTaskId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
