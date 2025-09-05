// server/api/__sitemap__/urls.ts
export default defineSitemapEventHandler(async () => {
  const data = await $fetch("https://api.thoanny.fr/blog/sitemap");

  const posts = await data.posts.map((p) => {
    return {
      loc: `/${p.slug}`,
      lastmod: p.updatedAt || p.publishedAt,
      _sitemap: "posts",
    };
  });

  const categories = await data.categories.map((c) => {
    return { loc: `/categories/${c.slug}`, _sitemap: "categories" };
  });

  const tags = await data.tags.map((t) => {
    return { loc: `/mots-cles/${t.slug}`, _sitemap: "tags" };
  });

  return [...posts, ...categories, ...tags];
});
