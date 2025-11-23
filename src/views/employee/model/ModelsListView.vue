<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useModeloStore } from '@/stores/modelo-store'
import { useMarcaStore } from '@/stores/marca-store'
import type { Modelo } from '@/models/modelo-model'
import type { Marca } from '@/models/marca-model'
import type { SelectOption } from '@/utils/html-select-utils'

const brandCode = ref<number>(1)

const modeloStore = useModeloStore()
const marcaStore = useMarcaStore()

const models = ref<Array<Modelo>>([])
const brandOptions = ref<Array<SelectOption>>([])

async function loadBrandModels() {
  const { data, statusCode } = await modeloStore.fetchModelos(brandCode.value)

  if (statusCode.value === 200) {
    models.value = data.value as Array<Modelo>
  } else {
    models.value = []
  }
}

watch(
  () => brandCode.value,
  () => {
    loadBrandModels()
  },
)

onMounted(async () => {
  const { data } = await marcaStore.fetchMarcas()

  if (data.value) {
    brandOptions.value = data.value.map((brand: Marca) => ({
      label: brand.nome,
      value: Number(brand.id),
    }))
  }

  await loadBrandModels()
})
</script>

<template>
  <TableComponent
    title="Listagem de Modelos"
    module="Modelo"
    :registration-route="{ name: 'newModel' }"
  >
    <template #table>
      <FormFieldComponent
        label="Marca:"
        name="fkMarca"
        variant="select"
        :select-options="brandOptions"
        :initial-value="brandCode"
        @update-selected-option="brandCode = Number($event)"
      />
      <ModelsTableComponent :models="models" />
    </template>
  </TableComponent>
</template>
