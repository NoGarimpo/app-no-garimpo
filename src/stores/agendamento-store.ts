import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Agendamento } from '@/models/agendamento-model'

const endpoint: string = ''

const useAgendamentoStore = defineStore('Agendamento', {
  //
})

export { useAgendamentoStore }
