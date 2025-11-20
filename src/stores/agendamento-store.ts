import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { Agendamento } from '@/models/agendamento-model'

const endpoint: string = '/agendamentos/'

const useAgendamentoStore = defineStore('Agendamento', () => {
  async function fetchAgendamentos() {
    const { data, statusCode } = await api(`${endpoint}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function getAgendamento(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get()

    return {
      data,
      statusCode,
    }
  }

  async function createAgendamento(payload: Agendamento) {
    const { data, statusCode } = await api(`${endpoint}`).post(payload)

    return {
      data,
      statusCode,
    }
  }

  async function updateAgendamento(payload: Agendamento) {
    const { data, statusCode } = await api(`${endpoint}`).put(payload)

    return {
      data,
      statusCode,
    }
  }

  async function deleteAgendamento(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id)

    return {
      data,
      statusCode,
    }
  }

  return {
    fetchAgendamentos,
    getAgendamento,
    createAgendamento,
    updateAgendamento,
    deleteAgendamento,
  }
})

export { useAgendamentoStore }
