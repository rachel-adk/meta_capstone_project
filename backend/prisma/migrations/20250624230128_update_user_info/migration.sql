-- AlterTable
ALTER TABLE "User" ALTER COLUMN "medicalHistory" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "symptomLogs" DROP NOT NULL,
ALTER COLUMN "symptomLogs" SET DATA TYPE TEXT,
ALTER COLUMN "allergyLogs" DROP NOT NULL,
ALTER COLUMN "allergyLogs" SET DATA TYPE TEXT;
