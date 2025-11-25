<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Servico } from '@/models/servico-model'
import type { CategoriaServico } from '@/models/categoria-servico-model'
import { useServicoStore } from '@/stores/servico-store'
import { useCategoriaServicoStore } from '@/stores/categoria-servico-store'
import { toast } from 'vue3-toastify'
import type { SelectOption } from '@/utils/html-select-utils'
import { servicoValidationSchema } from '@/schemas/servico-validation-schemas'

const servicoStore = useServicoStore()
const categoriaServicoStore = useCategoriaServicoStore()

const servicoFormValues = ref<Servico>({
  nome: '',
  descricao: 'Nenhuma observação.',
  duracaoMinutos: 0,
  ativo: true,
})

const serviceCategoryOptions = ref<Array<SelectOption>>([])

async function loadServicesCategories() {
  const { data } = await categoriaServicoStore.fetchCategoriasServico()

  if (data.value) {
    serviceCategoryOptions.value = data.value.map((serviceCategory: CategoriaServico) => ({
      label: serviceCategory.nome,
      value: Number(serviceCategory.id),
    }))
  }
}

async function handleSubmit(values: object) {
  const { statusCode } = await servicoStore.createServico(values as Servico)

  if (statusCode.value === 201) {
    toast.success('Serviço cadastrado com sucesso!')
  } else {
    toast.error('Erro ao tentar cadastrar o serviço!')
  }
}

onMounted(async () => {
  await loadServicesCategories()
})
</script>

<template>
  <FormComponent
    title="Cadastro de Serviços"
    :initial-form-values="servicoFormValues"
    :form-validation-schema="servicoValidationSchema"
    :handle-submit="handleSubmit"
  >
    <template #fields>
      <FormFieldComponent label="Nome:" type="text" name="nome" />
      <FormFieldComponent label="Descrição:" name="descricao" variant="textarea" />
      <FormFieldComponent label="Duração (Minutos):" type="number" name="duracaoMinutos" />
      <FormFieldComponent
        label="Categoria de Serviço:"
        name="fkCategoriaServico"
        variant="select"
        :select-options="serviceCategoryOptions"
      />
    </template>
  </FormComponent>
</template>
