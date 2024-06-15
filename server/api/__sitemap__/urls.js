// server/api/__sitemap__/urls.ts
export default defineSitemapEventHandler(async () => {
  const data = await $fetch("https://wp.thoanny.fr/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: `
        query GET_SLUGS {
          posts(first: 999) {
            nodes {
              slug
              modified
            }
          }
          categories(first: 999) {
            nodes {
              slug
            }
          }
          tags(first: 999) {
            nodes {
              slug
            }
          }
          pages(first: 999) {
            nodes {
              slug
              modified
            }
          }
        }
    `,
    }),
  }).then((res) => res.data);

  const posts = await data.posts.nodes.map((p) => {
    return { loc: `/${p.slug}`, lastmod: p.modified, _sitemap: "posts" };
  });

  const pages = await data.pages.nodes.map((p) => {
    return { loc: `/${p.slug}`, lastmod: p.modified, _sitemap: "pages" };
  });

  const categories = await data.categories.nodes.map((c) => {
    return { loc: `/categories/${c.slug}`, _sitemap: "categories" };
  });

  const tags = await data.tags.nodes.map((t) => {
    return { loc: `/mots-cles/${t.slug}`, _sitemap: "tags" };
  });

  return [...posts, ...pages, ...categories, ...tags];
});
