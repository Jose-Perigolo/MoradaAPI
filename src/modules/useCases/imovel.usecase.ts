import prisma from '../../database/prisma.client';
import { IImovelImport } from '../interfaces/imovel.interfaces';
import fs from 'fs';
import path from 'path';

export class ImportImovelUseCase {
    async execute({ imoveis }: IImovelImport) {
        
        const registerImoveis = Promise.all(
            imoveis.map(async imovel => {
                const response = await prisma.imovel.create({
                    data: {
                        name: imovel.name,
                        previsaoInicio: imovel.previsaoInicio,
                        previsaoFim: imovel.previsaoFim,
                        status: imovel.status,
                        desconto: imovel.desconto,
                        itbi: imovel.itbi,
                        registro: imovel.registro,
                        condominio: imovel.condominio,
                        tipoLogradouro: imovel.tipoLogradouro,
                        logradouro: imovel.logradouro,
                        cep: imovel.cep,
                        numero: imovel.numero,
                        bairro: imovel.bairro,
                        cidade: imovel.cidade,
                        qtdBanheiros: imovel.qtdBanheiros,
                        area: imovel.area,
                        qtdQuartos: imovel.qtdQuartos,
                        valor: imovel.valor,
                    }
                })

                return response
            })
        )

        fs.readdir('./tmp', (err, files) => {
            if (err) throw err;
          
            for (const file of files) {
              fs.unlink(path.join('./tmp', file), err => {
                if (err) throw err;
              });
            }
        });

        return registerImoveis
    }

}

export class FindImovelByCityUseCase {
    async execute(city: string) {

        const imovel = await prisma.imovel.findMany({
            where: {
                cidade: {
                    mode: "insensitive",
                    equals: city,
                }
            }
        })

        if (!imovel) {
            throw new Error("")
        }

        return imovel

    }
}

export class FindImovelByDateOfTheConclusionUseCase {
    async execute(imovelName: string) {
        // select * from imoveis where name = imovel
        const imovel = await prisma.imovel.findFirst({
            where: {
                name: {
                    equals: imovelName,
                    mode: "insensitive"
                }
            }
        })

        if (!imovel) {
            throw new Error("Property not found")
        }

        if (!imovel.previsaoFim) {
            throw new Error("Property without conclusion date")
        }

        if (imovel.status === "pronto") {
            return "Imovel construido"
        }

        const timeDifference = new Date(imovel.previsaoFim).getTime() - new Date().getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);

        if (daysDifference <= 365)
            return "Até 12 Meses"
        if (daysDifference > 365 && daysDifference <= 730)
            return "Até 24 Meses"
        if (daysDifference > 730 && daysDifference <= 1095)
            return "Até 36 Meses"
        if (daysDifference > 1095)
            return "Mais de 36 Meses"

    }
} 