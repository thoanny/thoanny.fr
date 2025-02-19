<script setup>
const { data } = await useFetch(
  "https://api.thoanny.fr/press-reviews/categories/1"
);

useSeoMeta({
  title: "Revue de presse",
  ogTitle: "Revue de presse",
  description:
    "Chaque semaine, retrouvez une sélection d'articles dans ma revue de presse jeux vidéo.",
  ogDescription:
    "Chaque semaine, retrouvez une sélection d'articles dans ma revue de presse jeux vidéo.",
});
</script>

<template>
  <div class="container mx-auto !max-w-4xl">
    <h1 class="mb-6 text-2xl font-bold text-primary text-center md:text-start">
      Revue de presse
      <span class="whitespace-nowrap">// {{ data.category.name }}</span>
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div class="flex flex-col gap-2 md:col-span-2">
        <div class="sticky top-4 flex gap-2 flex-col">
          <NuxtLink
            v-for="issue in data.issues"
            :key="issue.id"
            class="btn btn-primary rounded-full btn-sm"
            :to="{
              name: 'revue-de-presse-id',
              params: { id: issue.id },
            }"
          >
            {{ issue.name }}
          </NuxtLink>
        </div>
      </div>
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
a.btn:not(.router-link-active) {
  @apply btn-outline;
}
</style>
