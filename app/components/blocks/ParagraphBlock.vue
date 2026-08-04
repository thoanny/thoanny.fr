<template>
  <p v-html="nbsp(block.data.text)"></p>
</template>

<script setup>
import { nbsp } from "~/utils/text.js";
defineProps(["block"]);
</script>
