<script setup>
import { IconCalendarMonth } from "@tabler/icons-vue";

defineProps(["issue"]);
</script>

<template>
  <NuxtLink
    :to="{ name: 'revue-de-presse-id', params: { id: issue.id } }"
    class="flex flex-col md:flex-row gap-x-4 py-3 px-4 items-center group bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden"
  >
    <h2
      class="transition-colors text-lg font-bold flex-1 md:truncate group-hover:text-primary"
    >
      {{ issue.name }}
    </h2>
    <span
      class="flex items-center gap-1 flex gap-2 text-sm uppercase font-semibold text-gray-400 whitespace-nowrap"
    >
      <IconCalendarMonth class="w-6 h-6" stroke-width="1.5" />
      {{
        new Date(Date.parse(issue.published_at))
          .toLocaleDateString("FR-fr", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
          .toUpperCase()
      }}
    </span>
  </NuxtLink>
</template>
