<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { AgendamentoPayload } from '@/models/agendamento-model'
import { useAuthStore } from '@/stores/auth-store'
import { useAgendamentoStore } from '@/stores/agendamento-store'
import { toast } from 'vue3-toastify'
import { agendamentoValidationSchema } from '@/schemas/agendamento-validation-schemas'
import { useVeiculoStore } from '@/stores/veiculo-store'
import { useServicoStore } from '@/stores/servico-store'
import type { SelectOption } from '@/utils/html-select-utils'
import type { Veiculo } from '@/models/veiculo-model'
import type { Servico } from '@/models/servico-model'

import SelectServicesComponent from '@/components/forms/SelectServicesComponent.vue'

const authStore = useAuthStore()

const agendamentoStore = useAgendamentoStore()

const veiculoStore = useVeiculoStore()
const servicoStore = useServicoStore()

const agendamentoFormValues = ref<AgendamentoPayload>({
  dataRequisicao: String(new Date().toISOString().split('T')[0]),
  observacoes: '',
  fkCliente: authStore.loginUser.id,
  servicos: [],
})

const vehicleOptions = ref<Array<SelectOption>>([])
const serviceOptions = ref<Array<SelectOption>>([])

async function loadVehicles() {
  const { data } = await veiculoStore.fetchVeiculos()

  if (data.value) {
    vehicleOptions.value = data.value.map((vehicleType: Veiculo) => ({
      label: vehicleType.placa,
      value: Number(vehicleType.id),
    }))
  }
}

async function loadServices() {
  const { data } = await servicoStore.fetchServicos()

  if (data.value) {
    serviceOptions.value = data.value.map((brand: Servico) => ({
      label: brand.nome,
      value: Number(brand.id),
    }))
  }
}

async function handleSubmit(values: object) {
  const agendamento: AgendamentoPayload = values as AgendamentoPayload

  agendamento.servicos = agendamentoFormValues.value.servicos

  const { statusCode } = await agendamentoStore.createAgendamento(agendamento)

  if (statusCode.value === 201) {
    toast.success('Agendamento cadastrado com sucesso!')
  } else {
    toast.error('Erro ao tentar cadastrar o agendamento!')
  }
}

onMounted(async () => {
  await loadVehicles()

  await loadServices()
})
</script>

<template>
  <FormComponent
    title="Cadastro de Agendamentos"
    :initial-form-values="agendamentoFormValues"
    :form-validation-schema="agendamentoValidationSchema"
    :handle-submit="handleSubmit"
  >
    <template #fields>
      <FormFieldComponent label="Observações:" name="observacoes" variant="textarea" />
      <FormFieldComponent
        label="Veículo:"
        name="fkVeiculo"
        variant="select"
        :select-options="vehicleOptions"
      />

      <SelectServicesComponent
        :initial-options="agendamentoFormValues.servicos"
        @update:model-value="agendamentoFormValues.servicos = $event"
      />
    </template>
  </FormComponent>
</template>
