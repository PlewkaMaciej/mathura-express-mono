/*
  Warnings:

  - A unique constraint covering the columns `[userId,maturaId]` on the table `UserMatura` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserMatura_userId_maturaId_key" ON "UserMatura"("userId", "maturaId");
