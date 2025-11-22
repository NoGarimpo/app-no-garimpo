<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'

const props = defineProps<{
  label: string
  type: string
  name: string
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="text-lg text-base-content font-bold" :for="props.name">{{ props.label }}</label>
    <Field
      class="border border-base-content text-base-content p-2"
      :type="props.type"
      :name="props.name"
      :id="props.name"
    />
    <ErrorMessage class="text-md text-error font-bold" :name="props.name" />
  </div>
</template>
