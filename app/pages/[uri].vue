<script setup>
import { nbsp } from "~/utils/text.js";

import ParagraphBlock from "~/components/blocks/ParagraphBlock.vue";
import HeaderBlock from "~/components/blocks/HeaderBlock.vue";
import QuoteBlock from "~/components/blocks/QuoteBlock.vue";
import WarningBlock from "~/components/blocks/WarningBlock.vue";
import DelimiterBlock from "~/components/blocks/DelimiterBlock.vue";
import ListBlock from "~/components/blocks/ListBlock.vue";
import TableBlock from "~/components/blocks/TableBlock.vue";
import ImageBlock from "~/components/blocks/ImageBlock.vue";
import AttachesBlock from "~/components/blocks/AttachesBlock.vue";
import CodeBlock from "~/components/blocks/CodeBlock.vue";
import RawBlock from "~/components/blocks/RawBlock.vue";
import EmbedBlock from "~/components/blocks/EmbedBlock.vue";

const route = useRoute();

const { data, status, error } = await useFetch(
  `https://api.thoanny.fr/blog/posts/${route.params.uri}`
);

if (status.value === "error") {
  if (error.value.statusCode == 404) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page ou article introuvable",
      fatal: true,
    });
  }
}

// throw createError({
//   statusCode: 404,
//   statusMessage: "Page ou article introuvable",
//   fatal: true,
// });

useHead({
  bodyAttrs: {
    class: "post",
  },
});

const title = data.value.seoTitle || data.value.title;
const description = data.value?.seoDescription || data.value?.excerpt;

useSeoMeta({
  ogTitle: () => title,
  description: () => description,
  ogDescription: () => description,
});

console.log(description, data.value);

const blocks = {
  paragraph: ParagraphBlock,
  header: HeaderBlock,
  quote: QuoteBlock,
  warning: WarningBlock,
  delimiter: DelimiterBlock,
  list: ListBlock,
  table: TableBlock,
  image: ImageBlock,
  attaches: AttachesBlock,
  code: CodeBlock,
  raw: RawBlock,
  embed: EmbedBlock,
};

defineOgImageComponent("BlogPost", {
  title: data.value?.title,
  image: data.value?.imageUrl,
  date: data.value?.publishedAt,
});
</script>

<template>
  <div v-if="status === 'pending'"><AppLoading /></div>
  <div v-else-if="status === 'success'">
    <article class="text-lg post">
      <ContentHeader type="post" :data="data" />
      <div
        id="content"
        class="xl:bg-base-200 xl:pt-16 xl:rounded-2xl xl:-mt-12 min-h-28"
      >
        <template
          v-for="block in data.content.blocks"
          :key="block.id"
          v-if="data.content?.blocks"
        >
          <component
            v-if="blocks[block.type]"
            :is="blocks[block.type]"
            :block="block"
          />
        </template>
      </div>

      <!-- [ ] Faire à la main -->
      <div class="my-12 mx-auto text-center max-w-sm">
        <img
          class="mask mask-hexagon mx-auto mb-4 size-32"
          src="/avatar.jpg"
          alt=""
        />
        <h4 class="font-bold">Thoanny</h4>
        <p>
          Je suis Anthony, né en 89, infographiste et développeur web
          indépendant. J'adore partager mes passions. Pour me contacter&nbsp;:
          hello@thoanny.fr
        </p>
      </div>

      <div v-if="data.tags">
        <span
          class="tags text-sm flex flex-wrap justify-center items-center gap-4"
        >
          <NuxtLink
            v-for="tag in data.tags"
            :key="tag.id"
            :to="'/mots-cles/' + tag.slug"
            class="btn btn-sm btn-outline rounded-full"
          >
            {{ tag.name }}
          </NuxtLink>
        </span>
      </div>
    </article>
  </div>
</template>
