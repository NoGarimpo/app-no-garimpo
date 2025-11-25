<script setup lang="ts">
import { useAuthStore } from '@/stores/auth-store'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()

const router = useRouter()

async function handleLogout() {
  const { statusCode } = await authStore.logout()

  if (statusCode.value === 200) {
    router.push({ name: 'home' })
  }
}
</script>
<template>
  <div class="flex flex-col items-center justify-center gap-8">
    <h1 class="text-4xl text-center text-primary font-extrabold">Área de Clientes</h1>
    <p class="text-xl text-center">Bem vindo(a) à sua área de utilização.</p>
    <p class="text-xl text-center">
      Utilize o menu lateral para acessar dados de seus veículos e realizar agendamentos.
    </p>
    <ButtonComponent
      class="bg-primary border border-base-100 rounded-full text-white"
      type="button"
      icon="lucide:log-out"
      label="Sair"
      @click="handleLogout"
    />
  </div>
</template>
