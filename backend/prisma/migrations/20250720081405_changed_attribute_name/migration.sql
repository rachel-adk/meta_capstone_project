/*
  Warnings:

  - You are about to drop the column `symptomWeights` on the `Conditions` table. All the data in the column will be lost.
  - Added the required column `symptomweights` to the `Conditions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Conditions" DROP COLUMN "symptomWeights",
ADD COLUMN     "symptomweights" JSONB NOT NULL;
