<script setup>
import {
  IconNotebook,
  IconBrandTwitch,
  IconFlame,
  IconSearch,
  IconBrandPatreon,
  IconBrandPatreonFilled,
  IconBookmark,
} from "@tabler/icons-vue";

const modal = ref();

const links = [
  {
    id: "blog",
    to: { name: "index" },
    title: "Blog",
    hideTitle: false,
    icon: IconNotebook,
  },
  {
    id: "bookmarks",
    to: { name: "bookmarks" },
    title: "Favoris",
    hideTitle: false,
    icon: IconBookmark,
  },
  {
    id: "twitch",
    to: { name: "twitch" },
    title: "Twitch",
    hideTitle: false,
    icon: IconBrandTwitch,
  },
  {
    id: "t-potes",
    to: { name: "t-potes" },
    title: "T-potes",
    hideTitle: false,
    icon: IconFlame,
  },
  {
    id: "chercher",
    to: { name: "chercher" },
    title: "Chercher",
    hideTitle: true,
    icon: IconSearch,
  },
];
</script>

<template>
  <header
    class="bg-primary dark:bg-accent relative h-24 sm:h-32 px-4 overflow-hidden"
  >
    <div class="container h-full !my-0">
      <div
        class="logo relative h-28 -top-2 left-0 opacity-25 w-4/5 mix-blend-soft-light sm:h-36 sm:w-auto lg:absolute"
      >
        <img src="@/assets/img/logo.svg" class="w-full h-full" alt="Thoanny" />
      </div>
      <nav
        class="absolute top-0 right-0 hidden gap-4 h-32 items-center font-semibold text-white uppercase tracking-wider min-[990px]:flex"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.id"
          :to="link.to"
          class="flex gap-1 items-center group"
        >
          <component :is="link.icon" class="h-7 w-7" stroke-width="1.75" />
          <span
            class="group-hover:underline group-[.router-link-active]:underline underline-offset-2 decoration-2"
            v-if="!link.hideTitle"
          >
            {{ link.title }}
          </span>
        </NuxtLink>

        <a
          class="btn bg-white border-white text-black hover:text-white rounded-full"
          href="https://www.patreon.com/thoanny"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandPatreonFilled class="h-7 w-7 text-primary" />
          Me soutenir
        </a>
      </nav>
    </div>
  </header>

  <button
    type="button"
    @click="modal.showModal()"
    class="btn bg-white btn-circle drawer-button min-[990px]:hidden absolute top-6 sm:top-10 right-4 border border-primary shadow"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  </button>

  <dialog ref="modal" class="modal">
    <div class="modal-box p-0 text-lg sm:!max-w-xs dark:bg-zinc-800">
      <!-- Prevent autofocus on first link -->
      <a href="#!"></a>

      <ul
        class="menu font-semibold bg-base-100 w-full p-2 rounded-box dark:bg-zinc-800 dark:text-zinc-200"
      >
        <li v-for="link in links" :key="link.id">
          <NuxtLink
            :to="link.to"
            @click="modal.close()"
            class="text-lg dark:hover:bg-zinc-700 dark:active:text-neutral dark:active:bg-primary flex gap-3"
          >
            <component
              :is="link.icon"
              class="h-6 w-6 text-primary"
              stroke-width="2"
            />
            {{ link.title }}
          </NuxtLink>
        </li>
        <li>
          <a
            href="https://www.patreon.com/thoanny"
            target="_blank"
            rel="noreferrer"
            class="text-lg dark:hover:bg-zinc-700 dark:active:text-neutral dark:active:bg-primary flex gap-3"
          >
            <IconBrandPatreon class="h-6 w-6 text-primary" stroke-width="2" />
            Me soutenir
          </a>
        </li>
      </ul>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
