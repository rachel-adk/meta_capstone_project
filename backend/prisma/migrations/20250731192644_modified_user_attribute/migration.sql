-- DropForeignKey
ALTER TABLE "MedicalHistory" DROP CONSTRAINT "MedicalHistory_userId_fkey";

-- AlterTable
ALTER TABLE "MedicalHistory" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "MedicalHistory" ADD CONSTRAINT "MedicalHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
