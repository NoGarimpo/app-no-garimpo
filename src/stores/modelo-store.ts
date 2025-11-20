import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { Modelo } from '@/models/modelo-model'

const endpoint: string = '/veiculos/modelos/'

const useModeloStore = defineStore('Modelo', () => {
  async function fetchModelos() {
    const { data, statusCode } = await api(`${endpoint}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function getModelo(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function createModelo(payload: Modelo) {
    const { data, statusCode } = await api(`${endpoint}`).post(payload)

    return {
      data,
      statusCode,
    }
  }

  async function updateModelo(payload: Modelo) {
    const { data, statusCode } = await api(`${endpoint}`).put(payload)

    return {
      data,
      statusCode,
    }
  }

  async function deleteModelo(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id)

    return {
      data,
      statusCode,
    }
  }

  return {
    fetchModelos,
    getModelo,
    createModelo,
    updateModelo,
    deleteModelo,
  }
})

export { useModeloStore }
