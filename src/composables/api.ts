import { createFetch } from '@vueuse/core'
import { apiUrl } from '@/config/env'

export const api = createFetch({
  baseUrl: apiUrl,
  fetchOptions: {
    mode: 'cors',
    credentials: 'include',
  },
})
