<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { usePrecoServicoStore } from '@/stores/preco-servico-store'
import { useServicoStore } from '@/stores/servico-store'
import { useTipoVeiculoStore } from '@/stores/tipo-veiculo-store'
import type { PrecoServicoResponse } from '@/models/preco-servico-model'
import type { Servico } from '@/models/servico-model'
import type { TipoVeiculo } from '@/models/tipo-veiculo-model'
import type { SelectOption } from '@/utils/html-select-utils'
import { useAuthStore } from '@/stores/auth-store'

const authStore = useAuthStore()

const serviceCode = ref<number>(1)
const vehicleTypeCode = ref<number>(1)

const precoServicoStore = usePrecoServicoStore()
const servicoStore = useServicoStore()
const tipoVeiculoStore = useTipoVeiculoStore()

const servicesPrice = ref<PrecoServicoResponse | null>(null)
const serviceOptions = ref<Array<SelectOption>>([])
const vehiclesTypeOptions = ref<Array<SelectOption>>([])

async function loadServices() {
  const { data, statusCode } = await servicoStore.fetchServicos()

  if (statusCode.value === 200) {
    return data.value as Array<Servico>
  } else {
    return []
  }
}

async function loadVehiclesTypes() {
  const { data, statusCode } = await tipoVeiculoStore.fetchTiposVeiculo()

  if (statusCode.value === 200) {
    return data.value as Array<TipoVeiculo>
  } else {
    return []
  }
}

async function loadServicesPrices() {
  const { data, statusCode } = await precoServicoStore.getPrecoServico(
    serviceCode.value,
    vehicleTypeCode.value,
  )

  if (statusCode.value === 200) {
    servicesPrice.value = data.value as PrecoServicoResponse
  } else {
    servicesPrice.value = null
  }
}

watch(
  () => [serviceCode.value, vehicleTypeCode.value],
  async () => {
    await loadServicesPrices()
  },
)

onMounted(async () => {
  const services = await loadServices()

  serviceOptions.value = services.map((service: Servico) => ({
    label: service.nome,
    value: Number(service.id),
  }))

  const vehiclesTypes = await loadVehiclesTypes()

  vehiclesTypeOptions.value = vehiclesTypes.map((vehicleType: TipoVeiculo) => ({
    label: vehicleType.nome,
    value: Number(vehicleType.id),
  }))

  await loadServicesPrices()
})
</script>

<template>
  <TableComponent
    title="Listagem de Preços de Serviços"
    button-label="Novo Preço de Serviço"
    :registration-route="
      authStore.loginUser.cargo === 'Cliente' ? null : { name: 'newServicePrice' }
    "
  >
    <template #table>
      <FormFieldComponent
        label="Serviço:"
        name="fkServico"
        variant="select"
        :select-options="serviceOptions"
        :initial-value="serviceCode"
        @update-selected-option="serviceCode = Number($event)"
      />
      <FormFieldComponent
        label="Tipo de Veículo:"
        name="fkTipoVeiculo"
        variant="select"
        :select-options="vehiclesTypeOptions"
        :initial-value="vehicleTypeCode"
        @update-selected-option="vehicleTypeCode = Number($event)"
      />
      <ServicesPricesTableComponent :service-price="servicesPrice" />
    </template>
  </TableComponent>
</template>
