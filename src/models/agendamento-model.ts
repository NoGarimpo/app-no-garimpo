export interface AgendamentoPayload {
  dataRequisicao: string
  observacoes: string
  fkCliente?: number
  fkVeiculo?: number
  servicos?: Array<number>
}

export interface Agendamento {
  id?: number
  dataRequisicao: string
  dataInicio: string
  dataFimEstimada: string
  dataFinalizacao: string
  valorTotal: number
  statusAtual: string
  observacoes: string
  fkCliente?: number
  fkFuncionario?: number
  fkVeiculo?: number
  fkPacoteServicos?: number
}
