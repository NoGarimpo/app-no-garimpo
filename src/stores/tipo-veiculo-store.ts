import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { TipoVeiculo } from '@/models/tipo-veiculo-model'

const endpoint: string = '/veiculos/tipos/'

const useTipoVeiculoStore = defineStore('TipoVeiculo', () => {
  async function fetchTiposVeiculo() {
    const { data, statusCode } = await api(`${endpoint}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function getTipoVeiculo(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function createTipoVeiculo(payload: TipoVeiculo) {
    const { data, statusCode } = await api(`${endpoint}`).post(payload)

    return {
      data,
      statusCode,
    }
  }

  async function updateTipoVeiculo(payload: TipoVeiculo) {
    const { data, statusCode } = await api(`${endpoint}`).put(payload)

    return {
      data,
      statusCode,
    }
  }

  async function deleteTipoVeiculo(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id)

    return {
      data,
      statusCode,
    }
  }

  return {
    fetchTiposVeiculo,
    getTipoVeiculo,
    createTipoVeiculo,
    updateTipoVeiculo,
    deleteTipoVeiculo,
  }
})

export { useTipoVeiculoStore }
