<script setup lang="ts">
import type { Servico } from '@/models/servico-model'

const props = defineProps<{
  services: Array<Servico>
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(service, index) in props.services" :key="service.id">
          <td>{{ index + 1 }}</td>
          <td>{{ service.nome }}</td>
          <td>{{ service.descricao }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
