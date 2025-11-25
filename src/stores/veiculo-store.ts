import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { Veiculo } from '@/models/veiculo-model'

const endpoint: string = '/veiculos'

const useVeiculoStore = defineStore('Veiculo', () => {
  async function fetchVeiculos() {
    const { data, statusCode } = await api(`${endpoint}`).get().json<Array<Veiculo>>()

    return {
      data,
      statusCode,
    }
  }

  async function getVeiculo(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get().json<Veiculo>()

    return {
      data,
      statusCode,
    }
  }

  async function createVeiculo(payload: Veiculo) {
    const { data, statusCode } = await api(`${endpoint}/cadastro`).post(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function updateVeiculo(payload: Veiculo) {
    const { data, statusCode } = await api(`${endpoint}`).patch(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function deleteVeiculo(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id).json()

    return {
      data,
      statusCode,
    }
  }

  return {
    fetchVeiculos,
    getVeiculo,
    createVeiculo,
    updateVeiculo,
    deleteVeiculo,
  }
})

export { useVeiculoStore }
