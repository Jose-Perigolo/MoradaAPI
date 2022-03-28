-- CreateTable
CREATE TABLE "imoveis" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "previsaoInicio" TIMESTAMP(3),
    "previsaoFim" TIMESTAMP(3),
    "status" TEXT,
    "desconto" BOOLEAN NOT NULL DEFAULT false,
    "itbi" BOOLEAN NOT NULL DEFAULT false,
    "registro" BOOLEAN NOT NULL DEFAULT false,
    "valor" DOUBLE PRECISION NOT NULL,
    "condomino" DOUBLE PRECISION NOT NULL,
    "qtdBanheiros" INTEGER,
    "area" INTEGER,
    "qtdQuartos" INTEGER,

    CONSTRAINT "imoveis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "imoveis_name_key" ON "imoveis"("name");
