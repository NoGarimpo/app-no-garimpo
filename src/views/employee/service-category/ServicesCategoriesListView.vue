<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCategoriaServicoStore } from '@/stores/categoria-servico-store'
import type { CategoriaServico } from '@/models/categoria-servico-model'

const categoriaServicoStore = useCategoriaServicoStore()

const servicesCategories = ref<Array<CategoriaServico>>([])

onMounted(async () => {
  const { data, statusCode } = await categoriaServicoStore.fetchCategoriasServico()

  if (statusCode.value === 200) {
    servicesCategories.value = data.value as Array<CategoriaServico>
  } else {
    servicesCategories.value = []
  }
})
</script>

<template>
  <TableComponent
    title="Listagem de Categorias de Serviços"
    button-label="Nova Categoria de Serviços"
    :registration-route="{ name: 'newServicesCategory' }"
  >
    <template #table>
      <ServicesCategoriesTableComponent :services-categories="servicesCategories" />
    </template>
  </TableComponent>
</template>
