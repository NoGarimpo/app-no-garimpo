<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useTipoVeiculoStore } from '@/stores/tipo-veiculo-store'
import type { TipoVeiculo } from '@/models/tipo-veiculo-model'

const tipoVeiculoStore = useTipoVeiculoStore()

const vehiclesTypes = ref<Array<TipoVeiculo>>([])

onMounted(async () => {
  const { data, statusCode } = await tipoVeiculoStore.fetchTiposVeiculo()

  if (statusCode.value === 200) {
    vehiclesTypes.value = data.value as Array<TipoVeiculo>
  } else {
    vehiclesTypes.value = []
  }
})
</script>

<template>
  <TableComponent
    title="Listagem de Tipos de Veículos"
    button-label="Novo Tipo de Veículos"
    :registration-route="{ name: 'newVehiclesType' }"
  >
    <template #table>
      <VehiclesTypesTableComponent :vehicles-types="vehiclesTypes" />
    </template>
  </TableComponent>
</template>
