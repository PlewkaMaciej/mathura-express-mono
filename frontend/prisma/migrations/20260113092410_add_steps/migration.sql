-- CreateTable
CREATE TABLE "OpenTaskStep" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "openTaskId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "prompt" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 1,
    "rubric" TEXT,
    "correct" TEXT,
    CONSTRAINT "OpenTaskStep_openTaskId_fkey" FOREIGN KEY ("openTaskId") REFERENCES "OpenTasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserOpenStepAnswer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userOpenAnswerId" TEXT NOT NULL,
    "stepId" TEXT NOT NULL,
    "answer" TEXT,
    "isCorrect" BOOLEAN,
    "awardedPoints" INTEGER,
    "feedback" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserOpenStepAnswer_userOpenAnswerId_fkey" FOREIGN KEY ("userOpenAnswerId") REFERENCES "UserOpenAnswer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserOpenStepAnswer_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "OpenTaskStep" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Answers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    "C" TEXT NOT NULL,
    "D" TEXT NOT NULL,
    "closedTaskId" TEXT NOT NULL,
    CONSTRAINT "Answers_closedTaskId_fkey" FOREIGN KEY ("closedTaskId") REFERENCES "ClosedTasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Answers" ("A", "B", "C", "D", "closedTaskId", "id") SELECT "A", "B", "C", "D", "closedTaskId", "id" FROM "Answers";
DROP TABLE "Answers";
ALTER TABLE "new_Answers" RENAME TO "Answers";
CREATE TABLE "new_ClosedTasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 1,
    "subSectionId" TEXT NOT NULL,
    CONSTRAINT "ClosedTasks_subSectionId_fkey" FOREIGN KEY ("subSectionId") REFERENCES "SubSection" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ClosedTasks" ("content", "correctAnswer", "id", "name", "points", "subSectionId") SELECT "content", "correctAnswer", "id", "name", "points", "subSectionId" FROM "ClosedTasks";
DROP TABLE "ClosedTasks";
ALTER TABLE "new_ClosedTasks" RENAME TO "ClosedTasks";
CREATE TABLE "new_OpenTasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 2,
    "subSectionId" TEXT NOT NULL,
    "openTaskId" TEXT,
    CONSTRAINT "OpenTasks_subSectionId_fkey" FOREIGN KEY ("subSectionId") REFERENCES "SubSection" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_OpenTasks" ("answer", "content", "id", "name", "openTaskId", "points", "subSectionId") SELECT "answer", "content", "id", "name", "openTaskId", "points", "subSectionId" FROM "OpenTasks";
DROP TABLE "OpenTasks";
ALTER TABLE "new_OpenTasks" RENAME TO "OpenTasks";
CREATE TABLE "new_Section" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "alltasksId" TEXT NOT NULL,
    CONSTRAINT "Section_alltasksId_fkey" FOREIGN KEY ("alltasksId") REFERENCES "Alltasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Section" ("alltasksId", "id", "name") SELECT "alltasksId", "id", "name" FROM "Section";
DROP TABLE "Section";
ALTER TABLE "new_Section" RENAME TO "Section";
CREATE TABLE "new_SubSection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,
    "mustBeShuffle" BOOLEAN NOT NULL,
    "closedTasksToShuffle" INTEGER,
    "openTasksToShuffle" INTEGER,
    CONSTRAINT "SubSection_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SubSection" ("closedTasksToShuffle", "id", "mustBeShuffle", "name", "openTasksToShuffle", "sectionId") SELECT "closedTasksToShuffle", "id", "mustBeShuffle", "name", "openTasksToShuffle", "sectionId" FROM "SubSection";
DROP TABLE "SubSection";
ALTER TABLE "new_SubSection" RENAME TO "SubSection";
CREATE TABLE "new_UserMatura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "maturaId" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "earnedPoints" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserMatura_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserMatura_maturaId_fkey" FOREIGN KEY ("maturaId") REFERENCES "Matura" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserMatura" ("createdAt", "earnedPoints", "id", "maturaId", "status", "userId") SELECT "createdAt", "earnedPoints", "id", "maturaId", "status", "userId" FROM "UserMatura";
DROP TABLE "UserMatura";
ALTER TABLE "new_UserMatura" RENAME TO "UserMatura";
CREATE UNIQUE INDEX "UserMatura_userId_maturaId_key" ON "UserMatura"("userId", "maturaId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "OpenTaskStep_openTaskId_idx" ON "OpenTaskStep"("openTaskId");

-- CreateIndex
CREATE UNIQUE INDEX "OpenTaskStep_openTaskId_order_key" ON "OpenTaskStep"("openTaskId", "order");

-- CreateIndex
CREATE INDEX "UserOpenStepAnswer_stepId_idx" ON "UserOpenStepAnswer"("stepId");

-- CreateIndex
CREATE UNIQUE INDEX "UserOpenStepAnswer_userOpenAnswerId_stepId_key" ON "UserOpenStepAnswer"("userOpenAnswerId", "stepId");
