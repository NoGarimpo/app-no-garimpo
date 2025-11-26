export interface PacoteServicos {
  id?: number
  nome: string
  duracaoTotalMinutos: string
  valorTotal: number
  fkServicos: Array<number>
}
