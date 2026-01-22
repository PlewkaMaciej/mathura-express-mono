/*
  Warnings:

  - You are about to drop the column `status` on the `Matura` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Matura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Matura" ("createdAt", "id", "name") SELECT "createdAt", "id", "name" FROM "Matura";
DROP TABLE "Matura";
ALTER TABLE "new_Matura" RENAME TO "Matura";
CREATE TABLE "new_UserMatura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "maturaId" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "earnedPoints" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserMatura_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserMatura_maturaId_fkey" FOREIGN KEY ("maturaId") REFERENCES "Matura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserMatura" ("createdAt", "earnedPoints", "id", "maturaId", "userId") SELECT "createdAt", "earnedPoints", "id", "maturaId", "userId" FROM "UserMatura";
DROP TABLE "UserMatura";
ALTER TABLE "new_UserMatura" RENAME TO "UserMatura";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
