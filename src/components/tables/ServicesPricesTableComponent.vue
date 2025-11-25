<script setup lang="ts">
import type { PrecoServico } from '@/models/preco-servico-model'

const props = defineProps<{
  servicesPrices: Array<PrecoServico>
}>()
</script>

<template>
  <div class="bg-base-100 border border-base-content rounded-box overflow-x-auto">
    <table class="table table-lg">
      <thead class="text-lg text-base-content font-bold">
        <tr>
          <th>Nº Linha</th>
          <th>Valor</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(servicesPrice, index) in props.servicesPrices" :key="servicesPrice.id">
          <td>{{ index + 1 }}</td>
          <td>{{ servicesPrice.valor }}</td>
          <td>{{ servicesPrice.descricao }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
