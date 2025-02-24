<script setup>
import { IconArrowBack, IconMessage, IconMessageOff } from "@tabler/icons-vue";
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

const showComments = ref(true);
const tags = ref([]);
const filterTag = ref("");

data.value.posts.forEach((post) => {
  post.tags.forEach((tag) => {
    if (!tags.value.find((t) => t.id === tag.id)) {
      tags.value.push({ id: tag.id, name: tag.name });
    }
  });
});

tags.value.sort((a, b) => {
  var nameA = a.name.toLowerCase();
  var nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
});

const toggleShowComments = () => {
  showComments.value = !showComments.value;
};

const posts = computed(() => {
  return data.value.posts.filter((post) => {
    if (filterTag.value) {
      return post.tags.find((tag) => tag.id === filterTag.value);
    }
    return true;
  });
});
</script>

<template>
  <div class="mx-auto !max-w-4xl">
    <div class="flex flex-col gap-4 mb-6">
      <h1
        class="text-2xl font-bold text-primary text-center sm:text-start leading-none w-full"
      >
        {{ data.issue.name }}
      </h1>
      <div class="opacity-50 font-semibold uppercase text-center sm:text-start">
        {{ issuePublishedAt }}
      </div>
    </div>

    <div
      class="flex justify-center sm:justify-start gap-2 bg-white rounded-box p-2 shadow"
    >
      <NuxtLink
        :to="{ name: 'revue-de-presse' }"
        class="btn btn-square btn-ghost sm:w-auto sm:px-3 btn-sm"
      >
        <IconArrowBack class="size-5" stroke="1.5" />
        <span class="hidden sm:block">Retourner à la liste</span>
      </NuxtLink>
      <button
        class="btn btn-square btn-ghost sm:w-auto sm:px-3 btn-sm"
        @click="toggleShowComments"
      >
        <IconMessage class="size-5" stroke="1.5" v-if="showComments" />
        <IconMessageOff class="size-5" stroke="1.5" v-else />
        <span class="hidden sm:block">
          Commentaires {{ showComments ? "affichés" : "masqués" }}
        </span>
      </button>
      <div class="flex flex-1 justify-end">
        <select
          class="select select-sm select-bordered w-full md:w-auto"
          v-model="filterTag"
        >
          <option value="">-- Mots clés --</option>
          <option v-for="tag in tags" :key="tag.id" :value="tag.id">
            {{ tag.name }}
          </option>
        </select>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mt-6"
      :class="{ 'md:gap-y-12': showComments }"
    >
      <template v-for="post in posts" :key="post.id">
        <div :class="{ 'self-end': showComments }">
          <a
            :href="post.link"
            target="_blank"
            class="card card-compact bg-base-100 w-full shadow-lg hover:shadow-xl border group h-full"
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
        <div v-if="post.description && showComments" class="self-end pb-6">
          <div class="chat chat-start">
            <div class="chat-bubble max-w-full mr-4 md:mr-0">
              <MDC :value="post.description" />
            </div>
          </div>
        </div>

        <span v-else-if="!post.description && showComments"></span>
      </template>
    </div>
  </div>
</template>

<style scoped>
a:visited h2,
a:visited:hover h2 {
  color: #4a00ff;
}

.chat-bubble :deep(a) {
  @apply underline underline-offset-2;
}

.chat-bubble :deep(ul) {
  @apply list-disc ml-4;
}
</style>
