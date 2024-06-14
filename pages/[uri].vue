<script setup>
import { nbsp } from "~/utils/text.js";
import { getPost } from "~/utils/graphql.js";

const route = useRoute();

const data = ref({
  loading: true,
  type: null,
  content: null,
});

await getPost({ id: route.params.uri }).then((d) => {
  if (d.page) {
    data.value = {
      loading: false,
      type: "page",
      content: d.page,
    };
  } else if (d.post) {
    data.value = {
      loading: false,
      type: "post",
      content: d.post,
    };
  } else {
    throw createError({
      statusCode: 404,
      statusMessage: "Page ou article introuvable",
      fatal: true,
    });
  }
});

useHead({
  bodyAttrs: {
    class: data.value.type,
  },
});
</script>

<template>
  <SearchEngineOptimization
    :title="data.content.title"
    :description="data.content.excerpt"
    :image="data.content.featuredImage?.node.mediaItemUrl"
  />

  <div>
    <article :class="data.type" class="text-lg">
      <ContentHeader :type="data.type" :content="data.content" />

      <div
        id="content"
        class="dark:xl:!bg-zinc-900 dark:text-zinc-200 xl:bg-gray-100 xl:pt-16 xl:rounded-2xl xl:-mt-12"
        v-html="nbsp(data.content.content)"
      ></div>

      <div
        class="dark:text-zinc-300 my-12 mx-auto text-center"
        v-if="data.content.author"
      >
        <img
          class="mask mask-hexagon mx-auto mb-4"
          :src="data.content.author.node.avatar.url"
          alt=""
        />
        <h4>{{ data.content.author.node.name }}</h4>
        <p
          v-if="data.content.author.node.description"
          v-html="data.content.author.node.description"
        ></p>
      </div>

      <div v-if="data.content.tags">
        <span class="tags text-sm flex flex-wrap justify-center gap-4">
          <NuxtLink
            v-for="tag in data.content.tags.nodes"
            :key="tag.id"
            :to="'/mots-cles/' + tag.slug"
            class="btn btn-sm btn-outline dark:border-zinc-200 dark:text-zinc-200 rounded-full"
          >
            {{ tag.name }}
          </NuxtLink>
        </span>
      </div>
    </article>
  </div>
</template>
