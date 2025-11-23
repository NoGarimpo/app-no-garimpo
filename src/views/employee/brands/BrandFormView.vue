<script setup lang="ts">
import { ref } from 'vue'
import { Form } from 'vee-validate'
import type { Marca } from '@/models/marca-model'
import { useMarcaStore } from '@/stores/marca-store'
import { toast } from 'vue3-toastify'

const marcaStore = useMarcaStore()

const marcaFormValues = ref<Marca>({
  nome: '',
  ativa: true,
})

async function handleSubmit(values: object) {
  const { statusCode } = await marcaStore.createMarca(values as Marca)

  if (statusCode.value === 201) {
    toast.success('Marca cadastrada com sucesso!')
  } else {
    toast.error('Erro ao tentar cadastrar a marca!')
  }
}
</script>

<template>
  <Form class="flex flex-col gap-4" :initial-values="marcaFormValues" @submit="handleSubmit">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl text-primary font-extrabold">Cadastro de Marcas</h1>
      <ButtonComponent
        type="submit"
        label="Cadastrar"
        icon="lucide:plus"
        class="bg-primary rounded-md text-white"
      />
    </div>

    <FormFieldComponent label="Nome:" type="text" name="nome" />
  </Form>
</template>
