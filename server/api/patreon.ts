export default defineEventHandler(async () => {
  // TODO : https://blog.terresquall.com/2023/01/how-to-fix-the-patreon-api-only-returning-the-20-oldest-patrons/
  const token = process.env.PATREON_API_TOKEN;
  const campaign = process.env.PATREON_CAMPAIGN_ID;
  return await $fetch(
    `https://www.patreon.com/api/oauth2/v2/campaigns/${campaign}/posts?fields%5Bpost%5D=title,is_public,published_at,url&page%5Bcount%5D=100`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res) => res.data.reverse().splice(0, 5));
});
