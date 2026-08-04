<template>
  <a
    :href="block.data.file.url"
    class="btn btn-primary text-base my-6"
    :download="block.data.file.name"
    target="_blank"
  >
    <IconDownload class="size-5" />
    {{ block.data.title || "Télécharger" }}
  </a>
</template>

<script setup>
import { IconDownload } from "@tabler/icons-vue";
defineProps(["block"]);
</script>
