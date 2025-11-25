<script setup lang="ts">
import type { Veiculo } from '@/models/veiculo-model'

const props = defineProps<{
  vehicles: Array<Veiculo>
}>()
</script>

<template>
  <div class="bg-base-100 border border-base-content rounded-box overflow-x-auto">
    <table class="table table-lg">
      <thead class="text-lg text-base-content font-bold">
        <tr>
          <th>Nº Linha</th>
          <th>Ano</th>
          <th>Placa</th>
          <th>Foto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(vehicle, index) in props.vehicles" :key="vehicle.id">
          <td>{{ index + 1 }}</td>
          <td>{{ vehicle.ano }}</td>
          <td>{{ vehicle.placa }}</td>
          <td>{{ vehicle.foto }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
