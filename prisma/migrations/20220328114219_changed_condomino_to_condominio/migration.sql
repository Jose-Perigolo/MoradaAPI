/*
  Warnings:

  - You are about to drop the column `condomino` on the `imoveis` table. All the data in the column will be lost.
  - Added the required column `condominio` to the `imoveis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "imoveis" DROP COLUMN "condomino",
ADD COLUMN     "condominio" DOUBLE PRECISION NOT NULL;
