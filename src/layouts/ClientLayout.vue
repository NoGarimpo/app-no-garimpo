<script setup lang="ts">
import { ref } from 'vue'
import type { MenuItem } from '@/models/menu-item-model'

const menuItems = ref<Array<MenuItem>>([
  {
    label: 'Meus Agendamentos',
    icon: 'lucide:calendar',
    route: { name: 'schedulings' },
  },
  {
    label: 'Meus Veículos',
    icon: 'lucide:car',
    route: { name: 'clientVehicles' },
  },
  {
    label: 'Preços de Serviços',
    icon: 'lucide:dollar-sign',
    route: { name: 'listServicesPrices' },
  },
])
</script>

<template>
  <div class="w-full h-full flex">
    <nav class="w-84 h-full flex flex-col gap-4 border-r border-base-content p-4">
      <img class="border border-base-content rounded-md" src="/logo.svg" alt="Logo" />
      <MenuItemComponent
        :item="{ label: 'Home', icon: 'lucide:home', route: { name: 'clientHome' } }"
      />
      <p>Menu</p>
      <MenuItemComponent v-for="(item, index) in menuItems" :key="index" :item="item" />
    </nav>
    <RouterView class="w-full h-full p-4" />
  </div>
</template>
