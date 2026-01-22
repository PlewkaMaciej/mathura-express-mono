-- CreateTable
CREATE TABLE "UserClosedAnswer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userMaturaId" TEXT NOT NULL,
    "closedTaskId" TEXT NOT NULL,
    "answer" TEXT,
    "isCorrect" BOOLEAN,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserClosedAnswer_userMaturaId_fkey" FOREIGN KEY ("userMaturaId") REFERENCES "UserMatura" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserClosedAnswer_closedTaskId_fkey" FOREIGN KEY ("closedTaskId") REFERENCES "ClosedTasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserOpenAnswer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userMaturaId" TEXT NOT NULL,
    "openTaskId" TEXT NOT NULL,
    "answer" TEXT,
    "isCorrect" BOOLEAN,
    "awardedPoints" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserOpenAnswer_userMaturaId_fkey" FOREIGN KEY ("userMaturaId") REFERENCES "UserMatura" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserOpenAnswer_openTaskId_fkey" FOREIGN KEY ("openTaskId") REFERENCES "OpenTasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ClosedTasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 1,
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
    "answer" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 2,
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
CREATE INDEX "UserClosedAnswer_closedTaskId_idx" ON "UserClosedAnswer"("closedTaskId");

-- CreateIndex
CREATE UNIQUE INDEX "UserClosedAnswer_userMaturaId_closedTaskId_key" ON "UserClosedAnswer"("userMaturaId", "closedTaskId");

-- CreateIndex
CREATE INDEX "UserOpenAnswer_openTaskId_idx" ON "UserOpenAnswer"("openTaskId");

-- CreateIndex
CREATE UNIQUE INDEX "UserOpenAnswer_userMaturaId_openTaskId_key" ON "UserOpenAnswer"("userMaturaId", "openTaskId");
