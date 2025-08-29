<template>
  <component :is="`h${block.data.level || 2}`">{{ block.data.text }}</component>
</template>

<script setup>
defineProps(["block"]);
</script>
