import { IImovel, ISheet } from "../interfaces/imovel.interfaces";
import xlsx from 'xlsx';
import moment from "moment";


export default function sheetToDb(filename: string | undefined): IImovel[] {

    if (!filename) {
        throw new Error("Cant read File")
    }

    const wb = xlsx.readFile("./tmp/" + filename, { cellDates: true })
    const ws = wb.Sheets['imoveis']

    const sheets = <ISheet[]>xlsx.utils.sheet_to_json(ws)

    const imoveis = sheets.map(sheet => {

        const imovel = {
            name: sheet.Nome,
            previsaoInicio: moment(sheet.PrevisaoInicio, "DD/MM/YYYY").toDate(),
            previsaoFim: moment(sheet.PrevisaoFim, "DD/MM/YYYY").toDate(),
            status: sheet.Status,
            desconto: (sheet.Desconto === 'true'),
            itbi: (sheet.ITBI === 'true'),
            registro: (sheet.Registro === 'true'),
            valor: Number(sheet.Valor),
            condominio: Number(sheet.Condominio),
            qtdBanheiros: Number(sheet.QtdeBanheiros),
            area: Number(sheet.Area),
            qtdQuartos: Number(sheet.Quartos),
            cep: sheet.CEP,
            tipoLogradouro: sheet.TipoLogradouro,
            logradouro: sheet.NomeLogradouro,
            numero: Number(sheet.Numero),
            bairro: sheet.Bairro,
            cidade: sheet.Cidade
        }

        return imovel

    })

    return imoveis

}

