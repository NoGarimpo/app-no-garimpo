<script setup lang="ts">
import { Form, type YupSchema } from 'vee-validate'

const props = defineProps<{
  title: string
  initialFormValues: object
  formValidationSchema: YupSchema
  handleSubmit: (values: object) => Promise<void>
}>()
</script>

<template>
  <Form
    class="flex flex-col gap-4"
    :initial-values="props.initialFormValues"
    :validation-schema="props.formValidationSchema"
    @submit="props.handleSubmit"
  >
    <div class="flex items-center justify-between">
      <h1 class="text-3xl text-primary font-extrabold">{{ props.title }}</h1>
      <ButtonComponent
        type="submit"
        label="Salvar"
        icon="lucide:save"
        class="bg-primary rounded-md text-white"
      />
    </div>
    <slot name="fields"></slot>
  </Form>
</template>
