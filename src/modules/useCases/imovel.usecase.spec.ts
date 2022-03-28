import { prismaMock } from "../../database/prisma.singleton";
import { FindImovelByCityUseCase, ImportImovelUseCase } from "./imovel.usecase"

describe("Imoveis Morada API Tests", () => {

    it("should be able to import Excel", async () => {
        const imoveis = [{
            id: 1,
            name: 'Vila Rica',
            previsaoInicio: new Date('05/05/2025'),
            previsaoFim: new Date('05/05/2025'),
            status: 'string',
            desconto: false,
            itbi: false,
            registro: false,
            condominio: 50,
            tipoLogradouro: 'string',
            logradouro: 'string',
            cep: 'string',
            numero: 50,
            bairro: 'string',
            cidade: 'Contagem',
            qtdBanheiros: 5,
            area: 5,
            qtdQuartos: 5,
            valor: 5
        }
    ]

        imoveis.map(imovel => {
            prismaMock.imovel.create.mockResolvedValue(imovel)
        })

        const importImovelUseCase = new ImportImovelUseCase()

        await expect(importImovelUseCase.execute({ imoveis })).resolves.toEqual(imoveis)
        
    })

    it("should be able to find all propertys in city", async () => {
        const imoveis = [{
            id: 1,
            name: 'Vila Rica',
            previsaoInicio: new Date('05/05/2025'),
            previsaoFim: new Date('05/05/2025'),
            status: 'string',
            desconto: false,
            itbi: false,
            registro: false,
            condominio: 50,
            tipoLogradouro: 'string',
            logradouro: 'string',
            cep: 'string',
            numero: 50,
            bairro: 'string',
            cidade: 'Contagem',
            qtdBanheiros: 5,
            area: 5,
            qtdQuartos: 5,
            valor: 5
        },
        {
            id: 1,
            name: 'Vila Rica',
            previsaoInicio: new Date('05/05/2025'),
            previsaoFim: new Date('05/05/2025'),
            status: 'string',
            desconto: false,
            itbi: false,
            registro: false,
            condominio: 50,
            tipoLogradouro: 'string',
            logradouro: 'string',
            cep: 'string',
            numero: 50,
            bairro: 'string',
            cidade: 'Belo Horizonte',
            qtdBanheiros: 5,
            area: 5,
            qtdQuartos: 5,
            valor: 5
        }
    ]

        prismaMock.imovel.findMany.mockResolvedValue(imoveis)

        const findImovelByCityUseCase = new FindImovelByCityUseCase()

        await expect(findImovelByCityUseCase.execute('contagem')).resolves.toEqual(imoveis)
        
    })

})