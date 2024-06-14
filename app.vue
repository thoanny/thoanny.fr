<template>
  <main class="dark:bg-zinc-900 bg-gray-100">
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
@import "~/assets/sass/gutemberg.scss";
html,
body {
  height: 100%;
  min-height: 100vh;
  @apply bg-gray-100;
}

.container {
  @apply mx-auto max-w-6xl relative my-12 px-4;
}

body {
  &.post,
  &.twitch {
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
