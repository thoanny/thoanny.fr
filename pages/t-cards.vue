<script setup>
import { IconCards } from "@tabler/icons-vue";

const { data: cards, status } = useFetch("/api/cards");

// https://www.youtube.com/watch?v=jXBc0AHZ2Ik

const handleMouseLeave = ($event) => {
  $event.currentTarget.children[0].style.transform = "";
  $event.currentTarget.children[0].style.boxShadow = "";
  $event.currentTarget.style.zIndex = "";
  $event.currentTarget.children[1].style.transform = "";
  $event.currentTarget.children[1].style.background = "";
};

const handleMouseMove = ($event) => {
  const elRect = $event.currentTarget.getBoundingClientRect();

  const x = $event.clientX - elRect.x;
  const y = $event.clientY - elRect.y;

  const midCardWidth = elRect.width / 2;
  const midCardHeight = elRect.height / 2;

  const angleY = -(x - midCardWidth) / 8;
  const angleX = (y - midCardHeight) / 8;

  const glowX = (x / elRect.width) * 100;
  const glowY = (y / elRect.height) * 100;

  $event.currentTarget.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  $event.currentTarget.children[0].style.boxShadow = `0 0 10px rgba(0, 0, 0, 0.5)`;
  $event.currentTarget.style.zIndex = `10`;
  $event.currentTarget.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  $event.currentTarget.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 255, 255, 0.25), transparent)`;
};
</script>

<template>
  <div class="text-center max-w-2xl mx-auto">
    <h1
      class="text-4xl font-bold text-primary mt-12 mb-8 flex items-center justify-center gap-2"
    >
      <IconCards class="h-12 w-12" stroke-width="1.5" />
      Les T-cards
      <IconCards class="h-12 w-12" stroke-width="1.5" />
    </h1>
    <p class="text-lg mb-8">
      Ces cartes sont générées via
      <a
        href="https://glif.app"
        target="_blank"
        class="underline text-primary font-semibold"
        >glif.app</a
      >
      en utilisant ChatGPT ainsi que Flux. Elles sont créées par les viewers de
      ma chaîne Twitch, par l'intermédiaire des points de chaîne.
    </p>
  </div>
  <div
    v-if="status === 'pending' && !cards"
    class="flex gap-2 items-center font-semibold"
  >
    <span class="loading loading-spinner text-primary"></span>
    Chargement en cours...
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-8"
    v-else-if="cards"
  >
    <div
      class="card"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      v-for="card in cards"
      :key="card"
    >
      <div class="content-card">
        <img
          :src="`https://anthony-destenay.fr/projects/twitch/glif-image.php?id=${card}`"
          class="object-cover w-full h-full"
          alt=""
        />
      </div>
      <div class="glow"></div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  perspective: 1000px;
  aspect-ratio: 1986/3200;
}

.content-card {
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.15s ease-out;
  width: 100%;
  height: 100%;
}

.card .glow {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  background: radial-gradient(
    circle at 50% -100%,
    rgba(255, 255, 255, 0.25),
    transparent
  );
  transition: all 0.15s ease-out;

  mix-blend-mode: hard-light;
  border-radius: 10px;
}
</style>
