<script setup lang="ts">
import { ref } from 'vue'
import type { Marca } from '@/models/marca-model'
import { useMarcaStore } from '@/stores/marca-store'
import { toast } from 'vue3-toastify'
import { marcaValidationSchema } from '@/schemas/marca-validation-schemas'

const marcaStore = useMarcaStore()

const marcaFormValues = ref<Marca>({
  nome: '',
  ativa: true,
})

async function handleSubmit(values: object) {
  const { statusCode } = await marcaStore.createMarca(values as Marca)

  if (statusCode.value === 201) {
    toast.success('Marca cadastrada com sucesso!')
  } else {
    toast.error('Erro ao tentar cadastrar a marca!')
  }
}
</script>

<template>
  <FormComponent
    title="Cadastro de Marcas"
    :initial-form-values="marcaFormValues"
    :form-validation-schema="marcaValidationSchema"
    :handle-submit="handleSubmit"
  >
    <template #fields>
      <FormFieldComponent label="Nome:" type="text" name="nome" />
    </template>
  </FormComponent>
</template>
