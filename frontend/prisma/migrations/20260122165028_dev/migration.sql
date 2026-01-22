-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clerkId" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Video" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "videoId" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "userName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    CONSTRAINT "Question_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Question_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Answer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Alltasks" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "alltasksId" TEXT NOT NULL,
    CONSTRAINT "Section_alltasksId_fkey" FOREIGN KEY ("alltasksId") REFERENCES "Alltasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SubSection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,
    "mustBeShuffle" BOOLEAN NOT NULL,
    "closedTasksToShuffle" INTEGER,
    "openTasksToShuffle" INTEGER,
    CONSTRAINT "SubSection_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OpenTasks" (
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

-- CreateTable
CREATE TABLE "ClosedTasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 1,
    "subSectionId" TEXT NOT NULL,
    CONSTRAINT "ClosedTasks_subSectionId_fkey" FOREIGN KEY ("subSectionId") REFERENCES "SubSection" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    "C" TEXT NOT NULL,
    "D" TEXT NOT NULL,
    "closedTaskId" TEXT NOT NULL,
    CONSTRAINT "Answers_closedTaskId_fkey" FOREIGN KEY ("closedTaskId") REFERENCES "ClosedTasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Matura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "UserMatura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "maturaId" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "earnedPoints" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserMatura_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserMatura_maturaId_fkey" FOREIGN KEY ("maturaId") REFERENCES "Matura" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

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
    "awardedPoints" INTEGER,
    "feedback" TEXT,
    "gradingJson" TEXT,
    "gradedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserOpenAnswer_userMaturaId_fkey" FOREIGN KEY ("userMaturaId") REFERENCES "UserMatura" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserOpenAnswer_openTaskId_fkey" FOREIGN KEY ("openTaskId") REFERENCES "OpenTasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

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

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "OpenTasks_subSectionId_idx" ON "OpenTasks"("subSectionId");

-- CreateIndex
CREATE UNIQUE INDEX "UserMatura_userId_maturaId_key" ON "UserMatura"("userId", "maturaId");

-- CreateIndex
CREATE INDEX "UserClosedAnswer_closedTaskId_idx" ON "UserClosedAnswer"("closedTaskId");

-- CreateIndex
CREATE UNIQUE INDEX "UserClosedAnswer_userMaturaId_closedTaskId_key" ON "UserClosedAnswer"("userMaturaId", "closedTaskId");

-- CreateIndex
CREATE INDEX "UserOpenAnswer_openTaskId_idx" ON "UserOpenAnswer"("openTaskId");

-- CreateIndex
CREATE INDEX "UserOpenAnswer_userMaturaId_idx" ON "UserOpenAnswer"("userMaturaId");

-- CreateIndex
CREATE UNIQUE INDEX "UserOpenAnswer_userMaturaId_openTaskId_key" ON "UserOpenAnswer"("userMaturaId", "openTaskId");

-- CreateIndex
CREATE UNIQUE INDEX "_ClosedTasksToMatura_AB_unique" ON "_ClosedTasksToMatura"("A", "B");

-- CreateIndex
CREATE INDEX "_ClosedTasksToMatura_B_index" ON "_ClosedTasksToMatura"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MaturaToOpenTasks_AB_unique" ON "_MaturaToOpenTasks"("A", "B");

-- CreateIndex
CREATE INDEX "_MaturaToOpenTasks_B_index" ON "_MaturaToOpenTasks"("B");
