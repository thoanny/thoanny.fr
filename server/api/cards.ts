export default defineEventHandler(async () => {
  return await $fetch(process.env.T_CARDS).then((res) => res);
});
