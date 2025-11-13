export interface Veiculo {
  id: number
  placa: string
  ano: number
  foto: string
  ativo: boolean
  fkTipoVeiculo: number
  fkCliente: number
  fkMarca: number
  fkModelo: number
}
