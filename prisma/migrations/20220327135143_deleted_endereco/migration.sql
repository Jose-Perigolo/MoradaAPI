/*
  Warnings:

  - The primary key for the `imoveis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `imoveis` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `enderecos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bairro` to the `imoveis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `imoveis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `imoveis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logradouro` to the `imoveis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `imoveis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoLogradouro` to the `imoveis` table without a default value. This is not possible if the table is not empty.
  - Made the column `status` on table `imoveis` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "enderecos" DROP CONSTRAINT "enderecos_id_imovel_fkey";

-- AlterTable
ALTER TABLE "imoveis" DROP CONSTRAINT "imoveis_pkey",
ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "logradouro" TEXT NOT NULL,
ADD COLUMN     "numero" INTEGER NOT NULL,
ADD COLUMN     "tipoLogradouro" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ADD CONSTRAINT "imoveis_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "enderecos";
