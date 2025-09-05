<script setup>
defineProps(["title", "description"]);
</script>

<template>
  <div class="h-full w-full flex bg-[#93C045] text-white">
    <div class="flex h-full w-full">
      <div class="flex flex-col items-center w-full h-full">
        <div>
          <h1
            class="block text-6xl pt-12 px-24 pb-4 font-black text-center line-clamp-2"
          >
            {{ title }}
          </h1>
        </div>

        <div class="font-bold text-3xl pb-12 px-24 text-center">
          {{ description }}
        </div>
        <div class="w-[800px] h-[450px] mt-24">
          <img src="/monsieur-t.png" class="object-contain w-full h-full" />
        </div>
      </div>
    </div>
  </div>
</template>
