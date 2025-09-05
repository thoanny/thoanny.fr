<script setup>
const route = useRoute();

const API = `https://api.thoanny.fr/blog/tags/${route.params.slug}`;

const { data, status } = await useFetch(API);

const posts = ref([]);
const next = ref(false);
const isLoading = ref(false);

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

const title = `Mot-clé : ${data.value.tag?.name}`;

useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  twitterTitle: () => title,
});
</script>

<template>
  <div v-if="status === 'pending'">Chargement en cours...</div>
  <div v-else-if="status === 'success'">
    <h1 class="text-4xl mb-6 font-bold flex items-center gap-2">
      Mot-clé&nbsp;: {{ data.tag.name }}
    </h1>
    <div v-if="posts.length > 0">
      <PostCard v-for="post in posts" :post="post" :key="post.id" />
    </div>
    <PostLoadMore
      :hasNextPage="next"
      :loading="isLoading"
      @load-more="loadMore"
    />
  </div>
</template>
