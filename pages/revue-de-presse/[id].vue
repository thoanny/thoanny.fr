<script setup>
const route = useRoute();
const { data } = await useFetch(
  `https://api.thoanny.fr/press-reviews/issues/${route.params.id}`
);

if (data.value.issue.id !== 2) {
  throw createError({
    statusCode: 404,
    statusMessage: "Revue de presse introuvable",
    fatal: true,
  });
}

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

function compareNames(a, b) {
  var nameA = a.name.toLowerCase();
  var nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
}

// await callOnce(async () => {
//   data.value.posts?.forEach((post) => {
//     post.tags.forEach((tag) => {
//       tags.value.push({ id: tag.id, name: tag.name });
//     });
//   });
//   tags.value = tags.value
//     .reduce((acc, obj) => {
//       if (!acc.some((tag) => tag.id === obj.id)) {
//         acc.push(obj);
//       }
//       return acc;
//     }, [])
//     .sort(compareNames);
// });
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-12 mt-6">
    <template v-for="post in data.posts" :key="post.id">
      <div class="self-end">
        <a
          :href="post.link"
          target="_blank"
          class="card card-compact bg-base-100 w-full shadow-lg hover:shadow-xl border group"
        >
          <figure class="aspect-[16/6]">
            <img
              :src="post.thumbnail ?? '/background-green.jpg'"
              class="w-full h-full object-cover"
              alt=""
              onerror="this.src='/background-green.jpg'"
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
            <div v-if="post.tags.length > 0" class="flex flex-wrap gap-1">
              <span
                v-for="tag in post.tags"
                class="badge badge-neutral badge-outline badge-sm"
              >
                {{ tag.name }}
              </span>
            </div>
          </div>
        </a>
      </div>

      <!--  -->
      <div v-if="post.description" class="self-end pb-6">
        <div class="chat chat-start">
          <div class="chat-bubble max-w-full mr-4 md:mr-0">
            {{ post.description }}
          </div>
        </div>
      </div>

      <span v-else></span>
    </template>
  </div>
</template>

<style scoped>
a:visited h2,
a:visited:hover h2 {
  color: #4a00ff;
}
</style>
