import * as yup from 'yup'

export const veiculoValidationSchema = yup.object({
  id: yup.number().integer(),
  placa: yup.string().required('Campo obrigatório!'),
  ano: yup.number().integer('Deve ser um número inteiro!').required('Campo obrigatório!'),
  foto: yup.string().notRequired(),
  ativo: yup.boolean(),
  fkTipoVeiculo: yup.number().integer().required('Campo obrigatório!'),
  fkCliente: yup.number().integer().required('Campo obrigatório!'),
  fkMarca: yup.number().integer().required('Campo obrigatório!'),
  fkModelo: yup.number().integer().required('Campo obrigatório!'),
})
