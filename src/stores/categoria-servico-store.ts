import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { CategoriaServico } from '@/models/categoria-servico-model'

const endpoint: string = '/categorias-servico'

const useCategoriaServicoStore = defineStore('CategoriaServico', () => {
  async function fetchCategoriasServico() {
    const { data, statusCode } = await api(`${endpoint}`).get().json<Array<CategoriaServico>>()

    return {
      data,
      statusCode,
    }
  }

  async function getCategoriaServico(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get().json<CategoriaServico>()

    return {
      data,
      statusCode,
    }
  }

  async function createCategoriaServico(payload: CategoriaServico) {
    const { data, statusCode } = await api(`${endpoint}/criarCategoria`).post(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function updateCategoriaServico(payload: CategoriaServico) {
    const { data, statusCode } = await api(`${endpoint}`).patch(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function deleteCategoriaServico(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id).json()

    return {
      data,
      statusCode,
    }
  }

  return {
    fetchCategoriasServico,
    getCategoriaServico,
    createCategoriaServico,
    updateCategoriaServico,
    deleteCategoriaServico,
  }
})

export { useCategoriaServicoStore }
