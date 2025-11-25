<script setup lang="ts">
import { ref } from 'vue'
import { Form } from 'vee-validate'
import { registerValidationSchema } from '@/schemas/auth-validation-schemas'
import type { Register } from '@/models/auth-model'
import { useAuthStore } from '@/stores/auth-store'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const authStore = useAuthStore()

const router = useRouter()

const registerFormValues = ref<Register>({
  nome: '',
  email: '',
  senha: '',
})

async function handleSubmit(payload: object) {
  const { statusCode } = await authStore.register(payload as Register)

  if (statusCode.value === 201) {
    router.push({ name: 'userLogin' })
  } else {
    toast.error('Erro ao realizar o cadastro de usuário!')
  }
}
</script>

<template>
  <section class="w-full flex flex-col items-center justify-center gap-2 p-4">
    <div class="flex items-center justify-center">
      <img class="w-100" src="/logo.svg" alt="Logo" />
    </div>
    <Form
      :initial-values="registerFormValues"
      :validation-schema="registerValidationSchema"
      class="w-1/2 flex flex-col items-stretch justify-center gap-8 rounded-sm p-4"
      @submit="handleSubmit"
    >
      <div class="flex items-center justify-between">
        <h1 class="text-3xl text-primary font-extrabold">Cadastro de Usuário</h1>
        <ButtonComponent
          type="submit"
          label="Cadastrar"
          icon="lucide:plus"
          class="bg-primary text-white rounded-md"
        />
      </div>
      <FormFieldComponent label="Nome:" type="text" name="nome" />
      <FormFieldComponent label="E-mail:" type="email" name="email" />
      <FormFieldComponent label="Senha:" type="password" name="senha" />
      <RouterLink :to="{ name: 'userLogin' }" class="w-full text-primary text-center">
        Já possui um cadastro? Clique aqui.
      </RouterLink>
    </Form>
  </section>
</template>
