<script setup>
const route = useRoute();

const { data } = await useFetch(
  "https://api.thoanny.fr/press-reviews/categories/1"
);

useSeoMeta({
  title: "Revue de presse",
  ogTitle: "Revue de presse",
  description:
    "Chaque semaine, retrouvez une sélection d'articles dans ma revue de presse jeux vidéo.",
  ogDescription:
    "Chaque semaine, retrouvez une sélection d'articles dans ma revue de presse jeux vidéo.",
});

const handleChangeIssue = (e) => {
  console.log("handleChangeIssue", e.target.value);
  if (!e.target.value) {
    return navigateTo({
      name: "revue-de-presse",
    });
  }
  return navigateTo({
    name: "revue-de-presse-id",
    params: { id: e.target.value },
  });
};

const currentId = ref("");

if (route.params.id) {
  currentId.value = route.params.id;
}
</script>

<template>
  <div class="container mx-auto !max-w-4xl">
    <h1 class="mb-6 text-2xl font-bold text-primary text-center sm:text-start">
      Revue de presse
      <span class="whitespace-nowrap">// {{ data.category.name }}</span>
    </h1>

    <!-- <pre>{{ tags }}</pre> -->

    <!-- <div class="bg-white rounded-box p-4 shadow-lg flex gap-2"> -->
    <div class="">
      <select
        class="select select-bordered w-full sm:w-auto"
        @change="handleChangeIssue"
        v-model="currentId"
      >
        <option value="">-- Édition --</option>
        <option v-for="issue in data.issues" :value="issue.id">
          {{ issue.name }}
        </option>
      </select>
      <!-- <select class="select select-bordered" v-model="currentTag">
        <option value="" disabled selected>-- Mot-clé --</option>
        <option v-for="tag in tags" :value="tag.id">
          {{ tag.name }}
        </option>
      </select> -->
    </div>

    <!-- <pre>{{ data }}</pre> -->

    <NuxtPage />
  </div>
</template>

<style scoped>
a.btn:not(.router-link-active) {
  @apply btn-outline;
}
</style>
