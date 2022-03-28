-- CreateTable
CREATE TABLE "enderecos" (
    "id" TEXT NOT NULL,
    "id_imovel" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,

    CONSTRAINT "enderecos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "enderecos" ADD CONSTRAINT "enderecos_id_imovel_fkey" FOREIGN KEY ("id_imovel") REFERENCES "imoveis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
