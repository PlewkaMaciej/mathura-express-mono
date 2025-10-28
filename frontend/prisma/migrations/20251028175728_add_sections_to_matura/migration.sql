/*
  Warnings:

  - You are about to drop the `Section` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Section";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Task";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Matura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'Matura',
    "sections" JSONB
);
INSERT INTO "new_Matura" ("id", "name") SELECT "id", "name" FROM "Matura";
DROP TABLE "Matura";
ALTER TABLE "new_Matura" RENAME TO "Matura";
CREATE TABLE "new_UserMatura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "maturaId" TEXT NOT NULL,
    "snapshot" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "score" INTEGER NOT NULL DEFAULT 0,
    "maxPoints" INTEGER NOT NULL DEFAULT 0,
    "answered" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" DATETIME,
    CONSTRAINT "UserMatura_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserMatura_maturaId_fkey" FOREIGN KEY ("maturaId") REFERENCES "Matura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserMatura" ("createdAt", "finishedAt", "id", "maturaId", "snapshot", "status", "userId") SELECT "createdAt", "finishedAt", "id", "maturaId", "snapshot", "status", "userId" FROM "UserMatura";
DROP TABLE "UserMatura";
ALTER TABLE "new_UserMatura" RENAME TO "UserMatura";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
