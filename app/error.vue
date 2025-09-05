<script setup>
defineProps(["error"]);
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div
    class="flex items-center justify-center flex-col p-8 gap-6 w-[100vw] h-[100dvh]"
  >
    <div
      class="uppercase text-primary text-9xl font-bold tracking-wide leading-none"
    >
      {{ error.statusCode }}
    </div>
    <div class="uppercase font-semibold text-xl tracking-widest leading-none">
      {{ error.statusMessage }}
    </div>
    <button
      type="button"
      @click="handleError"
      class="btn btn-primary gap-2 mt-4"
    >
      Retourner à l'accueil
    </button>
  </div>
</template>
