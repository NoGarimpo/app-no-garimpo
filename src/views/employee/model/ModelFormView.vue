<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Modelo } from '@/models/modelo-model'
import type { Marca } from '@/models/marca-model'
import { useModeloStore } from '@/stores/modelo-store'
import { useMarcaStore } from '@/stores/marca-store'
import { toast } from 'vue3-toastify'
import type { SelectOption } from '@/utils/html-select-utils'
import { modeloValidationSchema } from '@/schemas/modelo-validation-schemas'

const modeloStore = useModeloStore()
const marcaStore = useMarcaStore()

const modeloFormValues = ref<Modelo>({
  nome: '',
  ativo: true,
})

const brandOptions = ref<Array<SelectOption>>([])

async function loadBrands() {
  const { data } = await marcaStore.fetchMarcas()

  if (data.value) {
    brandOptions.value = data.value.map((brand: Marca) => ({
      label: brand.nome,
      value: Number(brand.id),
    }))
  }
}

async function handleSubmit(values: object) {
  const { statusCode } = await modeloStore.createModelo(values as Modelo)

  if (statusCode.value === 201) {
    toast.success('Modelo cadastrado com sucesso!')
  } else {
    toast.error('Erro ao tentar cadastrar o modelo!')
  }
}

onMounted(async () => {
  await loadBrands()
})
</script>

<template>
  <FormComponent
    title="Cadastro de Modelos"
    :initial-form-values="modeloFormValues"
    :form-validation-schema="modeloValidationSchema"
    :handle-submit="handleSubmit"
  >
    <template #fields>
      <FormFieldComponent label="Nome:" type="text" name="nome" />
      <FormFieldComponent
        label="Marca:"
        name="fkMarca"
        variant="select"
        :select-options="brandOptions"
      />
    </template>
  </FormComponent>
</template>
