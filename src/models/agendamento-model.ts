export interface Agendamento {
  id: number
  dataRequisicao: string
  dataInicio: string
  dataFimEstimada: string
  dataFinalizacao: string
  duracao: string
  valorTotal: number
  statusAtual: string
  observacoes: string
  fkServicos: Array<number>
  fkCliente: number
  fkFuncionario: number
  fkVeiculo: number
  fkPacoteServicos: number
}
