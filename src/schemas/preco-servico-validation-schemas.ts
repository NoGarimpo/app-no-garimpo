import * as yup from "yup"

export const precoServicoValidationSchema = yup.object({
  id: yup.number().integer(),
  descricao: yup.string(),
  valor: yup.number(),
  ativo: yup.boolean(),
  fkServico: yup.number().integer("Deve ser um número inteiro!"),
})
