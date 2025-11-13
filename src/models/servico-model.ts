export interface Servico {
  id: number
  nome: string
  descricao: string
  ativo: boolean
  fkCategoriaServico: number
}
