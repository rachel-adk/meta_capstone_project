-- CreateTable
CREATE TABLE "Precautions" (
    "id" SERIAL NOT NULL,
    "condition" TEXT NOT NULL,
    "precautions" TEXT[],

    CONSTRAINT "Precautions_pkey" PRIMARY KEY ("id")
);
