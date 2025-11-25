import * as yup from 'yup'

export const tipoVeiculosValidationSchema = yup.object({
  id: yup.number().integer('Deve ser um número inteiro!'),
  nome: yup.string().required('Campo obrigatório!'),
  descricao: yup.string().notRequired(),
  ativo: yup.boolean(),
})
