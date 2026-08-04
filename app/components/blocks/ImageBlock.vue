<template>
  <figure
    class="image-block"
    :class="{
      'md:-mx-20 lg:-mx-40 xl:-mx-50': block.data.stretched,
      'bg-primary p-4 rounded-lg': block.data.withBackground,
    }"
  >
    <img
      :src="block.data.file.url"
      class="mx-auto rounded-lg"
      :class="{
        'border-2 border-primary': block.data.withBorder,
      }"
      loading="lazy"
      alt=""
    />
    <figcaption v-if="block.data.caption" class="text-base italic text-center">
      {{ block.data.caption }}
    </figcaption>
  </figure>
</template>

<script setup>
defineProps(["block"]);
</script>
