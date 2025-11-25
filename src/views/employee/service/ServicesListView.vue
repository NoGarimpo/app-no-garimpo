<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useServicoStore } from '@/stores/servico-store'
import type { Servico } from '@/models/servico-model'

const servicoStore = useServicoStore()

const services = ref<Array<Servico>>([])

onMounted(async () => {
  const { data, statusCode } = await servicoStore.fetchServicos()

  if (statusCode.value === 200) {
    services.value = data.value as Array<Servico>
  } else {
    services.value = []
  }
})
</script>

<template>
  <TableComponent
    title="Listagem de Serviços"
    button-label="Novo Serviço"
    :registration-route="{ name: 'newService' }"
  >
    <template #table>
      <ServicesTableComponent :services="services" />
    </template>
  </TableComponent>
</template>
