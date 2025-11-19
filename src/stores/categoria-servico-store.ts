import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { CategoriaServico } from '@/models/categoria-servico-model'

const endpoint: string = '/servicos/categorias/'

const useCategoriaServicoStore = defineStore('CategoriaServico', () => {
  async function fetchCategoriasServico() {
    const { data, statusCode } = await api(`${endpoint}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function getCategoriaServico(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function createCategoriaServico(payload: CategoriaServico) {
    const { data, statusCode } = await api(`${endpoint}`).post(payload)

    return {
      data,
      statusCode,
    }
  }

  async function updateCategoriaServico(payload: CategoriaServico) {
    const { data, statusCode } = await api(`${endpoint}`).put(payload)

    return {
      data,
      statusCode,
    }
  }

  async function deleteCategoriaServico(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id)

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
