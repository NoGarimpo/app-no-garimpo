<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useServicoStore } from '@/stores/servico-store'
import type { Servico } from '@/models/servico-model'

const servicoStore = useServicoStore()

const services = ref<Array<Servico>>([])

onMounted(async () => {
  const { data } = await servicoStore.fetchServicos()

  if (data.value) {
    services.value = data.value
  }
})
</script>

<template>
  <section class="w-full min-h-full flex flex-col items-center justify-center gap-2 p-4">
    <img class="w-140" src="/logo.svg" alt="Logo" />
    <div class="flex items-center justify-center gap-4">
      <ButtonComponent
        class="bg-transparent border border-base-content rounded-full hover:bg-primary hover:border-base-100 hover:text-white"
        type="link"
        label="Cadastro"
        :route="{ name: 'userRegister' }"
      />
      <ButtonComponent
        class="bg-primary border border-base-100 rounded-full text-white"
        type="link"
        label="Login"
        :route="{ name: 'userLogin' }"
      />
    </div>
  </section>
  <section class="w-full min-h-full flex flex-col items-center justify-start gap-8 p-4">
    <h1 class="text-3xl text-primary font-extrabold">Serviços</h1>
    <div class="w-full h-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="(service, index) in services"
        :key="service.id"
        class="flex flex-col gap-2 border border-base-content rounded-md overflow-hidden"
      >
        <img
          class="w-full h-40 object-cover"
          src="/images/services/polimento.svg"
          :alt="`banner-image-${index}`"
        />
        <div class="w-full flex flex-col items-start justify-start gap-4 p-2">
          <div class="w-full flex items-center justify-between">
            <h2 class="text-xl font-bold">{{ service.nome }}</h2>
            <ButtonComponent
              type="button"
              label="Agendar"
              icon="lucide:calendar"
              class="bg-primary rounded-md text-white"
            />
          </div>
          <p>{{ service.descricao }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
