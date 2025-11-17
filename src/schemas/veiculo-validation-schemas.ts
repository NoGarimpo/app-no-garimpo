import * as yup from 'yup'

export const veiculoValidationSchema = yup.object({
  id: yup.number().integer(),
  placa: yup.string(),
  ano: yup.number().integer('Deve ser um número inteiro!'),
  foto: yup.string(),
  ativo: yup.boolean(),
  fkTipoVeiculo: yup.number().integer('Deve ser um número inteiro!'),
  fkCliente: yup.number().integer('Deve ser um número inteiro!'),
  fkMarca: yup.number().integer('Deve ser um número inteiro!'),
  fkModelo: yup.number().integer('Deve ser um número inteiro!'),
})
