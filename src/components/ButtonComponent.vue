<script setup lang="ts">
import { Icon } from '@iconify/vue'

const buttonClasses =
  'flex items-center justify-center gap-2 font-bold px-4 py-1 hover:cursor-pointer'

const props = withDefaults(
  defineProps<{
    class?: string
    type?: 'submit' | 'reset' | 'button' | 'link'
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
