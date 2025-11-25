import * as yup from 'yup'

export const precoServicoValidationSchema = yup.object({
  id: yup.number().integer('Deve ser um número inteiro!'),
  descricao: yup.string().notRequired(),
  valor: yup.number().required('Campo obrigatório!'),
  ativo: yup.boolean(),
  fkServico: yup.number().integer('Deve ser um número inteiro!').required('Campo obrigatório!'),
  fkTipoVeiculo: yup.number().integer('Deve ser um número inteiro!').required('Campo obrigatório!'),
})
