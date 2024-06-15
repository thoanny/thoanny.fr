<script setup>
import { excerpt } from "~/utils/text.js";

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
    <h1 class="text-4xl mb-6 font-bold dark:text-gray-200">Chercher</h1>
    <ais-instant-search :index-name="indexName" :search-client="algolia">
      <ais-search-box />
      <!-- <ais-hits /> -->
      <ais-hits>
        <template v-slot:item="{ item }">
          <NuxtLink
            :to="{ name: 'uri', params: { uri: getSlug(item.permalink) } }"
            class="flex gap-4 mt-6 items-center group bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden pr-2 sm:pr-8"
          >
            <div class="w-28 sm:w-36 h-full shrink-0 self-start">
              <img
                :src="item.images.thumbnail.url"
                v-if="item.images.thumbnail"
                class="object-cover w-full h-full aspect-square"
                alt=""
              />
            </div>

            <div
              class="w-full flex flex-col gap-2 dark:text-gray-200 min-w-0 px-2 sm:px-5"
            >
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
      <ais-pagination />
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

  svg {
    @apply w-4 h-4;
  }
}

.ais-Pagination-list {
  @apply flex items-center justify-center mt-6 gap-2;

  li span {
    @apply btn btn-disabled;
  }

  li {
    a {
      @apply btn btn-primary;
    }

    &.ais-Pagination-item--selected {
      a {
        @apply btn-disabled;
      }
    }
  }
}
</style>
