import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { Register, Login, LoginResponse } from '@/models/auth-model'
import { useSessionStorage } from '@vueuse/core'

const endpoint = '/usuarios'

const useAuthStore = defineStore('Auth', () => {
  const loginToken = useSessionStorage('loginToken', '')
  const loginUser = useSessionStorage('loginUser', { id: 0, nome: '', email: '', cargo: '' })

  async function register(payload: Register) {
    const { data, statusCode } = await api(`${endpoint}/cadastrar`).post(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function login(payload: Login) {
    const { data, statusCode } = await api(`${endpoint}/login`).post(payload).json<LoginResponse>()

    if (data.value) {
      loginToken.value = data.value.token
      loginUser.value = data.value.user
    }

    return {
      data,
      statusCode,
    }
  }

  async function logout() {
    const { data, statusCode } = await api(`${endpoint}/logout`).post().json()

    loginToken.value = ''
    loginUser.value = resetUser()

    return {
      data,
      statusCode,
    }
  }

  function resetUser() {
    return { id: 0, nome: '', email: '', cargo: '' }
  }

  return {
    loginToken,
    loginUser,
    register,
    login,
    logout,
  }
})

export { useAuthStore }
