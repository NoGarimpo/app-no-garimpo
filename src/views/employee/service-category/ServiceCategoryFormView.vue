<script setup lang="ts">
import { ref } from 'vue'
import type { CategoriaServico } from '@/models/categoria-servico-model'
import { useCategoriaServicoStore } from '@/stores/categoria-servico-store'
import { toast } from 'vue3-toastify'
import { categoriaServicoValidationSchema } from '@/schemas/categoria-servico-validation-schemas'

const categoriaServicoStore = useCategoriaServicoStore()

const categoriaServicoFormValues = ref<CategoriaServico>({
  nome: '',
  descricao: 'Nenhuma observação.',
  ativa: true,
})

async function handleSubmit(values: object) {
  const { statusCode } = await categoriaServicoStore.createCategoriaServico(
    values as CategoriaServico,
  )

  if (statusCode.value === 201) {
    toast.success('Categoria de serviço cadastrada com sucesso!')
  } else {
    toast.error('Erro ao tentar cadastrar a categoria de serviço!')
  }
}
</script>

<template>
  <FormComponent
    title="Cadastro de Categoria de Serviço"
    :initial-form-values="categoriaServicoFormValues"
    :form-validation-schema="categoriaServicoValidationSchema"
    :handle-submit="handleSubmit"
  >
    <template #fields>
      <FormFieldComponent label="Nome:" type="text" name="nome" />
      <FormFieldComponent label="Descrição:" name="descricao" variant="textarea" />
    </template>
  </FormComponent>
</template>
