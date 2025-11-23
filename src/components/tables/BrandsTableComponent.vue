<script setup lang="ts">
import type { Marca } from '@/models/marca-model'

const props = defineProps<{
  brands: Array<Marca>
}>()
</script>

<template>
  <div class="bg-base-100 border border-base-content rounded-box overflow-x-auto">
    <table class="table table-lg">
      <thead class="text-lg text-base-content font-bold">
        <tr>
          <th>Nº Linha</th>
          <th>Nome</th>
          <th>Ativa</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(brand, index) in props.brands" :key="brand.id">
          <td>{{ index + 1 }}</td>
          <td>{{ brand.nome }}</td>
          <td>Sim</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
