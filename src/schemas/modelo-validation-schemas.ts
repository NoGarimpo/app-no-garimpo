import * as yup from 'yup'

export const modeloValidationSchema = yup.object({
  id: yup.number().integer(),
  nome: yup.string(),
  ativa: yup.boolean(),
})
