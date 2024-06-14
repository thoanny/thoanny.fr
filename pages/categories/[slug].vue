<script setup>
import { getCategory } from "~/utils/graphql.js";

const route = useRoute();

const data = ref({
  loading: true,
  category: null,
  posts: null,
  hasNextPage: false,
  endCursor: null,
});

await getCategory({ id: route.params.slug }).then((d) => {
  if (!d.category) {
    throw createError({
      statusCode: 404,
      statusMessage: "Catégorie introuvable",
    });
  }

  data.value = {
    loading: false,
    category: d.category.name,
    posts: d.category.posts.nodes,
    hasNextPage: d.category.posts.pageInfo.hasNextPage,
    endCursor: d.category.posts.pageInfo.endCursor,
  };
});

const loadMore = async () => {
  data.value.loading = true;

  await getCategory({
    id: route.params.slug,
    after: data.value.endCursor,
  }).then((d) => {
    data.value = {
      loading: false,
      posts: data.value.posts.concat(d.category.posts.nodes),
      hasNextPage: d.category.posts.pageInfo.hasNextPage,
      endCursor: d.category.posts.pageInfo.endCursor,
    };
  });
};
</script>

<template>
  <div v-if="data.posts.length > 0">
    <h1 class="text-4xl mb-6 font-bold dark:text-gray-200">
      Catégorie&nbsp;: {{ data.category }}
    </h1>
    <PostCard v-for="post in data.posts" :post="post" :key="post.id" />
    <PostLoadMore
      :hasNextPage="data.hasNextPage"
      :loading="data.loading"
      @load-more="loadMore"
    />
  </div>
</template>
