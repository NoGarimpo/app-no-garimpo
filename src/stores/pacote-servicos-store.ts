import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { PacoteServicos } from '@/models/pacote-servicos-model'

const endpoint: string = '/servicos/pacotes/'

const usePacoteServicosStore = defineStore('PacoteServicos', () => {
  async function fetchPacotesServicos() {
    const { data, statusCode } = await api(`${endpoint}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function getPacoteServicos(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function createPacoteServicos(payload: PacoteServicos) {
    const { data, statusCode } = await api(`${endpoint}`).post(payload)

    return {
      data,
      statusCode,
    }
  }

  async function updatePacoteServicos(payload: PacoteServicos) {
    const { data, statusCode } = await api(`${endpoint}`).put(payload)

    return {
      data,
      statusCode,
    }
  }

  async function deletePacoteServicos(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id)

    return {
      data,
      statusCode,
    }
  }

  return {
    fetchPacotesServicos,
    getPacoteServicos,
    createPacoteServicos,
    updatePacoteServicos,
    deletePacoteServicos,
  }
})

export { usePacoteServicosStore }
