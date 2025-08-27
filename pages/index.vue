<script setup>
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
</script>

<template>
  <SearchEngineOptimization title="Blog" />
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
