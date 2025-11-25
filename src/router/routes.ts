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
    path: '/client',
    component: () => import('@/layouts/ClientLayout.vue'),
    redirect: { name: 'clientHome' },
    children: [
      {
        path: '',
        name: 'clientHome',
        component: () => import('@/views/client/ClientHomeView.vue'),
        meta: { title: 'Área de Clientes', requiresAuth: true },
      },
      {
        path: 'vehicles',
        name: 'clientVehicles',
        component: () => import('@/views/client/vehicle/VehiclesListView.vue'),
        meta: { title: 'Listagem de Veículos', requiresAuth: false },
      },
      {
        path: 'vehicles/new',
        name: 'newClientVehicle',
        component: () => import('@/views/client/vehicle/VehicleFormView.vue'),
        meta: { title: 'Cadastro de Veículos', requiresAuth: true },
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
        path: 'services',
        name: 'services',
        component: () => import('@/views/employee/service/ServicesListView.vue'),
        meta: { title: 'Listagem de Serviços', requiresAuth: true },
      },
      {
        path: 'services/new',
        name: 'newService',
        component: () => import('@/views/employee/service/ServiceFormView.vue'),
        meta: { title: 'Cadastro de Serviços', requiresAuth: true },
      },
      {
        path: 'services/categories',
        name: 'servicesCategories',
        component: () => import('@/views/employee/service-category/ServicesCategoriesListView.vue'),
        meta: { title: 'Listagem de Categorias de Serviços', requiresAuth: true },
      },
      {
        path: 'services/categories/new',
        name: 'newServicesCategory',
        component: () => import('@/views/employee/service-category/ServicesCategoryFormView.vue'),
        meta: { title: 'Cadastro de Categoria de Serviços', requiresAuth: true },
      },
      {
        path: 'services/prices',
        name: 'servicesPrices',
        component: () => import('@/views/employee/service-price/ServicesPricesListView.vue'),
        meta: { title: 'Listagem de Preços de Serviços', requiresAuth: true },
      },
      {
        path: 'services/prices/new',
        name: 'newServicePrice',
        component: () => import('@/views/employee/service-price/ServicePriceFormView.vue'),
        meta: { title: 'Cadastro de Preços de Serviços', requiresAuth: true },
      },
      {
        path: 'vehicles/types',
        name: 'vehiclesTypes',
        component: () => import('@/views/employee/vehicle-type/VehicleTypesListView.vue'),
        meta: { title: 'Listagem de Tipos de Veículos', requiresAuth: true },
      },
      {
        path: 'vehicles/types/new',
        name: 'newVehiclesType',
        component: () => import('@/views/employee/vehicle-type/VehicleTypeFormView.vue'),
        meta: { title: 'Cadastro de Tipo de Veículos', requiresAuth: true },
      },
    ],
  },
]
