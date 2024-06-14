// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#93c045" },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
