import * as yup from 'yup'

export const modeloValidationSchema = yup.object({
  id: yup.number().integer('Deve ser um número inteiro!'),
  nome: yup.string().required('Campo obrigatório!'),
  ativa: yup.boolean(),
  fkMarca: yup.number().integer('Deve ser um número inteiro!').required('Campo obrigatório!'),
})
