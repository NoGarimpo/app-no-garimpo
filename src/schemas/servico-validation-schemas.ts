import * as yup from 'yup'

export const servicoValidationSchema = yup.object({
  id: yup.number().integer(),
  nome: yup.string(),
  descricao: yup.string(),
  ativo: yup.boolean(),
  fkCategoriaServico: yup.number().integer('Deve ser um número inteiro!'),
})
