import * as yup from "yup"

export const usuarioValidationSchema = yup.object({
  id: yup.number().integer(),
  nome: yup.string(),
  email: yup.string().email(""),
  senha: yup.string(),
  cargo: yup.string().notRequired(),
  ativo: yup.boolean(),
})
