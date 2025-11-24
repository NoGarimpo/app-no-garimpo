<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCategoriaServicoStore } from '@/stores/categoria-servico-store'
import type { CategoriaServico } from '@/models/categoria-servico-model'

const categoriaServicoStore = useCategoriaServicoStore()

const serviceCategories = ref<Array<CategoriaServico>>([])

onMounted(async () => {
  const { data, statusCode } = await categoriaServicoStore.fetchCategoriasServico()

  if (statusCode.value === 200) {
    serviceCategories.value = data.value as Array<CategoriaServico>
  } else {
    serviceCategories.value = []
  }
})
</script>

<template>
  <TableComponent
    title="Listagem de Categorias de Serviço"
    button-label="Nova Categoria de Serviço"
    :registration-route="{ name: 'newServiceCategory' }"
  >
    <template #table>
      <ServiceCategoriesTableComponent :service-categories="serviceCategories" />
    </template>
  </TableComponent>
</template>
