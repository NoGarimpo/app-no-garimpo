import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { useAuthStore } from '@/stores/auth-store'

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
})

function verifyAuth(routeIsProtected: boolean) {
  const authStore = useAuthStore()

  return routeIsProtected && authStore.loginToken === ''
}

router.beforeEach((to, from, next) => {
  if (verifyAuth(Boolean(to.meta.requiresAuth))) {
    next({ name: 'home' })
  }

  document.title = String(to.meta.title).concat(' | No Garimpo')

  next(true)
})

export default router
