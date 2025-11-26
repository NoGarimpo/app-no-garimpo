<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAgendamentoStore } from '@/stores/agendamento-store'
import type { Agendamento } from '@/models/agendamento-model'

const agendamentoStore = useAgendamentoStore()

const schedulings = ref<Array<Agendamento>>([])

onMounted(async () => {
  const { data, statusCode } = await agendamentoStore.fetchTodayAgendamentos()

  if (statusCode.value === 200) {
    schedulings.value = data.value as Array<Agendamento>
  } else {
    schedulings.value = []
  }
})
</script>

<template>
  <TableComponent
    title="Agendamentos de Hoje"
    button-label="Novo Agendamento"
    :registration-route="null"
  >
    <template #table>
      <SchedulingsTableComponent :schedulings="schedulings" :contain-actions="true" />
    </template>
  </TableComponent>
</template>
