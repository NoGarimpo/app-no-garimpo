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
    <h1 class="text-4xl text-primary font-extrabold">Área de Funcionários</h1>
    <p class="text-xl">Bem vindo(a) à parte de gerência.</p>
    <p class="text-xl">
      Utilize o menu lateral para acessar dados de marcas, modelos, categorias de serviços, etc.
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
