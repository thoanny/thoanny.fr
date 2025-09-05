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

<style>
@import "~/assets/sass/style.scss";
html,
body {
  height: auto;
  min-height: 100vh;
  @apply bg-base-200;
}

.container {
  @apply mx-auto max-w-6xl relative my-12 px-4;
}

body {
  &.post {
    main {
      > header {
        @screen xl {
          @apply overflow-visible;
          height: 37rem;
        }
      }

      article {
        @screen xl {
          margin-top: calc(-37rem + 8rem);
        }
      }
    }
  }
}
</style>
