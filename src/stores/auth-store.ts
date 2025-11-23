import { defineStore } from 'pinia'
import { api } from '@/composables/api'
import type { Register, Login, LoginResponse } from '@/models/auth-model'
import { useSessionStorage } from '@vueuse/core'

const endpoint = '/usuarios'

const useAuthStore = defineStore('Auth', () => {
  const loginToken = useSessionStorage('loginToken', '')

  async function register(payload: Register) {
    const { data, statusCode } = await api(`${endpoint}/cadastrar`).post(payload).json()

    return {
      data,
      statusCode,
    }
  }

  async function login(payload: Login) {
    const { data, statusCode } = await api(`${endpoint}/login`).post(payload).json<LoginResponse>()

    loginToken.value = data.value?.token

    return {
      data,
      statusCode,
    }
  }

  return {
    loginToken,
    register,
    login,
  }
})

export { useAuthStore }
