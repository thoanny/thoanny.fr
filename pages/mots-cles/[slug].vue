<script setup>
import { getTag } from "~/utils/graphql.js";

const route = useRoute();

const data = ref({
  loading: true,
  category: null,
  posts: null,
  hasNextPage: false,
  endCursor: null,
});

await getTag({ id: route.params.slug }).then((d) => {
  if (!d.tag) {
    throw createError({
      statusCode: 404,
      statusMessage: "Mot-clé introuvable",
    });
  }

  data.value = {
    loading: false,
    tag: d.tag.name,
    posts: d.tag.posts.nodes,
    hasNextPage: d.tag.posts.pageInfo.hasNextPage,
    endCursor: d.tag.posts.pageInfo.endCursor,
  };
});

const loadMore = async () => {
  data.value.loading = true;

  await getTag({
    id: route.params.slug,
    after: data.value.endCursor,
  }).then((d) => {
    data.value = {
      loading: false,
      posts: data.value.posts.concat(d.tag.posts.nodes),
      hasNextPage: d.tag.posts.pageInfo.hasNextPage,
      endCursor: d.tag.posts.pageInfo.endCursor,
    };
  });
};
</script>

<template>
  <div v-if="data.posts.length > 0">
    <h1 class="text-4xl mb-6 font-bold dark:text-gray-200">
      Mot-clé&nbsp;: {{ data.tag }}
    </h1>
    <PostCard v-for="post in data.posts" :post="post" :key="post.id" />
    <PostLoadMore
      :hasNextPage="data.hasNextPage"
      :loading="data.loading"
      @load-more="loadMore"
    />
  </div>
</template>
