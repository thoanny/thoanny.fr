import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.css"],

  site: {
    url: "https://thoanny.fr",
    name: "Thoanny",
    description:
      "Blog de Thoanny, où sont partagés des actualités de ses projets personnels, des articles sur le thème du streaming, du jeu vidéo, et aussi des trucs et astuces...",
    defaultLocale: "fr",
  },

  routeRules: {
    "/revue-de-presse": { redirect: { to: "/", statusCode: 308 } },
    "/revue-de-presse/2": { redirect: { to: "/", statusCode: 308 } },
    "/revue-de-presse/3": { redirect: { to: "/", statusCode: 308 } },
  },

  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },

  linkChecker: {
    enabled: false,
  },

  app: {
    head: {
      meta: [
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
      script: [
        {
          src: "https://cdn-cookieyes.com/client_data/4c6d6567c5167691cea59bb42bcb5341/script.js",
          id: "cookieyes",
        },
      ],
    },
  },

  modules: ["@nuxtjs/seo", "@kgierke/nuxt-matomo", "@nuxt/fonts"],

  matomo: {
    host: "https://analytics.an-d.me",
    siteId: 15,
    disableCookies: true,
  },

  compatibilityDate: "2025-02-24",

  vite: {
    plugins: [tailwindcss()],
  },
});
