import { Request, Response } from 'express';
import { ImportImovelUseCase, FindImovelByCityUseCase, FindImovelByDateOfTheConclusionUseCase } from '../useCases/imovel.usecase';
import sheetToDb from '../functions/sheetToDb'

export class ImportImovelController {
    async handle(req: Request, res: Response) {

        const importImovelUseCase = new ImportImovelUseCase();
        const imoveis = sheetToDb(req.file?.filename)
        const result = await importImovelUseCase.execute({ imoveis })

        return res.status(201).json(result)
    }
}

export class FindImovelController {
    async handle(req: Request, res: Response) {
        const city = <string>req.query.city
        const name = <string>req.query.name
        const datefim = <string>req.query.datefim

        if (city) {
            const findImovelByCityUseCase = new FindImovelByCityUseCase();
            const result = await findImovelByCityUseCase.execute(city)
            return res.status(200).json(result)
        }

        if (name && datefim) {
            const findImovelByDateOfTheConclusionUseCase = new FindImovelByDateOfTheConclusionUseCase();
            const result = await findImovelByDateOfTheConclusionUseCase.execute(name)

            return res.status(200).json(result)
        }

        throw new Error('Invalid search query parameters')

    }
}