<template>
  <figure>
    <iframe
      :src="block.data.embed"
      frameborder="0"
      class="w-full rounded-lg overflow-hidden aspect-video"
    ></iframe>
    <figcaption
      v-if="block.data.caption"
      class="text-base italic text-center py-2"
    >
      {{ block.data.caption }}
    </figcaption>
  </figure>
</template>

<script setup>
defineProps(["block"]);
</script>
