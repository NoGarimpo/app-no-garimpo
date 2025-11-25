<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type { Veiculo } from '@/models/veiculo-model'
import { useAuthStore } from '@/stores/auth-store'
import { useVeiculoStore } from '@/stores/veiculo-store'
import { toast } from 'vue3-toastify'
import { veiculoValidationSchema } from '@/schemas/veiculo-validation-schemas'
import { useTipoVeiculoStore } from '@/stores/tipo-veiculo-store'
import { useMarcaStore } from '@/stores/marca-store'
import { useModeloStore } from '@/stores/modelo-store'
import type { SelectOption } from '@/utils/html-select-utils'
import type { TipoVeiculo } from '@/models/tipo-veiculo-model'
import type { Marca } from '@/models/marca-model'
import type { Modelo } from '@/models/modelo-model'

const brandCode = ref<number>(0)

const authStore = useAuthStore()

const veiculoStore = useVeiculoStore()

const tipoVeiculoStore = useTipoVeiculoStore()
const marcaStore = useMarcaStore()
const modeloStore = useModeloStore()

const veiculoFormValues = ref<Veiculo>({
  placa: '',
  ano: undefined,
  foto: '',
  ativo: true,
  fkCliente: authStore.loginUser.id,
})

const vehicleTypeOptions = ref<Array<SelectOption>>([])
const brandOptions = ref<Array<SelectOption>>([])
const modelOptions = ref<Array<SelectOption>>([])

async function loadVehiclesTypes() {
  const { data } = await tipoVeiculoStore.fetchTiposVeiculo()

  if (data.value) {
    vehicleTypeOptions.value = data.value.map((vehicleType: TipoVeiculo) => ({
      label: vehicleType.descricao,
      value: Number(vehicleType.id),
    }))
  }
}

async function loadBrands() {
  const { data } = await marcaStore.fetchMarcas()

  if (data.value) {
    brandOptions.value = data.value.map((brand: Marca) => ({
      label: brand.nome,
      value: Number(brand.id),
    }))
  }
}

async function loadModels() {
  const { data } = await modeloStore.fetchModelos(brandCode.value)

  if (data.value) {
    modelOptions.value = data.value.map((model: Modelo) => ({
      label: model.nome,
      value: Number(model.id),
    }))
  }
}

async function handleSubmit(values: object) {
  const { statusCode } = await veiculoStore.createVeiculo(values as Veiculo)

  if (statusCode.value === 201) {
    toast.success('Veículo cadastrado com sucesso!')
  } else {
    toast.error('Erro ao tentar cadastrar o veículo!')
  }
}

watch(
  () => brandCode.value,
  () => {
    loadModels()
  },
)

onMounted(async () => {
  await loadVehiclesTypes()

  await loadBrands()
})
</script>

<template>
  <FormComponent
    title="Cadastro de Veículos"
    :initial-form-values="veiculoFormValues"
    :form-validation-schema="veiculoValidationSchema"
    :handle-submit="handleSubmit"
  >
    <template #fields>
      <FormFieldComponent label="Placa:" type="text" name="placa" />
      <FormFieldComponent label="Ano:" type="number" name="ano" />
      <FormFieldComponent label="Foto:" type="file" name="foto" />
      <FormFieldComponent
        label="Tipo de Veículo:"
        name="fkTipoVeiculo"
        variant="select"
        :select-options="vehicleTypeOptions"
      />
      <FormFieldComponent
        label="Marca:"
        name="fkMarca"
        variant="select"
        :select-options="brandOptions"
        @update-selected-option="brandCode = Number($event)"
      />
      <FormFieldComponent
        label="Modelo:"
        name="fkModelo"
        variant="select"
        :select-options="modelOptions"
      />
    </template>
  </FormComponent>
</template>
