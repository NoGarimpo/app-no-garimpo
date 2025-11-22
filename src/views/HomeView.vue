<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <section class="w-full h-full flex flex-col items-center justify-center gap-2">
    <img class="w-140" src="/favicon.svg" alt="Logo" />
    <div class="flex items-center justify-center gap-4">
      <ButtonComponent
        class="bg-transparent border border-black rounded-full hover:bg-primary hover:border-base-100 hover:text-white"
        type="link"
        label="Cadastro"
        :route="{ name: 'userRegister' }"
      />
      <ButtonComponent
        class="bg-primary border border-base-100 rounded-full text-white"
        type="link"
        label="Login"
        :route="{ name: 'userLogin' }"
      />
    </div>
  </section>
</template>
