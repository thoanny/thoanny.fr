<template>
  <div
    class="quote-block my-6"
    :class="{ 'text-center': block.data.aligment === 'center' }"
  >
    <blockquote>
      <p v-html="nbsp(block.data.text)"></p>
      <cite v-if="block.data.caption" class="text-base-content/50 font-normal"
        >&mdash; {{ block.data.caption }}</cite
      >
    </blockquote>
  </div>
</template>

<script setup>
import { nbsp } from "~/utils/text.js";
defineProps(["block"]);
</script>

<style scoped>
blockquote {
  border-color: var(--color-primary);
}

blockquote p + cite {
  margin-top: -1rem;
  display: block;
}
</style>
