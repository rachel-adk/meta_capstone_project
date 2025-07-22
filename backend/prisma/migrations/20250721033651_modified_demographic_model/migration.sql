/*
  Warnings:

  - The primary key for the `DemographicsToDiseases` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ageGroup` on the `DemographicsToDiseases` table. All the data in the column will be lost.
  - You are about to drop the column `bmiCategory` on the `DemographicsToDiseases` table. All the data in the column will be lost.
  - Added the required column `agegroup` to the `DemographicsToDiseases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bmicategory` to the `DemographicsToDiseases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DemographicsToDiseases" DROP CONSTRAINT "DemographicsToDiseases_pkey",
DROP COLUMN "ageGroup",
DROP COLUMN "bmiCategory",
ADD COLUMN     "agegroup" TEXT NOT NULL,
ADD COLUMN     "bmicategory" TEXT NOT NULL,
ADD CONSTRAINT "DemographicsToDiseases_pkey" PRIMARY KEY ("condition", "agegroup", "gender", "bmicategory");
