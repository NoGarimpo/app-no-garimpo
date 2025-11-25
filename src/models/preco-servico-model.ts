export interface PrecoServico {
  id?: number
  descricao: string
  valor: number
  ativo: boolean
  fkServico?: number
  fkTipoVeiculo?: number
}
