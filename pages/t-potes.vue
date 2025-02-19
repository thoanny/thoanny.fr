<script setup>
import { IconFlame, IconHearts } from "@tabler/icons-vue";

const { data } = await useFetch("https://api.thoanny.fr/tpotes");

const twitchTpotes = computed(() => {
  return data.value.tpotes.filter((tpote) => tpote.network === "twitch");
});

const patreonTpotes = computed(() => {
  return data.value.tpotes.filter((tpote) => tpote.network === "patreon");
});

useSeoMeta({
  title: "Les T-potes",
  ogTitle: "Les T-potes",
  description:
    "Merci infiniment à tou·te·s mes abonné·e·s sur Twitch et Patreon !",
  ogDescription:
    "Merci infiniment à tou·te·s mes abonné·e·s sur Twitch et Patreon !",
});
</script>

<template>
  <div class="container mx-auto text-center !max-w-2xl">
    <h1
      class="text-2xl font-bold mb-6 flex items-center justify-center gap-2 text-primary"
    >
      <IconFlame class="h-12 w-12" stroke-width="1.5" />
      Les T-potes
      <IconFlame class="h-12 w-12" stroke-width="1.5" />
    </h1>
    <p class="mb-4 text-lg">
      <strong
        >Merci infiniment à tou·te·s mes abonné·e·s sur Twitch et
        Patreon !</strong
      >
    </p>
    <p class="mb-4 text-lg">
      Votre soutien fait toute la différence et me permet de continuer à créer
      du contenu et à travailler sur mes projets personnels. Que ce soit à
      travers vos abonnements ou vos encouragements, vous êtes une véritable
      source de motivation.
    </p>
    <p class="mb-4 text-lg">
      Merci de croire en ce que je fais et de rendre cette aventure possible.
    </p>
    <p class="text-xl mb-4 flex justify-center text-primary">
      <IconHearts class="h-12 w-12" stroke-width="1.5" />
    </p>
    <h2 class="text-lg font-bold mb-4">
      T-potes abonné·e·s via
      <a
        href="https://www.twitch.tv/thoanny"
        target="_blank"
        rel="nofollow"
        class="underline underline-offset-2"
        >Twitch</a
      >
    </h2>
    <div class="flex flex-wrap gap-2 justify-center mb-6 mt-2">
      <span
        v-for="tpote in twitchTpotes"
        :key="tpote.id"
        class="badge badge-primary badge-lg"
        :class="{ 'badge-outline bg-white': !tpote.active }"
      >
        {{ tpote.name }}
      </span>
    </div>
    <h2 class="text-lg font-bold mb-4">
      T-potes abonné·e·s via
      <a
        href="https://www.patreon.com/thoanny"
        target="_blank"
        rel="nofollow"
        class="underline underline-offset-2"
        >Patreon</a
      >
    </h2>
    <div class="flex flex-wrap gap-2 justify-center mt-2 mb-6">
      <span
        v-for="tpote in patreonTpotes"
        :key="tpote.id"
        class="badge badge-primary badge-lg"
        :class="{ 'badge-outline bg-white': !tpote.active }"
      >
        {{ tpote.name }}
      </span>
    </div>
  </div>
</template>
