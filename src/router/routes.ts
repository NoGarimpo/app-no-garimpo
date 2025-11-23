import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Início', requiresAuth: false },
  },
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    redirect: { name: 'userLogin' },
    children: [
      {
        path: 'login',
        name: 'userLogin',
        component: () => import('@/views/auth/LoginView.vue'),
        meta: { title: 'Login de Usuário', requiresAuth: false },
      },
      {
        path: 'register',
        name: 'userRegister',
        component: () => import('@/views/auth/RegisterView.vue'),
        meta: { title: 'Cadastro de Usuário', requiresAuth: false },
      },
    ],
  },
]
