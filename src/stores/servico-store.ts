import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { Servico } from '@/models/servico-model'

const endpoint: string = '/servicos/'

const useServicoStore = defineStore('Servico', () => {
  async function fetchServicos() {
    const { data, statusCode } = await api(`${endpoint}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function getServico(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function createServico(payload: Servico) {
    const { data, statusCode } = await api(`${endpoint}`).post(payload)

    return {
      data,
      statusCode,
    }
  }

  async function updateServico(payload: Servico) {
    const { data, statusCode } = await api(`${endpoint}`).put(payload)

    return {
      data,
      statusCode,
    }
  }

  async function deleteServico(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id)

    return {
      data,
      statusCode,
    }
  }

  return {
    fetchServicos,
    getServico,
    createServico,
    updateServico,
    deleteServico,
  }
})

export { useServicoStore }
