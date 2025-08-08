/*
  Warnings:

  - Added the required column `author` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_type` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "description_type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT NOT NULL;
