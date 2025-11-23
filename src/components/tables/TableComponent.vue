<script setup lang="ts">
const props = defineProps<{
  title: string
  module: string
  registrationRoute: { name: string }
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl text-primary font-extrabold">{{ props.title }}</h1>
      <ButtonComponent
        type="link"
        :label="`Nova ${props.module}`"
        icon="lucide:plus"
        :route="props.registrationRoute"
        class="bg-primary rounded-md text-white"
      />
    </div>
    <slot name="table"></slot>
  </div>
</template>
