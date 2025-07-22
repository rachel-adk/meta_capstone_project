-- CreateTable
CREATE TABLE "Conditions" (
    "id" SERIAL NOT NULL,
    "condition" TEXT NOT NULL,
    "symptoms" TEXT[],
    "symptomWeights" JSONB NOT NULL,

    CONSTRAINT "Conditions_pkey" PRIMARY KEY ("id")
);
