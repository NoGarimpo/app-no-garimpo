<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMarcaStore } from '@/stores/marca-store'
import type { Marca } from '@/models/marca-model'

const marcaStore = useMarcaStore()

const brands = ref<Array<Marca>>([])

onMounted(async () => {
  const { data } = await marcaStore.fetchMarcas()

  if (data.value) {
    brands.value = data.value
  }
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl text-primary font-extrabold">Listagem de Marcas</h1>
      <ButtonComponent
        type="link"
        label="Nova Marca"
        icon="lucide:plus"
        :route="{ name: 'newBrand' }"
        class="bg-primary rounded-md text-white"
      />
    </div>
    <BrandsTableComponent :brands="brands" />
  </div>
</template>
