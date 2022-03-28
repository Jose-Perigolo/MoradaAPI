export interface ISheet {
    Nome: string;
    PrevisaoInicio: string;
    PrevisaoFim: string;
    Status: string;
    Desconto: string;
    ITBI: string;
    Registro: string;
    Condominio: string;
    TipoLogradouro: string;
    NomeLogradouro: string;
    CEP: string;
    Numero: string;
    Bairro: string
    Cidade: string;
    QtdeBanheiros: string;
    Area: string;
    Quartos: string;
    Valor: string;
}

export interface IImovel {
    name: string;
    previsaoInicio: Date;
    previsaoFim: Date;
    status: string;
    desconto: boolean;
    itbi: boolean;
    registro: boolean;
    valor: number;
    condominio: number;
    qtdBanheiros?: number;
    area: number;
    qtdQuartos: number;
    cep: string
    tipoLogradouro: string;
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
}

export interface IImovelImport {
    imoveis: IImovel[];
}