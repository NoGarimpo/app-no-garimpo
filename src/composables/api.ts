import { createFetch } from '@vueuse/core'
import { apiUrl } from '@/config/env'
import { useAuthStore } from '@/stores/auth-store'

export const api = createFetch({
  baseUrl: apiUrl,
  options: {
    beforeFetch({ options }) {
      const authStore = useAuthStore()

      if (authStore.loginToken) {
        options.headers = {
          ...options.headers,
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authStore.loginToken}`,
        }
      }
    },
  },
  fetchOptions: {
    mode: 'cors',
    credentials: 'include',
  },
})
