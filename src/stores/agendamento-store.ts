import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { Agendamento, AgendamentoPayload } from '@/models/agendamento-model'

const endpoint: string = '/agendamentos'

const useAgendamentoStore = defineStore('Agendamento', () => {
  async function fetchAgendamentos() {
    const { data, statusCode } = await api(`${endpoint}`).get().json<Array<Agendamento>>()

    return {
      data,
      statusCode,
    }
  }

  async function fetchTodayAgendamentos() {
    const { data, statusCode } = await api(`${endpoint}/hoje`).get().json<Array<Agendamento>>()

    return {
      data,
      statusCode,
    }
  }

  async function confirmAgendamento(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}/status`)
      .patch({ status: 'Em andamento' })
      .json()

    return {
      data,
      statusCode,
    }
  }

  async function getAgendamento(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get().json<Agendamento>()

    return {
      data,
      statusCode,
    }
  }

  async function createAgendamento(payload: AgendamentoPayload) {
    const { data, statusCode } = await api(`${endpoint}/CriarAgendamento`).post(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function updateAgendamento(payload: AgendamentoPayload) {
    const { data, statusCode } = await api(`${endpoint}`).patch(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function deleteAgendamento(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id).json()

    return {
      data,
      statusCode,
    }
  }

  return {
    fetchAgendamentos,
    fetchTodayAgendamentos,
    confirmAgendamento,
    getAgendamento,
    createAgendamento,
    updateAgendamento,
    deleteAgendamento,
  }
})

export { useAgendamentoStore }
