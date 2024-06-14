<script setup>
import { stripExcerpt } from "~/utils/strip-html.js";

import IconCalendar from "./icons/IconCalendar.vue";
import IconFolder from "./icons/IconFolder.vue";

defineProps(["post"]);
</script>

<template>
  <NuxtLink
    :to="{ name: 'uri', params: { uri: post.slug } }"
    class="flex flex-col md:flex-row gap-4 mt-6 items-center group bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden md:pr-8"
  >
    <figure
      v-if="post.featuredImage"
      class="w-full md:w-48 h-full shrink-0 self-start"
    >
      <img
        :src="
          post.featuredImage?.node.mediaDetails.sizes
            ? post.featuredImage.node.mediaDetails.sizes[0].sourceUrl
            : post.featuredImage.node.mediaItemUrl
        "
        class="object-cover w-full h-full aspect-video md:aspect-square"
        :alt="
          post.featuredImage.node.altText
            ? post.featuredImage.node.altText
            : post.title
        "
        loading="lazy"
        :width="
          post.featuredImage?.node.mediaDetails.sizes
            ? post.featuredImage.node.mediaDetails.sizes[0].width
            : post.featuredImage.node.mediaDetails.width
        "
        :height="
          post.featuredImage?.node.mediaDetails.sizes
            ? post.featuredImage.node.mediaDetails.sizes[0].height
            : post.featuredImage.node.mediaDetails.height
        "
      />
    </figure>
    <div class="w-full flex flex-col gap-2 dark:text-gray-200 min-w-0 px-5">
      <h2
        class="transition-colors text-lg font-bold md:mt-4 w-full md:truncate group-hover:text-primary"
      >
        {{ post.title }}
      </h2>
      <div
        class="line-clamp-none md:line-clamp-2"
        v-html="stripExcerpt(post.excerpt)"
      ></div>

      <div
        class="flex flex-wrap gap-4 text-sm uppercase font-semibold text-gray-400 mb-4"
      >
        <span class="date flex items-center gap-1">
          <IconCalendar class="w-5 h-5" />
          {{
            new Date(Date.parse(post.date))
              .toLocaleDateString("FR-fr", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
              .toUpperCase()
          }}
        </span>

        <span class="flex items-center gap-1" v-if="post.categories">
          <IconFolder class="h-5 w-5" />
          <span v-for="category in post.categories.nodes" :key="category.id">
            {{ category.name }}
          </span>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
