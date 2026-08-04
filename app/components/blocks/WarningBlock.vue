<template>
  <div
    class="warning-block py-6 px-8 rounded-box shadow-lg bg-base-100 md:-mx-20 lg:-mx-40 xl:-mx-50 my-6"
  >
    <div class="font-bold text-black text-xl" v-if="block.data.title">
      {{ nbsp(block.data.title) }}
    </div>
    <div v-if="block.data.message" v-html="nbsp(block.data.message)"></div>
  </div>
</template>

<script setup>
import { nbsp } from "~/utils/text.js";
defineProps(["block"]);
</script>
