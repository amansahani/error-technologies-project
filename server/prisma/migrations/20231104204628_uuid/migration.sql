/*
  Warnings:

  - You are about to alter the column `id` on the `User` table. The data in that column will be cast from `BigInt` to `String`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_User" (
    "id" STRING NOT NULL,
    "email" STRING NOT NULL,
    "password" STRING NOT NULL,
    "token" STRING,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
DROP INDEX "User_email_key";
DROP INDEX "User_id_key";
INSERT INTO "_prisma_new_User" ("email","id","password","token") SELECT "email","id","password","token" FROM "User";
DROP TABLE "User" CASCADE;
ALTER TABLE "_prisma_new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
