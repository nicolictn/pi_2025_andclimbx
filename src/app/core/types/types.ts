export interface Produto {
    id?: number;
    nome: string,
    nSerie: string,
    categoria: string,
    tamanho: string,
    fabricante: string,
    quantidade: number,
    preco: number,
    // imagemUrl: string,
    descricao: string
}

export interface ProdutosExcluidos{
     id?: number;
    nome: string,
    nSerie: string,
    categoria: string,
    tamanho: string,
    fabricante: string,
    quantidade: number,
    preco: number,
    // imagemUrl: string,
    descricao: string
}