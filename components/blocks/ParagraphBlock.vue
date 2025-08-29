<template>
  <p v-html="block.data.text"></p>
</template>

<script setup>
defineProps(["block"]);
</script>
