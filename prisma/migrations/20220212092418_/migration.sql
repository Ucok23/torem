/*
  Warnings:

  - You are about to drop the `torem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "torem";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Torem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "language" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "sentences" TEXT NOT NULL
);
