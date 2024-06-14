<script setup>
import IconDiscord from "./icons/IconDiscord.vue";
import IconGithub from "./icons/IconGithub.vue";
import IconLinktree from "./icons/IconLinktree.vue";
import IconInstagram from "./icons/IconInstagram.vue";
import IconTwitch from "./icons/IconTwitch.vue";
import IconTwitter from "./icons/IconTwitter.vue";

const currentYear = new Date().toLocaleDateString("FR-fr", { year: "numeric" });

const socialLinks = [
  {
    id: "twitch",
    url: "https://twitch.tv/thoanny",
    icon: IconTwitch,
  },
  {
    id: "discord",
    url: "https://discord.gg/He3jpV9uvg",
    icon: IconDiscord,
  },
  {
    id: "x-twitter",
    url: "https://twitter.com/thoanny_",
    icon: IconTwitter,
  },
  {
    id: "instagram",
    url: "https://instagram.com/thoanny__",
    icon: IconInstagram,
  },
  {
    id: "github",
    url: "https://github.com/thoanny",
    icon: IconGithub,
  },
  {
    id: "linktree",
    url: "https://linktr.ee/thoanny",
    icon: IconLinktree,
  },
];

const textLinks = [
  {
    id: "mentions-legales",
    url: "/mentions-legales",
    title: "Mentions légales",
  },
  {
    id: "confidentialite",
    url: "/politique-de-confidentialite",
    title: "Confidentialité",
  },
];
</script>

<template>
  <footer class="container !mb-0 pb-12">
    <div class="gap-2 sm:gap-4 flex justify-center sm:justify-end">
      <a
        :href="link.url"
        target="_blank"
        rel="noreferrer"
        class="btn btn-circle btn-outline gap-2 dark:!border-zinc-400 dark:!text-zinc-400 dark:hover:!text-zinc-900 dark:hover:!bg-zinc-400"
        v-for="link in socialLinks"
        :key="link.id"
      >
        <component :is="link.icon" class="h-6 w-6" />
      </a>
    </div>
    <hr class="my-8 border-gray-200 dark:border-zinc-600" />
    <div
      class="flex flex-col sm:flex-row gap-4 justify-center sm:justify-between text-sm"
    >
      <div class="text-center sm:text-left dark:text-zinc-400">
        Fait avec ❤, Tailwind, DaisyUI, Nuxt et Vercel &copy; Thoanny
        {{ currentYear }}
      </div>
      <nav
        class="flex flex-col items-center gap-4 sm:flex-row dark:text-zinc-400"
      >
        <NuxtLink
          :to="link.url"
          class="hover:underline"
          v-for="link in textLinks"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>
