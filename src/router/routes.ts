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
  {
    path: '/employee',
    component: () => import('@/layouts/EmployeeLayout.vue'),
    redirect: { name: 'employeeHome' },
    children: [
      {
        path: '',
        name: 'employeeHome',
        component: () => import('@/views/employee/EmployeeHomeView.vue'),
        meta: { title: 'Área de Funcionários', requiresAuth: true },
      },
      {
        path: 'brands',
        name: 'brands',
        component: () => import('@/views/employee/brand/BrandsListView.vue'),
        meta: { title: 'Listagem de Marcas', requiresAuth: true },
      },
      {
        path: 'brands/new',
        name: 'newBrand',
        component: () => import('@/views/employee/brand/BrandFormView.vue'),
        meta: { title: 'Cadastro de Marcas', requiresAuth: true },
      },
      {
        path: 'models',
        name: 'models',
        component: () => import('@/views/employee/model/ModelsListView.vue'),
        meta: { title: 'Listagem de Modelos', requiresAuth: true },
      },
      {
        path: 'models/new',
        name: 'newModel',
        component: () => import('@/views/employee/model/ModelFormView.vue'),
        meta: { title: 'Cadastro de Modelos', requiresAuth: true },
      },
      {
        path: 'services/categories',
        name: 'serviceCategories',
        component: () => import('@/views/employee/service-category/ServiceCategoriesListView.vue'),
        meta: { title: 'Listagem de Categorias de Serviço', requiresAuth: true },
      },
      {
        path: 'services/categories/new',
        name: 'newServiceCategory',
        component: () => import('@/views/employee/service-category/ServiceCategoryFormView.vue'),
        meta: { title: 'Cadastro de Categoria de Serviço', requiresAuth: true },
      },
    ],
  },
]
