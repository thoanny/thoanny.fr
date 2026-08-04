<template>
  <component :is="`h${block.data.level || 2}`">{{
    nbsp(block.data.text)
  }}</component>
</template>

<script setup>
import { nbsp } from "~/utils/text.js";
defineProps(["block"]);
</script>
