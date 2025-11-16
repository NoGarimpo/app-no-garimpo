import * as yup from "yup"

export const categoriaServicoValidationSchema = yup.object({
  id: yup.number().integer(),
  nome: yup.string(),
  descricao: yup.string(),
  ativa: yup.boolean(),
})
