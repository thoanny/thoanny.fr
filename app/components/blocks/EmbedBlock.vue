<template>
  <figure class="md:-mx-20 lg:-mx-40 xl:-mx-50 my-6">
    <iframe
      :src="youtubeNoCookieUrl"
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
const props = defineProps(["block"]);
const youtubeNoCookieUrl = props.block.data.embed.replace(
  "https://www.youtube.com/",
  "https://www.youtube-nocookie.com/",
);
</script>
