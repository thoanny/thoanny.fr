<script setup>
import { IconBrandPatreonFilled } from "@tabler/icons-vue";
import { getPosts } from "~/utils/graphql.js";

const data = ref({
  loading: true,
  hero: {},
  posts: [],
  hasNextPage: false,
  endCursor: null,
});

await getPosts().then((d) => {
  data.value = {
    loading: false,
    hero: d.posts.nodes.length > 1 ? d.posts.nodes.slice(0, 1)[0] : {},
    posts: d.posts.nodes.length > 1 ? d.posts.nodes.slice(1) : d.posts.nodes,
    hasNextPage: d.posts.pageInfo.hasNextPage,
    endCursor: d.posts.pageInfo.endCursor,
  };
});

const loadMore = async () => {
  data.value.loading = true;

  await getPosts({
    after: data.value.endCursor,
  }).then((d) => {
    data.value = {
      loading: false,
      hero: data.value.hero,
      posts: data.value.posts.concat(d.posts.nodes),
      hasNextPage: d.posts.pageInfo.hasNextPage,
      endCursor: d.posts.pageInfo.endCursor,
    };
  });
};

const { data: patreonPosts, status: patreonStatus } = useFetch("/api/patreon");
</script>

<template>
  <SearchEngineOptimization title="Blog" />

  <div v-if="patreonStatus !== 'error'" class="mb-8">
    <h2
      class="font-bold text-xl sm:text-2xl mb-4 text-primary flex gap-2 items-center"
    >
      <IconBrandPatreonFilled class="h-8 w-8 shrink-0 self-start" />
      Mes derniers articles sur Patreon
    </h2>
    <div
      v-if="patreonStatus === 'pending' && !patreonPosts"
      class="flex gap-2 items-center font-semibold"
    >
      <span class="loading loading-spinner text-primary"></span>
      Chargement en cours...
    </div>
    <div class="flex flex-col gap-2" v-if="patreonPosts">
      <PatreonPostCard
        v-for="post in patreonPosts"
        :post="post"
        :key="post.id"
      />
    </div>
  </div>

  <div v-if="data.posts.length > 0">
    <PostHero v-if="data.hero" :post="data.hero" />
    <PostCard v-for="post in data.posts" :post="post" :key="post.id" />
    <PostLoadMore
      :hasNextPage="data.hasNextPage"
      :loading="data.loading"
      @load-more="loadMore"
    />
  </div>
</template>
