<template>
  <!-- [ ] Extraire de gutemberg.scss -->
  <div
    class="quote-block"
    :class="{ 'text-center': block.data.aligment === 'center' }"
  >
    <blockquote>
      <p v-html="block.data.text"></p>
      <cite v-if="block.data.caption">{{ block.data.caption }}</cite>
    </blockquote>
  </div>
</template>

<script setup>
defineProps(["block"]);
</script>
