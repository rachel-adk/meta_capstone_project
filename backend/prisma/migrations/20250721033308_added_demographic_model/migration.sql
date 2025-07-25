-- CreateTable
CREATE TABLE "DemographicsToDiseases" (
    "condition" TEXT NOT NULL,
    "ageGroup" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "bmiCategory" TEXT NOT NULL,
    "prevalence" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DemographicsToDiseases_pkey" PRIMARY KEY ("condition","ageGroup","gender","bmiCategory")
);
