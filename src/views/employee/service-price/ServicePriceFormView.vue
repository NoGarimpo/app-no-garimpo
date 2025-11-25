<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { PrecoServico } from '@/models/preco-servico-model'
import type { Servico } from '@/models/servico-model'
import type { TipoVeiculo } from '@/models/tipo-veiculo-model'
import { usePrecoServicoStore } from '@/stores/preco-servico-store'
import { useServicoStore } from '@/stores/servico-store'
import { useTipoVeiculoStore } from '@/stores/tipo-veiculo-store'
import { toast } from 'vue3-toastify'
import { precoServicoValidationSchema } from '@/schemas/preco-servico-validation-schemas'
import type { SelectOption } from '@/utils/html-select-utils'

const precoServicoStore = usePrecoServicoStore()
const servicoStore = useServicoStore()
const tipoVeiculoStore = useTipoVeiculoStore()

const precoServicoFormValues = ref<PrecoServico>({
  descricao: 'Nenhuma observação.',
  valor: 0,
  ativo: true,
})

const serviceOptions = ref<Array<SelectOption>>([])
const vehiclesTypeOptions = ref<Array<SelectOption>>([])

async function loadServices() {
  const { data } = await servicoStore.fetchServicos()

  if (data.value) {
    serviceOptions.value = data.value.map((brand: Servico) => ({
      label: brand.nome,
      value: Number(brand.id),
    }))
  }
}

async function loadVehiclesTypes() {
  const { data } = await tipoVeiculoStore.fetchTiposVeiculo()

  if (data.value) {
    vehiclesTypeOptions.value = data.value.map((brand: TipoVeiculo) => ({
      label: brand.nome,
      value: Number(brand.id),
    }))
  }
}

async function handleSubmit(values: object) {
  const { statusCode } = await precoServicoStore.createPrecoServico(values as PrecoServico)

  if (statusCode.value === 201) {
    toast.success('Preço de serviço cadastrado com sucesso!')
  } else {
    toast.error('Erro ao tentar cadastrar o preço de serviço!')
  }
}

onMounted(async () => {
  await loadServices()

  await loadVehiclesTypes()
})
</script>

<template>
  <FormComponent
    title="Cadastro de Preço de Serviço"
    :initial-form-values="precoServicoFormValues"
    :form-validation-schema="precoServicoValidationSchema"
    :handle-submit="handleSubmit"
  >
    <template #fields>
      <FormFieldComponent label="Descrição:" name="descricao" variant="textarea" />
      <FormFieldComponent label="Descrição:" type="number" name="valor" />
      <FormFieldComponent
        label="Serviço:"
        name="fkServico"
        variant="select"
        :select-options="serviceOptions"
      />
      <FormFieldComponent
        label="Tipo de Veículo:"
        name="fkTipoVeiculo"
        variant="select"
        :select-options="vehiclesTypeOptions"
      />
    </template>
  </FormComponent>
</template>
