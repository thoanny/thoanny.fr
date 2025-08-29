<script setup>
import { IconCalendarMonth, IconFolderOpen } from "@tabler/icons-vue";
import { stripExcerpt } from "~/utils/strip-html.js";

defineProps(["post"]);
</script>

<template>
  <NuxtLink
    :to="{ name: 'uri', params: { uri: post.slug } }"
    class="flex flex-col md:flex-row gap-x-4 mt-6 items-center group bg-base-100 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden md:pr-8"
  >
    <figure
      v-if="post.imageUrl"
      class="md:min-w-[18rem] md:w-1/3 shrink-0 aspect-video"
    >
      <img
        :src="post.imageUrl"
        class="object-cover w-full h-full"
        alt=""
        loading="lazy"
      />
    </figure>
    <div class="w-full flex flex-col gap-2 min-w-0 px-5">
      <h2
        class="transition-colors text-lg font-bold mt-4 w-full md:truncate group-hover:text-primary"
      >
        {{ post.title }}
      </h2>
      <div
        class="line-clamp-none md:line-clamp-2"
        v-html="stripExcerpt(post.excerpt)"
        v-if="post.excerpt"
      ></div>

      <div
        class="flex flex-wrap gap-4 text-sm uppercase font-semibold text-base-content/50 mb-4"
      >
        <span class="date flex items-center gap-1">
          <IconCalendarMonth class="w-6 h-6" stroke-width="1.5" />
          {{
            new Date(Date.parse(post.publishedAt))
              .toLocaleDateString("FR-fr", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
              .toUpperCase()
          }}
        </span>

        <span class="flex items-center gap-1" v-if="post.categories">
          <IconFolderOpen class="h-6 w-6" stroke-width="1.5" />
          <span v-for="category in post.categories" :key="category.id">
            {{ category.name }}
          </span>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
