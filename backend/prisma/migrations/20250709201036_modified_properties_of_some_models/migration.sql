-- AlterTable
ALTER TABLE "Symptoms" ADD COLUMN     "diagnosisId" INTEGER,
ADD COLUMN     "symptoms" TEXT[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "height" INTEGER,
ADD COLUMN     "weight" INTEGER;

-- AddForeignKey
ALTER TABLE "Symptoms" ADD CONSTRAINT "Symptoms_diagnosisId_fkey" FOREIGN KEY ("diagnosisId") REFERENCES "MedicalHistory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
