<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useVeiculoStore } from '@/stores/veiculo-store'
import type { Veiculo } from '@/models/veiculo-model'

const veiculoStore = useVeiculoStore()

const vehicles = ref<Array<Veiculo>>([])

onMounted(async () => {
  const { data, statusCode } = await veiculoStore.fetchVeiculos()

  if (statusCode.value === 200) {
    vehicles.value = data.value as Array<Veiculo>
  } else {
    vehicles.value = []
  }
})
</script>

<template>
  <TableComponent
    title="Meus Veículos"
    button-label="Novo Veículo"
    :registration-route="{ name: 'newClientVehicle' }"
  >
    <template #table>
      <VehiclesTableComponent :vehicles="vehicles" />
    </template>
  </TableComponent>
</template>
