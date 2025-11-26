import * as yup from 'yup'

export const agendamentoValidationSchema = yup.object({
  id: yup.number().integer('Deve ser um número inteiro!'),
  dataRequisicao: yup.date(),
  dataInicio: yup.date(),
  dataFimEstimada: yup.date(),
  dataFinalizacao: yup.date(),
  duracaoTotalMinutos: yup.string(),
  valorTotal: yup.number(),
  statusAtual: yup.string(),
  observacoes: yup.string(),
  fkCliente: yup.number().integer('Deve ser um número inteiro!'),
  fkFuncionario: yup.number().integer('Deve ser um número inteiro!'),
  fkVeiculo: yup.number().integer('Deve ser um número inteiro!').required('Campo obrigatório!'),
  fkPacoteServicos: yup.number().integer('Deve ser um número inteiro!'),
})
