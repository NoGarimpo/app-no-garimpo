import * as yup from 'yup'

export const pacoteServicosValidationSchema = yup.object({
  id: yup.number().integer(),
  nome: yup.string(),
  duracao: yup.string(),
  valorTotal: yup.number(),
  fkServicos: yup.array(yup.number().integer()),
})
