import * as yup from 'yup'

export const veiculoValidationSchema = yup.object({
  id: yup.number().integer('Deve ser um número inteiro!'),
  placa: yup.string().required('Campo obrigatório!'),
  ano: yup.number().integer('Deve ser um número inteiro!').required('Campo obrigatório!'),
  foto: yup.string().notRequired(),
  ativo: yup.boolean(),
  fkTipoVeiculo: yup.number().integer('Deve ser um número inteiro!').required('Campo obrigatório!'),
  fkCliente: yup.number().integer('Deve ser um número inteiro!').required('Campo obrigatório!'),
  fkMarca: yup.number().integer('Deve ser um número inteiro!').required('Campo obrigatório!'),
  fkModelo: yup.number().integer('Deve ser um número inteiro!').required('Campo obrigatório!'),
})
