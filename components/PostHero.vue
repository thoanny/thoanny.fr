<script setup>
import IconCalendar from "./icons/IconCalendar.vue";
import IconFolder from "./icons/IconFolder.vue";
import IconStar from "./icons/IconStar.vue";

defineProps(["post"]);
</script>

<template>
  <div>
    <div
      class="hero aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-xl"
    >
      <img
        :src="post.featuredImage.node.mediaItemUrl"
        alt=""
        class="w-full h-full object-cover blur-sm z-10"
      />
      <div class="hero-overlay bg-black bg-opacity-60 z-20"></div>
      <div class="hero-content text-center text-white z-30">
        <div class="max-w-2xl px-4">
          <div
            class="flex justify-center items-center gap-2 opacity-75 uppercase font-semibold mb-2"
          >
            <IconStar class="w-4 h-4" />
            Dernier article
            <IconStar class="w-4 h-4" />
          </div>
          <h1
            class="mb-3 text-2xl md:text-4xl font-bold line-clamp-2 sm:line-clamp-none"
          >
            {{ post.title }}
          </h1>
          <div
            class="flex flex-col sm:flex-row gap-1 sm:gap-4 mb-4 justify-center items-center text-white"
          >
            <span class="date flex items-center gap-1">
              <IconCalendar class="w-5 h-5" />
              {{
                new Date(Date.parse(post.date))
                  .toLocaleDateString("FR-fr", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                  .toUpperCase()
              }}
            </span>
            <span
              class="categories flex items-center gap-1"
              v-if="post.categories"
            >
              <IconFolder class="h-5 w-5" />
              <NuxtLink
                :to="'/categories/' + category.slug"
                v-for="category in post.categories.nodes"
                :key="category.id"
                >{{ category.name }}</NuxtLink
              >
            </span>
          </div>
          <div
            class="mb-5 text-lg line-clamp-3 sm:line-clamp-none"
            v-html="post.excerpt"
          ></div>
          <NuxtLink :to="post.slug" class="btn btn-primary">
            Lire l'article
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
