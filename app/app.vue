<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Thoanny` : "Thoanny";
  },
});

const title = "Blog de Thoanny";
const description =
  "Suivez l’actualité de mes projets, découvrez des articles sur le streaming, les jeux vidéo, des recettes de cuisine ainsi que des trucs et astuces.";

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

<template>
  <main class="">
    <AppHeader />
    <div class="container">
      <NuxtLoadingIndicator :height="4" color="#333333" />
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </div>
    <AppFooter />
  </main>
</template>
