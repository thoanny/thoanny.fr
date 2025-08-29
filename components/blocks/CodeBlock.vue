<template>
  <div class="mockup-code">
    <pre>{{ block.data.code }}</pre>
  </div>
</template>

<script setup>
defineProps(["block"]);
</script>
