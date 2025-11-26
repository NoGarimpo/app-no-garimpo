<script setup lang="ts">
import type { PrecoServicoResponse } from '@/models/preco-servico-model'

const props = defineProps<{
  servicePrice: PrecoServicoResponse | null
}>()
</script>

<template>
  <div class="bg-base-100 border border-base-content rounded-box overflow-x-auto">
    <table class="table table-lg">
      <thead class="text-lg text-base-content font-bold">
        <tr>
          <th>Valor</th>
          <th>Duração do Serviço (Minutos)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>R${{ props.servicePrice?.valor }}</td>
          <td>{{ props.servicePrice?.duracao_minutos }} minutos</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
