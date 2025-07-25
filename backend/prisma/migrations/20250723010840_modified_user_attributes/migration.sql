/*
  Warnings:

  - Changed the type of `duration` on the `Symptoms` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `FamilyHistory` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Symptoms" ADD COLUMN     "reportedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "AlcoholPerWeek" INTEGER,
ADD COLUMN     "FamilyHistory" JSONB NOT NULL,
ADD COLUMN     "Smoking" TEXT,
ADD COLUMN     "sleepQuality" INTEGER,
ADD COLUMN     "stressLevel" INTEGER,
ADD COLUMN     "weeklyExercise" INTEGER;
