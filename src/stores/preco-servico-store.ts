import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { PrecoServico } from '@/models/preco-servico-model'

const endpoint: string = '/servicos/precos/'

const usePrecoServicoStore = defineStore('PrecoServico', () => {
  async function fetchPrecosServico() {
    const { data, statusCode } = await api(`${endpoint}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function getPrecoServico(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function createPrecoServico(payload: PrecoServico) {
    const { data, statusCode } = await api(`${endpoint}`).post(payload)

    return {
      data,
      statusCode,
    }
  }

  async function updatePrecoServico(payload: PrecoServico) {
    const { data, statusCode } = await api(`${endpoint}`).put(payload)

    return {
      data,
      statusCode,
    }
  }

  async function deletePrecoServico(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id)

    return {
      data,
      statusCode,
    }
  }

  return {
    fetchPrecosServico,
    getPrecoServico,
    createPrecoServico,
    updatePrecoServico,
    deletePrecoServico,
  }
})

export { usePrecoServicoStore }
