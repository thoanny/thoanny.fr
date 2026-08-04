<template>
  <ListLine
    :items="block.data.items"
    :style="block.data.style"
    :start="block.data.meta.start || 1"
    :class="[`list-${block.data.style} my-6`]"
  />
</template>

<script setup>
import ListLine from "./ListLine.vue";

const props = defineProps(["block"]);
</script>
