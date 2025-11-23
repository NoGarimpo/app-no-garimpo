import './styles.css'

import Vue3Toastify from 'vue3-toastify'
import type { ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Vue3Toastify, {
  autoClose: 5000,
  position: 'top-right',
  theme: 'colored',
} as ToastContainerOptions)

app.mount('#app')
