<script setup>
import {
  IconStar,
  IconCalendarMonth,
  IconFolderOpen,
  IconArrowNarrowRight,
} from "@tabler/icons-vue";

defineProps(["post"]);
</script>

<template>
  <div>
    <div
      class="hero aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-xl"
    >
      <img
        :src="post.imageUrl"
        alt=""
        class="w-full h-full object-cover aspect-square md:aspect-video blur-sm z-10"
        v-if="post.imageUrl"
      />
      <div class="hero-overlay bg-black/60 z-20"></div>
      <div class="hero-content text-center text-base-300 z-30">
        <div class="max-w-2xl px-4">
          <div
            class="flex justify-center items-center gap-2 opacity-75 uppercase font-semibold mb-2"
          >
            <IconStar class="w-6 h-6" stroke-width="1.5" />
            Dernier article
            <IconStar class="w-6 h-6" stroke-width="1.5" />
          </div>
          <h1
            class="mb-3 text-2xl md:text-4xl font-bold line-clamp-2 sm:line-clamp-none"
          >
            {{ post.title }}
          </h1>
          <div
            class="flex flex-col sm:flex-row gap-1 sm:gap-4 mb-4 justify-center items-center opacity-75"
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
            <span
              class="categories flex items-center gap-1"
              v-if="post.categories"
            >
              <IconFolderOpen class="h-6 w-6" stroke-width="1.5" />
              <NuxtLink
                :to="'/categories/' + category.slug"
                v-for="category in post.categories"
                :key="category.id"
                >{{ category.name }}</NuxtLink
              >
            </span>
          </div>
          <div
            class="mb-5 text-lg line-clamp-3 sm:line-clamp-none"
            v-html="post.excerpt"
            v-if="post.excerpt"
          ></div>
          <NuxtLink :to="post.slug" class="btn btn-primary">
            Lire l'article
            <IconArrowNarrowRight class="h-6 w-6" stroke-width="1.5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
