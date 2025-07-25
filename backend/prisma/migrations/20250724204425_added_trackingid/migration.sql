/*
  Warnings:

  - You are about to drop the column `lastUpdated` on the `Hospital` table. All the data in the column will be lost.
  - You are about to drop the column `metadata` on the `Hospital` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hospital" DROP COLUMN "lastUpdated",
DROP COLUMN "metadata";

-- AlterTable
ALTER TABLE "NotificationLog" ADD COLUMN     "trackingId" TEXT;
