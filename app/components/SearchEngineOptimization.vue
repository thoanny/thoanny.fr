<script setup>
import { stripHtml } from "string-strip-html";

const props = defineProps(["title", "description", "image"]);
const seoImage = props.image ?? "/og-image.png";
const seoDescription = props.description
  ? stripHtml(props.description).result
  : "Blog de Thoanny, où sont partagés des actualités de ses projets personnels, des articles sur le thème du streaming, du jeu vidéo, et aussi des trucs et astuces...";
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="title" :content="title" />
    <Meta name="description" :content="seoDescription" />
    <Meta property="og:title" :content="title" />
    <Meta property="og:description" :content="seoDescription" />
    <!-- <Meta property="og:image" :content="seoImage" /> -->
    <Meta property="twitter:title" :content="title" />
    <Meta property="twitter:description" :content="seoDescription" />
    <!-- <Meta property="twitter:image" :content="seoImage" /> -->
  </Head>
</template>
