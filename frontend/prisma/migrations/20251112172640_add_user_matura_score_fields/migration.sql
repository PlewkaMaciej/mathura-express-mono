-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
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
    CONSTRAINT "UserMatura_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserMatura" ("answered", "createdAt", "finishedAt", "id", "maturaId", "maxPoints", "score", "snapshot", "status", "userId") SELECT "answered", "createdAt", "finishedAt", "id", "maturaId", "maxPoints", "score", "snapshot", "status", "userId" FROM "UserMatura";
DROP TABLE "UserMatura";
ALTER TABLE "new_UserMatura" RENAME TO "UserMatura";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
