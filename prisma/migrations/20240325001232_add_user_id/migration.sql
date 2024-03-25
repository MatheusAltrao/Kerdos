/*
  Warnings:

  - The required column `userId` was added to the `Finances` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Finances" ADD COLUMN     "userId" TEXT NOT NULL;
