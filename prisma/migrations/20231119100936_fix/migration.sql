/*
  Warnings:

  - Added the required column `name` to the `Sneaker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sneaker" ADD COLUMN     "name" TEXT NOT NULL;
