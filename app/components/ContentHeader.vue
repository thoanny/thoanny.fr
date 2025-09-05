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

defineProps(["type", "data", "content"]); // [ ] Supprimer content
</script>

<template>
  <header>
    <template v-if="type === 'post'">
      <div class="flex flex-col xl:flex-row gap-8 items-end flex-col-reverse">
        <figure
          id="post-thumbnail"
          class="w-full xl:max-w-2xl shrink-0 xl:-ml-8 relative"
        >
          <img
            :src="data.imageUrl"
            alt=""
            class="w-full h-full rounded-2xl aspect-video object-cover xl:shadow-xl"
            v-if="data.imageUrl"
          />
          <div
            class="w-full h-full rounded-2xl aspect-video object-cover xl:shadow-xl bg-secondary"
            v-else
          ></div>
          <div
            class="flex xl:hidden text-sm text-gray-400 gap-2 shrink-0 justify-center mb-6 mt-4 items-center"
            v-if="data.imageCaption"
          >
            <IconCornerLeftUp class="w-4 h-4" stroke-width="2" />
            <div v-html="stripImageCaption(data.imageCaption)"></div>
          </div>
        </figure>

        <div
          class="flex gap-6 xl:gap-6 flex-col items-end justify-start xl:mb-6 pr-4 xl:mt-6 w-full"
        >
          <h1
            class="w-full text-3xl font-bold leading-12 xl:text-base-100 text-center xl:text-left"
          >
            {{ nbsp(data.title) }}
          </h1>

          <div
            class="hidden xl:flex text-sm text-white gap-2 opacity-75 w-full"
            v-if="data.imageUrl && data.imageCaption"
          >
            <IconArrowNarrowLeft
              class="w-6 h-6 inline shrink-0"
              stroke-width="1.5"
            />
            <div v-html="stripImageCaption(data.imageCaption)"></div>
          </div>

          <ul
            class="w-full justify-center xl:justify-start flex flex-wrap gap-4 whitespace-nowrap text-sm uppercase font-semibold xl:text-base-100"
          >
            <li class="flex gap-2 items-center">
              <IconCalendarMonth class="h-6 w-6" stroke-width="1.5" />
              {{
                new Date(Date.parse(data.publishedAt)).toLocaleDateString(
                  "FR-fr",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }
                )
              }}
            </li>
            <li class="flex gap-2 items-center" v-if="data.categories">
              <IconFolderOpen class="h-6 w-6" stroke-width="1.5" />
              <NuxtLink
                v-for="category in data.categories"
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
                  encodeURIComponent(data.title) +
                  '&via=thoanny_'
                "
                rel="noopener noreferrer"
                target="_blank"
                class="btn btn-circle btn-secondary border-0 text-base-100"
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
                class="btn btn-circle btn-secondary border-0 text-base-100"
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
        class="w-full text-3xl font-bold leading-12 text-center xl:text-left max-w-2xl mx-auto text-5xl"
      >
        {{ nbsp(content.title) }}
      </h1>
    </template>
    <!-- xxx -->
  </header>
</template>
