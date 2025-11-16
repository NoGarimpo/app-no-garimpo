import * as yup from "yup"

export const agendamentoValidationSchema = yup.object({
  id: yup.number().integer(),
  dataRequisicao: yup.date(),
  dataInicio: yup.date(),
  dataFimEstimada: yup.date(),
  dataFinalizacao: yup.date(),
  duracao: yup.string(),
  valorTotal: yup.number(),
  statusAtual: yup.string(),
  observacoes: yup.string(),
  fkServicos: yup.array(yup.number()),
  fkCliente: yup.number().integer("Deve ser um número inteiro!"),
  fkFuncionario: yup.number().integer("Deve ser um número inteiro!"),
  fkVeiculo: yup.number().integer("Deve ser um número inteiro!"),
  fkPacoteServicos: yup.number().integer("Deve ser um número inteiro!"),
})
