<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMarcaStore } from '@/stores/marca-store'
import type { Marca } from '@/models/marca-model'

const marcaStore = useMarcaStore()

const brands = ref<Array<Marca>>([])

onMounted(async () => {
  const { data, statusCode } = await marcaStore.fetchMarcas()

  if (statusCode.value === 200) {
    brands.value = data.value as Array<Marca>
  } else {
    brands.value = []
  }
})
</script>

<template>
  <TableComponent
    title="Listagem de Marcas"
    module="Marca"
    :registration-route="{ name: 'newBrand' }"
  >
    <template #table>
      <BrandsTableComponent :brands="brands" />
    </template>
  </TableComponent>
</template>
