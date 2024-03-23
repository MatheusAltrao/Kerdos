-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isPlanActive" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Finances" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "bank" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "transactionType" TEXT NOT NULL,

    CONSTRAINT "Finances_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Finances" ADD CONSTRAINT "Finances_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
