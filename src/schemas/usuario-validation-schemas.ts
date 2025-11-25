import * as yup from 'yup'

export const usuarioValidationSchema = yup.object({
  id: yup.number().integer('Deve ser um número inteiro!'),
  nome: yup.string(),
  email: yup.string().email('E-mail inválido!'),
  senha: yup.string(),
  cargo: yup.string().notRequired(),
  ativo: yup.boolean(),
})
