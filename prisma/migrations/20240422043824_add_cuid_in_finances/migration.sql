/*
  Warnings:

  - The primary key for the `Finances` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Finances" DROP CONSTRAINT "Finances_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Finances_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Finances_id_seq";
