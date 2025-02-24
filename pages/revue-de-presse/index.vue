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
  <div class="mx-auto !max-w-4xl">
    <h1 class="mb-6 text-2xl font-bold text-primary text-center sm:text-start">
      Revue de presse
      <span class="whitespace-nowrap">// {{ data.category.name }}</span>
    </h1>

    <div class="flex flex-col gap-4">
      <PressReviewIssue
        v-for="issue in data.issues"
        :key="issue.id"
        :issue="issue"
      />
    </div>
  </div>
</template>
