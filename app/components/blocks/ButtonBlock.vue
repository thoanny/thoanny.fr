<template>
  <a
    :href="block.data.url"
    :target="block.data.newTab ? '_blank' : '_self'"
    class="btn btn-primary text-base my-6"
  >
    {{ block.data.title }}
    <IconExternalLink class="size-4" v-if="block.data.newTab" />
  </a>
</template>

<script setup>
import { IconExternalLink } from "@tabler/icons-vue";

defineProps(["block"]);
</script>
