// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  site: {
    url: "https://thoanny.fr",
    name: "Thoanny",
    description:
      "Blog de Thoanny, où sont partagés des actualités de ses projets personnels, des articles sur le thème du streaming, du jeu vidéo, et aussi des trucs et astuces...",
    defaultLocale: "fr",
  },

  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },

  ogImage: {
    enabled: false,
  },

  linkChecker: {
    enabled: false,
  },

  app: {
    head: {
      meta: [
        { property: "og:type", content: "website" },
        { property: "twitter:card", content: "summary_large_image" },
        { name: "apple-mobile-web-app-title", content: "Thoanny" },
        { name: "application-name", content: "Thoanny" },
        { name: "msapplication-TileColor", content: "#93c045" },
        { name: "msapplication-TileImage", content: "/mstile-144x144.png" },
        { name: "theme-color", content: "#93c045" },
      ],
      link: [
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#93c045" },
      ],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "@nuxtjs/algolia",
    "@nuxtjs/mdc",
  ],

  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    instantSearch: {
      theme: "reset",
    },
  },

  compatibilityDate: "2025-02-24",
});
