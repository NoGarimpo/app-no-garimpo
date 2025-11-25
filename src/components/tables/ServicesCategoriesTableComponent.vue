<script setup lang="ts">
import type { CategoriaServico } from '@/models/categoria-servico-model'

const props = defineProps<{
  servicesCategories: Array<CategoriaServico>
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
        <tr
          v-for="(servicesCategory, index) in props.servicesCategories"
          :key="servicesCategory.id"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ servicesCategory.nome }}</td>
          <td>{{ servicesCategory.descricao }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
