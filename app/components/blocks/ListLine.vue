<template>
  <component :is="parentTag" :start="start">
    <component :is="childTag" v-for="(item, i) in items">
      <template v-if="style === 'checklist'">
        <IconSquare
          class="inline-flex size-6 align-text-bottom text-primary"
          stroke-width="2"
          v-if="!item.meta.checked"
        />
        <IconCheckbox
          class="inline-flex size-6 align-text-bottom text-primary"
          stroke-width="2"
          v-if="item.meta.checked"
        />
      </template>
      <span v-html="item.content"></span>
      <ListLine :items="item.items" :style="props.style" />
    </component>
  </component>
</template>

<script setup>
import { IconSquare, IconCheckbox } from "@tabler/icons-vue";
const props = defineProps(["items", "style", "start"]);

const parentTag = computed(() => {
  if (props.style === "unordered") {
    return "ul";
  } else if (props.style === "ordered") {
    return "ol";
  } else {
    return "div";
  }
});

const childTag = computed(() => {
  if (["unordered", "ordered"].indexOf(props.style) >= 0) {
    return "li";
  } else {
    return "div";
  }
});
</script>
