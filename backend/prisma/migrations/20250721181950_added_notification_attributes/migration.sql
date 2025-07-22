-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lastNotifiedAt" TIMESTAMP(3),
ADD COLUMN     "preferredNotification" TEXT NOT NULL DEFAULT 'email',
ADD COLUMN     "reminderFrequency" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "snoozeUntil" TIMESTAMP(3);
