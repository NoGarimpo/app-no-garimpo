<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Servico } from '@/models/servico-model'
import { useServicoStore } from '@/stores/servico-store'

const props = withDefaults(
  defineProps<{
    initialOptions?: Array<number>
  }>(),
  {
    initialOptions: () => [],
  },
)

const emits = defineEmits<{
  (e: 'update:modelValue', values: Array<number>): void
}>()

const servicoStore = useServicoStore()

const services = ref<Array<Servico>>([])

const selectedOptions = ref<Array<number>>([])

async function loadServices() {
  const { data } = await servicoStore.fetchServicos()

  if (data.value) {
    services.value = data.value
  }
}

function handleClick(option: number) {
  const optionIndex = selectedOptions.value.findIndex((id: number) => id === option)

  if (optionIndex === -1) {
    selectedOptions.value.push(option)
  } else {
    selectedOptions.value.splice(optionIndex, 1)
  }

  emits('update:modelValue', selectedOptions.value)
}

onMounted(async () => {
  selectedOptions.value = props.initialOptions

  await loadServices()
})
</script>

<template>
  <div class="flex flex-col gap-2 overflow-x-auto">
    <label class="text-lg text-base-content font-bold">Serviços:</label>
    <div class="bg-base-100 border border-base-content rounded-box">
      <table class="table table-lg">
        <thead class="text-lg text-base-content font-bold">
          <tr>
            <th></th>
            <th>Nº Linha</th>
            <th>Nome</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(service, index) in services"
            :key="service.id"
            class="cursor-pointer"
            @click="handleClick(Number(service.id))"
          >
            <td>
              <input
                type="checkbox"
                :checked="selectedOptions.some((id) => id === Number(service.id))"
                @click.prevent.stop
              />
            </td>
            <td>{{ index + 1 }}</td>
            <td>{{ service.nome }}</td>
            <td>{{ service.descricao }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
