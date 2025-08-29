<template>
  <figure
    class="image-block"
    :class="{
      'is-stretched': block.data.stretched,
      'bg-primary p-4 rounded-lg': block.data.withBackground,
    }"
  >
    <img
      :src="block.data.file.url"
      class="mx-auto rounded-lg"
      :class="{
        'border-2 border-primary': block.data.withBorder,
      }"
      alt=""
    />
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
