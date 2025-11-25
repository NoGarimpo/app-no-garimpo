import * as yup from 'yup'

export const categoriaServicosValidationSchema = yup.object({
  id: yup.number().integer('Deve ser um número inteiro!'),
  nome: yup.string().required('Campo obrigatório!'),
  descricao: yup.string().notRequired(),
  ativa: yup.boolean(),
})
