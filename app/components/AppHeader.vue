<script setup>
import {
  IconBookmark,
  IconBulb,
  IconChefHat,
  IconDeviceGamepad2,
  IconDotsFilled,
  IconFlame,
  IconNews,
  IconNotebook,
  IconTools,
  IconVideo,
} from "@tabler/icons-vue";

const modal = ref();

const links = [
  {
    id: "blog",
    to: { name: "index" },
    title: "Blog",
    hideTitle: false,
    icon: IconNotebook,
    more: false,
  },
  {
    id: "en-coulisses",
    to: { name: "categories-slug", params: { slug: "en-coulisses" } },
    title: "En coulisses",
    hideTitle: false,
    icon: IconNews,
    more: false,
  },
  {
    id: "recettes",
    to: { name: "categories-slug", params: { slug: "recettes" } },
    title: "Recettes",
    hideTitle: false,
    icon: IconChefHat,
    more: false,
  },
  {
    id: "jeux-video",
    to: { name: "categories-slug", params: { slug: "jeux-video" } },
    title: "Jeux vidéo",
    hideTitle: false,
    icon: IconDeviceGamepad2,
    more: true,
  },
  {
    id: "projets",
    to: { name: "categories-slug", params: { slug: "projets" } },
    title: "Projets",
    hideTitle: false,
    icon: IconTools,
    more: true,
  },
  {
    id: "streaming",
    to: { name: "categories-slug", params: { slug: "streaming" } },
    title: "Streaming",
    hideTitle: false,
    icon: IconVideo,
    more: true,
  },
  {
    id: "trucs-et-astuces",
    to: { name: "categories-slug", params: { slug: "trucs-et-astuces" } },
    title: "Trucs et astuces",
    hideTitle: false,
    icon: IconBulb,
    more: true,
  },
  {
    id: "bookmarks",
    to: { name: "bookmarks" },
    title: "Favoris",
    hideTitle: false,
    icon: IconBookmark,
    more: false,
  },
  {
    id: "t-potes",
    to: { name: "t-potes" },
    title: "T-potes",
    hideTitle: false,
    icon: IconFlame,
  },
  // TODO Ajouter une recherche JS, créer un webpoint API pour lister les contenus utiles
  // {
  //   id: "chercher",
  //   to: { name: "chercher" },
  //   title: "Chercher",
  //   hideTitle: true,
  //   icon: IconSearch,
  //   more: false,
  // },
];

const filteredLinks = computed(() => {
  return links.filter((link) => !link.more);
});

const moreLinks = computed(() => {
  return links.filter((link) => link.more);
});

const popoverEl = ref();
</script>

<template>
  <header class="bg-primary relative h-24 sm:h-32 px-4 overflow-hidden">
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
          v-for="link in filteredLinks"
          :key="link.id"
          :to="link.to"
          class="flex gap-1 items-center group"
        >
          <component :is="link.icon" class="size-7" stroke-width="1.75" />
          <span
            class="group-hover:underline group-[.router-link-active]:underline underline-offset-2 decoration-2"
            v-if="!link.hideTitle"
          >
            {{ link.title }}
          </span>
        </NuxtLink>

        <button
          class="btn btn-primary btn-ghost btn-circle"
          popovertarget="popover-1"
          style="anchor-name: --anchor-menu"
        >
          <IconDotsFilled class="text-primary-content" />
        </button>
        <ul
          class="dropdown dropdown-end menu w-54 rounded-box bg-base-100 text-base-content shadow-sm mt-2"
          popover
          id="popover-1"
          style="position-anchor: --anchor-menu"
          ref="popoverEl"
        >
          <li v-for="link in moreLinks" :key="link.id">
            <NuxtLink
              :to="link.to"
              class="flex gap-2 items-center group"
              active-class="bg-primary text-primary-content"
              @click="popoverEl.hidePopover()"
            >
              <component :is="link.icon" class="size-6" stroke-width="1.75" />
              <span class="">{{ link.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <button
    type="button"
    @click="modal.showModal()"
    class="btn btn-circle min-[990px]:hidden absolute top-6 sm:top-10 right-4 border border-primary shadow"
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
    <div class="modal-box p-0 text-lg sm:!max-w-xs">
      <!-- Prevent autofocus on first link -->
      <a href="#!"></a>

      <ul class="menu font-semibold bg-base-100 w-full p-2 rounded-box">
        <li v-for="link in links" :key="link.id">
          <NuxtLink
            :to="link.to"
            @click="modal.close()"
            class="text-lg flex gap-3"
          >
            <component
              :is="link.icon"
              class="size-7 text-primary"
              stroke-width="2"
            />
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
