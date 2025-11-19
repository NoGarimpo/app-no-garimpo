import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { Marca } from '@/models/marca-model'

const endpoint: string = '/veiculos/marcas/'

const useMarcaStore = defineStore('Marca', () => {
  async function fetchMarcas() {
    const { data, statusCode } = await api(`${endpoint}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function getMarca(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function createMarca(payload: Marca) {
    const { data, statusCode } = await api(`${endpoint}`).post(payload)

    return {
      data,
      statusCode,
    }
  }

  async function updateMarca(payload: Marca) {
    const { data, statusCode } = await api(`${endpoint}`).put(payload)

    return {
      data,
      statusCode,
    }
  }

  async function deleteMarca(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id)

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
