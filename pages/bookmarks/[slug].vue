<template>
  <DevOnly>
    <pre>{{ category }}</pre>
  </DevOnly>
  <div
    class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-4"
    v-if="links.length > 0"
  >
    <a
      v-for="link in links"
      :key="link.id"
      class="flex flex-col text-center items-center justify-center p-4 rounded-box w-full h-full gap-3 leading-5"
      :class="[link.class, `type-${link.type}`]"
      :href="link.url"
      target="_blank"
    >
      <div
        class="bg-base-100/80 rounded-full p-3"
        :class="textColor(link.type)"
      >
        <template v-if="link.icon">
          <IconFileTypeDoc
            v-if="link.icon == 'document'"
            class="size-6"
            stroke="1.5"
          />
          <IconListCheck
            v-else-if="link.icon == 'updates'"
            class="size-6"
            stroke="1.5"
          />
          <IconBrandWikipedia
            v-else-if="link.icon == 'wiki'"
            class="size-6"
            stroke="1.5"
          />
          <IconBrandTwitch
            v-else-if="link.icon == 'twitch'"
            class="size-6"
            stroke="1.5"
          />
          <IconBrandYoutube
            v-else-if="link.icon == 'youtube'"
            class="size-6"
            stroke="1.5"
          />
          <IconSwords
            v-else-if="link.icon == 'swords'"
            class="size-6"
            stroke="1.5"
          />
          <IconApps
            v-else-if="link.icon == 'app'"
            class="size-6"
            stroke="1.5"
          />
          <IconHanger
            v-else-if="link.icon == 'skins'"
            class="size-6"
            stroke="1.5"
          />
          <IconTools
            v-else-if="link.icon == 'tools'"
            class="size-6"
            stroke="1.5"
          />
          <IconClock
            v-else-if="link.icon == 'clock'"
            class="size-6"
            stroke="1.5"
          />
          <IconCalendarWeek
            v-else-if="link.icon == 'calendar'"
            class="size-6"
            stroke="1.5"
          />
          <IconFish
            v-else-if="link.icon == 'fish'"
            class="size-6"
            stroke="1.5"
          />
          <IconMap v-else-if="link.icon == 'map'" class="size-6" stroke="1.5" />
          <IconLink v-else class="size-6" stroke="1.5" />
        </template>
        <template v-else>
          <IconLink class="size-6" stroke="1.5" />
        </template>
      </div>
      <span class="font-semibold">{{ link.name }}</span>
      <span v-if="link.description" class="text-sm -mt-2">{{
        link.description
      }}</span>
    </a>
  </div>
  <div class="mt-4" v-else>Aucun lien trouvé...</div>
</template>

<script setup>
import {
  IconFileTypeDoc,
  IconListCheck,
  IconBrandWikipedia,
  IconLink,
  IconBrandTwitch,
  IconBrandYoutube,
  IconSwords,
  IconApps,
  IconHanger,
  IconTools,
  IconClock,
  IconCalendarWeek,
  IconFish,
  IconMap,
} from "@tabler/icons-vue";
import categories from "@/data/bookmarks_categories.json";
import allLinks from "@/data/bookmarks_links.json";

const route = useRoute();
const category = categories.find(
  (category) => route.params.slug === category.slug
);

if (!category) {
  throw createError({ statusCode: 404, statusMessage: "Favoris introuvables" });
}

const links = computed(() => {
  return allLinks.filter((link) => link.category === category.id);
});

const textColor = (type) => {
  if (type === "official") {
    return "text-[#db8235]";
  }

  if (type === "fansite") {
    return "text-[#35bfdb]";
  }

  return "text-primary";
};
</script>

<style scoped>
.type-official {
  background: #db5135;
  background: #db8235;
}

.type-fansite {
  background: #3567db;
  background: #35bfdb;
}
.type-thoanny {
  @apply bg-primary;
}
</style>
