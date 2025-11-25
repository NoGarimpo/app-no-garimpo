export interface Servico {
  id?: number
  nome: string
  descricao: string
  duracaoMinutos: number
  ativo: boolean
  fkCategoriaServico?: number
}
