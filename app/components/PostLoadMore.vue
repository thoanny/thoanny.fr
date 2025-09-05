<script setup>
defineProps(["hasNextPage", "loading"]);
defineEmits(["loadMore"]);
</script>

<template>
  <div class="flex mt-6 justify-center" v-if="hasNextPage">
    <button
      class="btn btn-primary"
      @click="$emit('loadMore')"
      :disabled="loading"
    >
      <template v-if="loading">
        <span class="loading loading-spinner"></span> Chargement en cours
      </template>
      <template v-else>Afficher plus d'articles</template>
    </button>
  </div>
</template>
