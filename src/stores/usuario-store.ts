import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { Usuario } from '@/models/usuario-model'

const endpoint: string = '/usuarios'

const useUsuarioStore = defineStore('Usuario', () => {
  async function fetchUsuarios() {
    const { data, statusCode } = await api(`${endpoint}`).get().json<Array<Usuario>>()

    return {
      data,
      statusCode,
    }
  }

  async function getUsuario(id: number) {
    const { data, statusCode } = await api(`${endpoint}/${id}`).get().json<Usuario>()

    return {
      data,
      statusCode,
    }
  }

  async function createUsuario(payload: Usuario) {
    const { data, statusCode } = await api(`${endpoint}`).post(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function updateUsuario(payload: Usuario) {
    const { data, statusCode } = await api(`${endpoint}`).patch(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function deleteUsuario(id: number) {
    const { data, statusCode } = await api(`${endpoint}`).delete(id).json()

    return {
      data,
      statusCode,
    }
  }

  return {
    fetchUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario,
  }
})

export { useUsuarioStore }
