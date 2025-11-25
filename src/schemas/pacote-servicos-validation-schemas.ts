import * as yup from 'yup'

export const pacoteServicosValidationSchema = yup.object({
  id: yup.number().integer('Deve ser um número inteiro!'),
  nome: yup.string(),
  duracao: yup.string(),
  valorTotal: yup.number(),
  fkServicos: yup.array(yup.number().integer()),
})
