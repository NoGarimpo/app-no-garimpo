import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { PrecoServico } from '@/models/preco-servico-model'

const endpoint: string = '/precos-servico'

const usePrecoServicoStore = defineStore('PrecoServico', () => {
  async function fetchPrecosServico(fkServico: number, fkTipoVeiculo: number) {
    const { data, statusCode } = await api(
      `${endpoint}?fkServico=${fkServico}&fkTipoVeiculo=${fkTipoVeiculo}`,
    )
      .get()
      .json<Array<PrecoServico>>()

    return {
      data,
      statusCode,
    }
  }

  async function getPrecoServico(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get().json<PrecoServico>()

    return {
      data,
      statusCode,
    }
  }

  async function createPrecoServico(payload: PrecoServico) {
    const { data, statusCode } = await api(`${endpoint}/criarServico`).post(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function updatePrecoServico(payload: PrecoServico) {
    const { data, statusCode } = await api(`${endpoint}`).patch(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function deletePrecoServico(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id).json()

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
