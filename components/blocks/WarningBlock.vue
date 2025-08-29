<template>
  <div class="warning-block py-6 px-8 rounded-box shadow-lg bg-base-100">
    <div class="font-bold text-black text-xl" v-if="block.data.title">
      {{ block.data.title }}
    </div>
    <div v-if="block.data.message" v-html="block.data.message"></div>
  </div>
</template>

<script setup>
defineProps(["block"]);
</script>
