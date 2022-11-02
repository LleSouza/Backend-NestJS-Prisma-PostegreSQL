/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `cadastros` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "cadastros_senha_key";

-- CreateIndex
CREATE UNIQUE INDEX "cadastros_email_key" ON "cadastros"("email");
