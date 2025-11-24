import * as yup from 'yup'

export const modeloValidationSchema = yup.object({
  id: yup.number().integer(),
  nome: yup.string().required('Campo obrigatório!'),
  ativa: yup.boolean(),
  fkMarca: yup.number().integer().required('Campo obrigatório!'),
})
