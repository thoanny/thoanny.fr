<script setup>
const route = useRoute();
const { data } = await useFetch(
  `https://api.thoanny.fr/press-reviews/issues/${route.params.id}`
);

const issuePublishedAt = new Date(
  data.value.issue.published_at
).toLocaleDateString("fr-FR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});

const description = `Revue de presse "${data.value.issue.name}" de ${data.value.posts.length} articles, publiée le ${issuePublishedAt}.`;

useSeoMeta({
  title: `${data.value.issue.name} | Revue de presse`,
  ogTitle: data.value.issue.name,
  description: description,
  ogDescription: description,
});

const formatDateTime = (datetime) => {
  return new Date(datetime).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

const replaceByDefaultImg = (e) => {
  e.target.src = "/background-green.jpg";
};
</script>

<template>
  <div class="md:col-span-3">
    <template v-for="post in data.posts" :key="post.id">
      <a
        :href="post.link"
        target="_blank"
        class="card card-compact bg-base-100 w-full shadow-lg hover:shadow-xl mb-4 border group"
      >
        <figure class="aspect-[16/6]">
          <img
            :src="post.thumbnail ?? '/background-green.jpg'"
            class="w-full h-full object-cover"
            alt=""
            @error="replaceByDefaultImg"
          />
        </figure>
        <div class="card-body !pb-6">
          <h2 class="card-title !mb-0 group-hover:text-primary">
            {{ post.title }}
          </h2>
          <p class="opacity-50">
            &mdash; {{ post.source ?? "N/A" }},
            {{ formatDateTime(post.published_at) }}
          </p>
          <div v-if="post.tags" class="flex flex-wrap gap-1">
            <span
              v-for="tag in post.tags"
              class="badge badge-neutral badge-outline badge-sm"
            >
              {{ tag.name }}
            </span>
          </div>
        </div>
      </a>
      <!--  -->
      <div class="chat chat-end mb-8 -mt-8" v-if="post.description">
        <div class="chat-image avatar hidden sm:inline-flex">
          <div class="w-10 rounded-full">
            <img alt="Thoanny" src="@/assets/img/autoportrait-2024.jpg" />
          </div>
        </div>
        <div class="chat-bubble text-md max-w-full sm:max-w-[90%] ml-3 sm:ml-0">
          {{ post.description }}
        </div>
        <div class="chat-footer opacity-50 block sm:hidden">Thoanny</div>
      </div>
    </template>
  </div>
</template>

<style scoped>
a:visited h2,
a:visited:hover h2 {
  color: #4a00ff;
}
</style>
