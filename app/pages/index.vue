<script setup>
const API = "https://api.thoanny.fr/blog/posts";
const { data, status } = await useFetch(API);

const posts = ref([]);
const next = ref(false);
const isLoading = ref(false);

const hero = computed(() => {
  return posts.value[0];
});

const filteredPosts = computed(() => {
  return posts.value.slice(1);
});

const loadMore = async () => {
  isLoading.value = true;

  await $fetch(API, {
    query: { page: next.value },
  }).then((data) => {
    posts.value = posts.value.concat(data.posts);
    next.value = data.next;
    isLoading.value = false;
  });
};

onMounted(() => {
  posts.value = data.value?.posts;
  next.value = data.value?.next;
});

defineOgImageComponent("NuxtSeo", {
  title: "Bienvenue métas !",
});
</script>

<template>
  <SearchEngineOptimization title="Blog" />

  <div v-if="status === 'pending'"><AppLoading /></div>
  <div v-else-if="status === 'success'">
    <PostHero v-if="hero" :post="hero" />
    <div v-if="filteredPosts.length > 0">
      <PostCard v-for="post in filteredPosts" :post="post" :key="post.id" />
    </div>
    <PostLoadMore
      :hasNextPage="next"
      :loading="isLoading"
      @load-more="loadMore"
    />
  </div>
</template>
