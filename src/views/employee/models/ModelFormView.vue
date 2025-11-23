<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Form } from 'vee-validate'
import type { Modelo } from '@/models/modelo-model'
import type { Marca } from '@/models/marca-model'
import { useModeloStore } from '@/stores/modelo-store'
import { useMarcaStore } from '@/stores/marca-store'
import { toast } from 'vue3-toastify'
import type { SelectOption } from '@/utils/html-select-utils'

const modeloStore = useModeloStore()
const marcaStore = useMarcaStore()

const modeloFormValues = ref<Modelo>({
  nome: '',
  ativo: true,
  fkMarca: 0,
})

const brandOptions = ref<Array<SelectOption>>([])

async function handleSubmit(values: object) {
  const { statusCode } = await modeloStore.createModelo(values as Modelo)

  if (statusCode.value === 201) {
    toast.success('Modelo cadastrado com sucesso!')
  } else {
    toast.error('Erro ao tentar cadastrar o modelo!')
  }
}

onMounted(async () => {
  const { data } = await marcaStore.fetchMarcas()

  if (data.value) {
    brandOptions.value = data.value.map((brand: Marca) => ({
      label: brand.nome,
      value: Number(brand.id),
    }))
  }
})
</script>

<template>
  <Form class="flex flex-col gap-4" :initial-values="modeloFormValues" @submit="handleSubmit">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl text-primary font-extrabold">Cadastro de Modelos</h1>
      <ButtonComponent
        type="submit"
        label="Cadastrar"
        icon="lucide:plus"
        class="bg-primary rounded-md text-white"
      />
    </div>

    <FormFieldComponent label="Nome:" type="text" name="nome" />
    <FormFieldComponent
      label="Marca:"
      name="fkMarca"
      variant="select"
      :select-options="brandOptions"
    />
  </Form>
</template>
