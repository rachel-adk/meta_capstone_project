/*
  Warnings:

  - You are about to drop the column `allergyLogs` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `medicalHistory` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `symptomLogs` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "allergyLogs",
DROP COLUMN "medicalHistory",
DROP COLUMN "symptomLogs";

-- CreateTable
CREATE TABLE "MedicalHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "condition" TEXT NOT NULL,
    "diagnosisDate" TIMESTAMP(3) NOT NULL,
    "medications" TEXT,
    "notes" TEXT,

    CONSTRAINT "MedicalHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Allergies" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "trigger" TEXT NOT NULL,
    "severity" INTEGER NOT NULL,
    "reaction" TEXT NOT NULL,
    "notes" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Allergies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Symptoms" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "severity" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "notes" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Symptoms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "phone" TEXT,
    "specializations" TEXT[],

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MedicalHistory" ADD CONSTRAINT "MedicalHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allergies" ADD CONSTRAINT "Allergies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Symptoms" ADD CONSTRAINT "Symptoms_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
