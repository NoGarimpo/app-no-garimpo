<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

type buttonType = 'submit' | 'reset' | 'button' | 'link'

const buttonClasses =
  'flex items-center justify-center gap-2 text-lg font-bold px-4 py-2 hover:cursor-pointer'

const props = withDefaults(
  defineProps<{
    class?: string
    type?: buttonType
    label: string
    icon?: string | null
    route?: {
      name: string
    }
  }>(),
  {
    class: '',
    type: 'button',
    icon: null,
  },
)
</script>

<template>
  <button
    v-if="props.type !== 'link'"
    :type="props.type"
    :class="`${buttonClasses} ${props.class}`"
  >
    <Icon v-if="props.icon" :icon="props.icon" />
    {{ props.label }}
  </button>
  <RouterLink v-else :to="{ name: props.route?.name }" :class="`${buttonClasses} ${props.class}`">
    <Icon v-if="props.icon" :icon="props.icon" />
    {{ props.label }}
  </RouterLink>
</template>
