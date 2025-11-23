<script setup lang="ts">
import type { MenuItem } from '@/models/menu-item-model'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  item: MenuItem
}>()
</script>

<template>
  <RouterLink
    :to="props.item.route"
    class="w-full h-10 flex items-center justify-start gap-2 border border-base-content rounded-md p-4 hover:bg-primary hover:border-base-100 hover:text-white"
  >
    <Icon :icon="props.item.icon" />
    <p>{{ props.item.label }}</p>
  </RouterLink>
</template>
