<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'
import type { SelectOption } from '@/utils/html-select-utils'

const props = withDefaults(
  defineProps<{
    label: string
    type?: string
    name: string
    initialValue?: string | number
    variant?: 'default' | 'select' | 'textarea'
    selectOptions?: Array<SelectOption>
  }>(),
  {
    type: 'text',
    variant: 'default',
    selectOption: () => [],
  },
)

const emits = defineEmits<{
  (e: 'updateSelectedOption', value: string | number): void
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="text-lg text-base-content font-bold" :for="props.name">{{ props.label }}</label>
    <Field
      v-if="props.variant === 'select'"
      class="border border-base-content rounded-sm text-base-content p-2"
      :as="props.variant"
      :name="props.name"
      :id="props.name"
      :value="props.initialValue"
      @change="emits('updateSelectedOption', $event.target.value)"
    >
      <option v-for="option in props.selectOptions" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </Field>
    <Field
      v-else-if="props.variant === 'textarea'"
      class="border border-base-content rounded-sm text-base-content p-2"
      :as="props.variant"
      :name="props.name"
      :id="props.name"
      :value="props.initialValue"
    />
    <Field
      v-else
      class="border border-base-content rounded-sm text-base-content p-2"
      :type="props.type"
      :name="props.name"
      :id="props.name"
      :value="props.initialValue"
    />
    <ErrorMessage class="text-md text-error font-bold" :name="props.name" />
  </div>
</template>
