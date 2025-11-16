import * as yup from "yup"

export const tipoVeiculoValidationSchema = yup.object({
  id: yup.number().integer(),
  nome: yup.string(),
  descricao: yup.string(),
  ativo: yup.boolean(),
})
