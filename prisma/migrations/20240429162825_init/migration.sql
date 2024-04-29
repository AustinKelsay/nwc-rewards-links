-- CreateEnum
CREATE TYPE "BudgetRenewal" AS ENUM ('NEVER', 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- CreateTable
CREATE TABLE "NWC" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "requestMethods" TEXT[],
    "expiresAt" TIMESTAMP(3),
    "maxAmount" INTEGER,
    "budgetRenewal" "BudgetRenewal",

    CONSTRAINT "NWC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RewardLink" (
    "id" TEXT NOT NULL,
    "nwcId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RewardLink_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RewardLink" ADD CONSTRAINT "RewardLink_nwcId_fkey" FOREIGN KEY ("nwcId") REFERENCES "NWC"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
