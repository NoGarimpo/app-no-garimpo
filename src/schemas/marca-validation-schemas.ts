import * as yup from "yup"

export const marcaValidationSchema = yup.object({
  id: yup.number().integer(),
  nome: yup.string(),
  ativa: yup.boolean(),
})
