<script setup lang="ts">
import { ref } from 'vue'
import type { TipoVeiculo } from '@/models/tipo-veiculo-model'
import { useTipoVeiculoStore } from '@/stores/tipo-veiculo-store'
import { toast } from 'vue3-toastify'
import { tipoVeiculosValidationSchema } from '@/schemas/tipo-veiculos-validation-schemas'

const tipoVeiculoStore = useTipoVeiculoStore()

const tipoVeiculosFormValues = ref<TipoVeiculo>({
  nome: '',
  descricao: 'Nenhuma observação.',
  ativo: true,
})

async function handleSubmit(values: object) {
  const { statusCode } = await tipoVeiculoStore.createTipoVeiculo(values as TipoVeiculo)

  if (statusCode.value === 201) {
    toast.success('Tipo de veículo cadastrado com sucesso!')
  } else {
    toast.error('Erro ao tentar cadastrar o tipo de veículo!')
  }
}
</script>

<template>
  <FormComponent
    title="Cadastro de Tipos de Veículos"
    :initial-form-values="tipoVeiculosFormValues"
    :form-validation-schema="tipoVeiculosValidationSchema"
    :handle-submit="handleSubmit"
  >
    <template #fields>
      <FormFieldComponent label="Nome:" type="text" name="nome" />
      <FormFieldComponent label="Descrição:" name="descricao" variant="textarea" />
    </template>
  </FormComponent>
</template>
