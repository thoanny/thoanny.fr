<script setup>
import { IconSearch } from "@tabler/icons-vue";

const indexName = "thoanny_posts_post";
const algolia = useAlgoliaRef();
import {
  AisInstantSearch,
  AisSearchBox,
  AisHits,
  AisPagination,
} from "vue-instantsearch/vue3/es";

const getSlug = (permalink) => {
  const fragments = permalink.split("/");
  return fragments[3];
};
</script>

<template>
  <div>
    <h1 class="text-4xl mb-6 font-bold">Chercher</h1>
    <ais-instant-search :index-name="indexName" :search-client="algolia">
      <ais-search-box placeholder="Chercher un article...">
        <template v-slot:submit-icon>
          <IconSearch class="h-6 w-6 text-white" stroke-width="2" />
        </template>
      </ais-search-box>
      <ais-hits>
        <template v-slot:item="{ item }">
          <NuxtLink
            :to="{ name: 'uri', params: { uri: getSlug(item.permalink) } }"
            class="flex gap-4 mt-6 items-center group bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden pr-2 sm:pr-8"
          >
            <div class="w-28 sm:w-36 h-full shrink-0 self-start">
              <img
                :src="item.images.thumbnail.url"
                v-if="item.images.thumbnail"
                class="object-cover w-full h-full aspect-square"
                alt=""
              />
            </div>

            <div class="w-full flex flex-col gap-2 min-w-0 px-2 sm:px-5">
              <h2
                class="transition-colors text-lg font-bold w-full truncate group-hover:text-primary"
              >
                {{ item.post_title }}
              </h2>

              <p class="line-clamp-2">{{ item.content }}</p>
            </div>
          </NuxtLink>
        </template>
      </ais-hits>
    </ais-instant-search>
  </div>
</template>

<style lang="scss">
.ais-SearchBox-form {
  @apply flex gap-2;
}

.ais-SearchBox-input {
  @apply input input-bordered w-full;
}

.ais-SearchBox-submit {
  @apply btn btn-primary;
}
</style>
