<script setup lang="ts">
import { ref } from 'vue'
import { Form } from 'vee-validate'
import { loginValidationSchema } from '@/schemas/auth-validation-schemas'
import type { Login } from '@/models/auth-model'
import { useAuthStore } from '@/stores/auth-store'

import FormFieldComponent from '@/components/FormFieldComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { toast } from 'vue3-toastify'

const authStore = useAuthStore()

const loginFormValues = ref<Login>({
  email: '',
  senha: '',
})

async function handleSubmit(payload: object) {
  await authStore.login(payload as Login)

  if (authStore.loginToken !== '') {
    toast.success('Login realizado com sucesso!')
  } else {
    toast.error('Erro ao realizar o login!')
  }
}
</script>

<template>
  <section class="w-full flex flex-col items-center justify-center gap-2 p-4">
    <div class="flex items-center justify-center">
      <img class="w-100" src="/favicon.svg" alt="Logo" />
    </div>
    <Form
      :initial-values="loginFormValues"
      :validation-schema="loginValidationSchema"
      class="w-1/2 flex flex-col items-stretch justify-center gap-8 rounded-sm p-4"
      @submit="handleSubmit"
    >
      <div class="flex items-center justify-between">
        <h1 class="text-3xl text-primary font-extrabold">Login de Usuário</h1>
        <ButtonComponent
          type="submit"
          label="Entrar"
          icon="lucide:log-in"
          class="bg-primary text-white rounded-md"
        />
      </div>
      <FormFieldComponent label="E-mail:" type="email" name="email" />
      <FormFieldComponent label="Senha:" type="password" name="senha" />
      <RouterLink :to="{ name: 'userRegister' }" class="w-full text-primary text-center">
        Não possui um cadastro? Clique aqui.
      </RouterLink>
    </Form>
  </section>
</template>
