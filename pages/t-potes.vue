<script setup>
import { IconFlame } from "@tabler/icons-vue";
import { getTPotes } from "~/utils/graphql.js";

const data = ref({ loading: true, tpotes: [] });

await getTPotes().then((d) => {
  data.value = {
    loading: false,
    tpotes: d.tPotes.nodes,
  };
});
</script>

<template>
  <SearchEngineOptimization
    title="T-potes"
    description="Merci à tous les T-potes qui me soutiennent dans mes projets, que ce soit sur Twitch ou Patreon."
  />

  <div class="text-center max-w-2xl mx-auto">
    <h1
      class="text-4xl font-bold text-primary mt-12 mb-8 flex items-center justify-center gap-2"
    >
      <IconFlame class="h-12 w-12" stroke-width="1.5" />
      Les T-Potes
      <IconFlame class="h-12 w-12" stroke-width="1.5" />
    </h1>
    <p class="text-lg mb-8">
      Merci à tous les T-potes qui me soutiennent dans mes projets, que ce soit
      sur
      <a
        href="https://twitch.tv/thoanny"
        target="_blank"
        class="text-primary font-semibold underline underline-offset-2"
        >Twitch</a
      >
      ou
      <a
        href="https://www.patreon.com/thoanny"
        target="_blank"
        class="font-semibold text-primary underline underline-offset-2"
        >Patreon</a
      >.
    </p>
    <div
      class="flex gap-x-2 gap-y-3 flex-wrap justify-center"
      v-if="data.tpotes"
    >
      <div
        v-for="tpote in data.tpotes"
        class="flex rounded-full overflow-hidden bg-white p-1 gap-2 pr-4 font-semibold items-center shadow"
      >
        <img
          :src="tpote.featuredImage.node.sourceUrl"
          class="h-8 w-8 rounded-full"
          alt=""
        />
        {{ tpote.title }}
      </div>
    </div>
  </div>
</template>
