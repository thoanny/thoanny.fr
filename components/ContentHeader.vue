<script setup>
import {
  IconArrowNarrowLeft,
  IconCalendarMonth,
  IconFolderOpen,
  IconBrandX,
  IconBrandFacebook,
  IconCornerLeftUp,
} from "@tabler/icons-vue";
import { stripImageCaption } from "~/utils/strip-html.js";
import { nbsp } from "~/utils/text.js";

const route = useRoute();
const cleanUrl = "https://thoanny.fr" + route.path;

defineProps(["type", "content"]);
</script>

<template>
  <header>
    <template v-if="type === 'post'">
      <div class="flex flex-col xl:flex-row gap-8 items-end flex-col-reverse">
        <figure
          id="post-thumbnail"
          class="w-full xl:max-w-2xl shrink-0 xl:-ml-8 relative"
          v-if="content.featuredImage"
        >
          <img
            :src="content.featuredImage.node.mediaItemUrl"
            :alt="
              content.featuredImage.node.altText
                ? content.featuredImage.node.altText
                : content.title
            "
            :srcset="content.featuredImage.node.srcSet"
            class="w-full h-full rounded-2xl aspect-video object-cover xl:shadow-xl"
            :width="content.featuredImage.node.mediaDetails.width"
            :height="content.featuredImage.node.mediaDetails.height"
          />
          <div
            class="flex xl:hidden text-sm text-gray-400 gap-2 shrink-0 justify-center mb-6 mt-4 items-center"
            v-if="content.featuredImage.node.caption"
          >
            <IconCornerLeftUp class="w-4 h-4" stroke-width="2" />
            <div
              v-html="stripImageCaption(content.featuredImage.node.caption)"
            ></div>
          </div>
        </figure>

        <div
          class="flex gap-6 xl:gap-6 flex-col items-end justify-start xl:mb-6 pr-4 xl:mt-6 w-full"
        >
          <h1
            class="w-full text-3xl font-bold leading-12 xl:text-white text-center xl:text-left dark:text-zinc-200"
          >
            {{ nbsp(content.title) }}
          </h1>

          <div
            class="hidden xl:flex text-sm text-white gap-2 opacity-75 w-full"
            v-if="content.featuredImage && content.featuredImage.node.caption"
          >
            <IconArrowNarrowLeft
              class="w-6 h-6 inline shrink-0"
              stroke-width="1.5"
            />
            <div
              v-html="stripImageCaption(content.featuredImage.node.caption)"
            ></div>
          </div>

          <ul
            class="w-full justify-center xl:justify-start flex flex-wrap gap-4 whitespace-nowrap text-sm uppercase font-semibold text-gray-500 xl:text-white"
          >
            <li class="flex gap-2 items-center">
              <IconCalendarMonth
                class="h-6 w-6 text-gray-400 xl:text-white"
                stroke-width="1.5"
              />
              {{
                new Date(Date.parse(content.date)).toLocaleDateString("FR-fr", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              }}
            </li>
            <li class="flex gap-2 items-center" v-if="content.categories">
              <IconFolderOpen
                class="h-6 w-6 text-gray-400 xl:text-white"
                stroke-width="1.5"
              />
              <NuxtLink
                v-for="category in content.categories.nodes"
                :key="category.id"
                :to="'/categories/' + category.slug"
                >{{ category.name }}
              </NuxtLink>
            </li>
          </ul>
          <ul
            class="w-full hidden xl:flex gap-2 items-center justify-center xl:justify-start"
          >
            <li>
              <a
                :href="
                  'https://twitter.com/intent/tweet?url=' +
                  encodeURIComponent(cleanUrl) +
                  '&text=' +
                  encodeURIComponent(content.title) +
                  '&via=thoanny_'
                "
                rel="noopener noreferrer"
                target="_blank"
                class="btn btn-circle btn-secondary text-white dark:text-zinc-900"
              >
                <IconBrandX class="w-7 h-7" stroke-width="1.5" />
              </a>
            </li>
            <li>
              <a
                :href="
                  'https://www.facebook.com/sharer.php?u=' +
                  encodeURIComponent(cleanUrl)
                "
                rel="noopener noreferrer"
                target="_blank"
                class="btn btn-circle btn-secondary text-white dark:text-zinc-900"
              >
                <IconBrandFacebook class="h-7 w-7" stroke-width="1.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template v-else>
      <h1
        class="w-full text-3xl font-bold leading-12 text-center xl:text-left dark:text-zinc-200 max-w-2xl mx-auto text-5xl"
      >
        {{ nbsp(content.title) }}
      </h1>
    </template>
    <!-- xxx -->
  </header>
</template>
