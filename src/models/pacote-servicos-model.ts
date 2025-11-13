export interface PacoteServicos {
  id: number
  nome: string
  duracao: string
  valorTotal: number
  fkServicos: Array<number>
}
