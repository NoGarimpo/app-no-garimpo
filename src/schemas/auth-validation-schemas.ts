import * as yup from 'yup'

export const registerValidationSchema = yup.object({
  nome: yup.string().required('Campo obrigatório!'),
  email: yup.string().required('Campo obrigatório!').email('E-mail inválido!'),
  senha: yup.string().required('Campo obrigatório!'),
})

export const loginValidationSchema = yup.object({
  email: yup.string().required('Campo obrigatório!').email('E-mail inválido!'),
  senha: yup.string().required('Campo obrigatório!'),
})
