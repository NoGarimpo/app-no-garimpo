import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { Marca } from '@/models/marca-model'

const endpoint: string = '/marcas'

const useMarcaStore = defineStore('Marca', () => {
  async function fetchMarcas() {
    const { data, statusCode } = await api(`${endpoint}`).get().json<Array<Marca>>()

    return {
      data,
      statusCode,
    }
  }

  async function getMarca(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get().json<Marca>()

    return {
      data,
      statusCode,
    }
  }

  async function createMarca(payload: Marca) {
    const { data, statusCode } = await api(`${endpoint}/criarMarca`).post(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function updateMarca(payload: Marca) {
    const { data, statusCode } = await api(`${endpoint}`).patch(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function deleteMarca(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id).json()

    return {
      data,
      statusCode,
    }
  }

  return {
    fetchMarcas,
    getMarca,
    createMarca,
    updateMarca,
    deleteMarca,
  }
})

export { useMarcaStore }
