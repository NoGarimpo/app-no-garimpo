<script setup lang="ts">
import type { TipoVeiculo } from '@/models/tipo-veiculo-model'

const props = defineProps<{
  vehiclesTypes: Array<TipoVeiculo>
}>()
</script>

<template>
  <div class="bg-base-100 border border-base-content rounded-box overflow-x-auto">
    <table class="table table-lg">
      <thead class="text-lg text-base-content font-bold">
        <tr>
          <th>Nº Linha</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Ativa</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(vehiclesType, index) in props.vehiclesTypes" :key="vehiclesType.id">
          <td>{{ index + 1 }}</td>
          <td>{{ vehiclesType.nome }}</td>
          <td>{{ vehiclesType.descricao }}</td>
          <td>Sim</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
