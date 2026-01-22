-- CreateTable
CREATE TABLE "Matura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "UserMatura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "maturaId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserMatura_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserMatura_maturaId_fkey" FOREIGN KEY ("maturaId") REFERENCES "Matura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
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
    "maturaId" TEXT,
    CONSTRAINT "ClosedTasks_maturaId_fkey" FOREIGN KEY ("maturaId") REFERENCES "Matura" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
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
    "maturaId" TEXT,
    "openTaskId" TEXT,
    CONSTRAINT "OpenTasks_maturaId_fkey" FOREIGN KEY ("maturaId") REFERENCES "Matura" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "OpenTasks_subSectionId_fkey" FOREIGN KEY ("subSectionId") REFERENCES "SubSection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OpenTasks" ("answer", "content", "id", "name", "openTaskId", "subSectionId") SELECT "answer", "content", "id", "name", "openTaskId", "subSectionId" FROM "OpenTasks";
DROP TABLE "OpenTasks";
ALTER TABLE "new_OpenTasks" RENAME TO "OpenTasks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
