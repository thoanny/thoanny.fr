<template>
  <div
    class="bg-base-100 rounded-box overflow-x-auto shadow-lg bg-base-100 whitespace-nowrap my-6"
    :class="{ 'md:-mx-20 lg:-mx-40 xl:-mx-50': block.data.stretched }"
  >
    <table class="table table-lg">
      <thead v-if="headings">
        <tr>
          <th v-for="(value, key) in headings" :key="key">{{ value }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(line, l) in body" :key="l">
          <td v-for="(row, r) in line" :key="r">{{ row }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps(["block"]);

const headings = computed(() => {
  return props.block.data.withHeadings ? props.block.data.content[0] : null;
});

const body = computed(() => {
  return props.block.data.content.slice(props.block.data.withHeadings ? 1 : 0);
});
</script>
