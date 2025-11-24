import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { TipoVeiculo } from '@/models/tipo-veiculo-model'

const endpoint: string = '/tipos-veiculo'

const useTipoVeiculoStore = defineStore('TipoVeiculo', () => {
  async function fetchTiposVeiculo() {
    const { data, statusCode } = await api(`${endpoint}`).get().json<Array<TipoVeiculo>>()

    return {
      data,
      statusCode,
    }
  }

  async function getTipoVeiculo(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get().json<TipoVeiculo>()

    return {
      data,
      statusCode,
    }
  }

  async function createTipoVeiculo(payload: TipoVeiculo) {
    const { data, statusCode } = await api(`${endpoint}/criarTipo`).post(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function updateTipoVeiculo(payload: TipoVeiculo) {
    const { data, statusCode } = await api(`${endpoint}`).patch(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function deleteTipoVeiculo(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id).json()

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
