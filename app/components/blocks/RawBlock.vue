<template>
  <div v-html="block.data.html"></div>
</template>

<script setup>
defineProps(["block"]);
</script>
