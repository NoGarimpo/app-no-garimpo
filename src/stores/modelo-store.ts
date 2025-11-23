import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { Modelo } from '@/models/modelo-model'

const endpoint: string = '/modelos'

const useModeloStore = defineStore('Modelo', () => {
  async function fetchModelos(fkMarca: number) {
    const { data, statusCode } = await api(`${endpoint}?fkMarca=${fkMarca}`)
      .get()
      .json<Array<Modelo>>()

    return {
      data,
      statusCode,
    }
  }

  async function getModelo(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get().json<Modelo>()

    return {
      data,
      statusCode,
    }
  }

  async function createModelo(payload: Modelo) {
    const { data, statusCode } = await api(`${endpoint}/criarModelo`).post(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function updateModelo(payload: Modelo) {
    const { data, statusCode } = await api(`${endpoint}`).patch(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function deleteModelo(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id).json()

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
