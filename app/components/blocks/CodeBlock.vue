<template>
  <div class="mockup-code my-6">
    <pre>{{ block.data.code }}</pre>
  </div>
</template>

<script setup>
defineProps(["block"]);
</script>
