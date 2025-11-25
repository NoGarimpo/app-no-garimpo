import * as yup from 'yup'

export const servicoValidationSchema = yup.object({
  id: yup.number().integer('Deve ser um número inteiro!'),
  nome: yup.string().required('Campo obrigatório!'),
  descricao: yup.string(),
  duracaoMinutos: yup.number().required('Campo obrigatório!'),
  ativo: yup.boolean(),
  fkCategoriaServico: yup
    .number()
    .integer('Deve ser um número inteiro!')
    .required('Campo obrigatório!'),
})
