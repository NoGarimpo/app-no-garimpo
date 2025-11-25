<script setup lang="ts">
import type { Modelo } from '@/models/modelo-model'

const props = defineProps<{
  models: Array<Modelo>
}>()
</script>

<template>
  <div class="bg-base-100 border border-base-content rounded-box overflow-x-auto">
    <table class="table table-lg">
      <thead class="text-lg text-base-content font-bold">
        <tr>
          <th>Nº Linha</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(model, index) in props.models" :key="model.id">
          <td>{{ index + 1 }}</td>
          <td>{{ model.nome }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
