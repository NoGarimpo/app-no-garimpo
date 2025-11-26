<script setup lang="ts">
import type { Agendamento } from '@/models/agendamento-model'

const props = defineProps<{
  schedulings: Array<Agendamento>
}>()
</script>

<template>
  <div class="bg-base-100 border border-base-content rounded-box overflow-x-auto">
    <table class="table table-lg">
      <thead class="text-lg text-base-content font-bold">
        <tr>
          <th>Nº Linha</th>
          <th>Data de Requisição</th>
          <th>Observações</th>
          <th>Status Atual</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(scheduling, index) in props.schedulings" :key="scheduling.id">
          <td>{{ index + 1 }}</td>
          <td>{{ new Date(scheduling.dataRequisicao).toLocaleDateString('pt-BR') }}</td>
          <td>{{ scheduling.observacoes }}</td>
          <td>{{ scheduling.statusAtual }}</td>
          <td>R${{ scheduling.valorTotal }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
