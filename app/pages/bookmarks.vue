<template>
  <NuxtLayout>
    <h1 class="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
      <IconBookmark class="h-12 w-12" stroke-width="1.5" />
      Mes favoris
    </h1>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 bookmarks-menu"
    >
      <div v-for="category in categories" :key="category.id">
        <NuxtLink
          :to="{ name: 'bookmarks-slug', params: { slug: category.slug } }"
        >
          <img
            :src="`/img/bookmarks/${category.icon}`"
            alt=""
            v-if="category.icon"
          />
          <span v-else>{{ category.name }}</span>
        </NuxtLink>
      </div>
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import allCategories from "../data/bookmarks_categories.json";
import { IconBookmark } from "@tabler/icons-vue";

const categories = computed(() => {
  return allCategories.sort((a, b) => a.name.localeCompare(b.name));
});

const title = "Favoris de Thoanny";
const description =
  "Liens, outils, applications, cartes interactives et bases de données de divers jeux vidéo.";

defineOgImageComponent("Page", {
  title: title,
  description: description,
});

useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  twitterTitle: () => title,
  description: () => description,
  ogDescription: () => description,
  twitterDescription: () => description,
});
</script>

<style lang="scss" scoped>
.bookmarks-menu {
  a {
    @apply aspect-square bg-neutral text-neutral-content w-full h-full flex items-center justify-center text-center rounded-box font-bold text-lg p-2 leading-5 flex-col gap-2 transition-all;

    &:hover,
    &:focus,
    &.router-link-active {
      @apply bg-base-100 shadow text-base-content;
    }

    &.router-link-active {
      @apply text-base-content shadow-lg;
    }

    img {
      @apply grayscale contrast-0 brightness-100;
    }

    &:hover,
    &:focus,
    &.router-link-active {
      img {
        @apply grayscale-0 contrast-100 brightness-100;
      }
    }
  }
}
</style>
