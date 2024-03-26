/*
  Warnings:

  - The primary key for the `Finances` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Finances` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Finances" DROP CONSTRAINT "Finances_id_fkey";

-- AlterTable
ALTER TABLE "Finances" DROP CONSTRAINT "Finances_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Finances_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Finances" ADD CONSTRAINT "Finances_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
