import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { useAuthStore } from '@/stores/auth-store'

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (Boolean(to.meta.requiresAuth) && authStore.loginToken === '') {
    next(false)

    return
  }

  document.title = String(to.meta.title).concat(' | No Garimpo')

  next(true)
})

export default router
