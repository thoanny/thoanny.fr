<script setup>
import { IconCalendarMonth, IconLock } from "@tabler/icons-vue";

defineProps(["post"]);
</script>

<template>
  <a
    :href="`https://patreon.com${post.attributes.url}`"
    target="_blank"
    class="flex flex-col md:flex-row gap-3 items-center post-block bg-white dark:bg-zinc-800 shadow-lg rounded-2xl overflow-hidden group"
  >
    <div
      class="w-full flex gap-4 dark:text-gray-200 min-w-0 px-4 py-3 justify-between items-center"
    >
      <h2
        class="text-sm md:text-base font-bold flex-1 group-hover:text-primary flex gap-2 items-center"
      >
        <IconLock
          class="w-4 md:w-5 h-4 md:h-5 shrink-0"
          stroke-width="1.5"
          v-if="!post.attributes.is_public"
        />
        <span class="line-clamp-2 sm:line-clamp-1">{{
          post.attributes.title
        }}</span>
      </h2>

      <div class="metas">
        <span class="date flex items-center gap-1">
          <IconCalendarMonth class="w-4 md:w-5 h-4 md:h-5" stroke-width="1.5" />
          {{
            new Date(Date.parse(post.attributes.published_at))
              .toLocaleDateString("FR-fr", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
              .toUpperCase()
          }}
        </span>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.metas {
  @apply flex items-center gap-4 text-xs md:text-sm uppercase font-semibold text-gray-400;
}
</style>
