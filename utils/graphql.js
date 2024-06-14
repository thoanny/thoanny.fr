const GRAPHQL = "https://wp.thoanny.fr/graphql";

const data = ref();

const call = async (query, variables) => {
  try {
    await $fetch(GRAPHQL, {
      method: "POST",
      body: JSON.stringify({ query, variables }),
    }).then((res) => {
      data.value = res.data;
    });

    return data.value;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPosts = async (variables = {}) => {
  return await call(
    `query GET_POSTS($after: String = "", $limit: Int = 10) {
        posts(where: {status: PUBLISH}, after: $after, first: $limit) {
          nodes {
            id, slug, title, date, excerpt
            featuredImage {
              node {
                altText, mediaItemUrl
                mediaDetails {
                  height, width
                  sizes(include: POST_CARD) {
                    height, sourceUrl, width
                  }
                }
                srcSet
              }
            }
            categories {
              nodes {
                id, name, slug
              }
            }
          }
          pageInfo {
            endCursor, hasNextPage
          }
        }
      }`,
    variables
  );
};

export const getCategory = async (variables = {}) => {
  return await call(
    `query GET_CATEGORY($id: ID!, $after: String = "", $limit: Int = 10) {
      category(id: $id, idType: SLUG) {
        name
        posts(after: $after, first: $limit) {
          nodes {
            id, slug, title, date, excerpt
            featuredImage {
              node {
                altText, mediaItemUrl
                mediaDetails {
                  height, width
                  sizes(include: POST_CARD) {
                    height, sourceUrl, width
                  }
                }
                srcSet
              }
            }
            categories {
              nodes {
                id, name, slug
              }
            }
          }
          pageInfo {
            endCursor, hasNextPage
          }
        }
      }
    }`,
    variables
  );
};

export const getTag = async (variables = {}) => {
  return await call(
    `query GET_TAG($id: ID!, $after: String = "", $limit: Int = 10) {
      tag(id: $id, idType: SLUG) {
        name
        posts(after: $after, first: $limit) {
          nodes {
            id, slug, title, date, excerpt
            featuredImage {
              node {
                altText, mediaItemUrl
                mediaDetails {
                  height, width
                  sizes(include: POST_CARD) {
                    height, sourceUrl, width
                  }
                }
                srcSet
              }
            }
            categories {
              nodes {
                id, name
              }
            }
          }
          pageInfo {
            endCursor, hasNextPage
          }
        }
      }
    }`,
    variables
  );
};

export const getPost = async (variables = {}) => {
  return await call(
    `query GET_CONTENT($id: ID = "") {
      page(id: $id, idType: URI) {
        id, title, content
      }
      post(id: $id, idType: URI) {
        title, databaseId, excerpt, date, content
        featuredImage {
          node {
            altText, caption, mediaItemUrl
            mediaDetails {
              height, width
            }
            srcSet
          }
        }
        categories {
          nodes {
            id, name, slug
          }
        }
        tags {
          nodes {
            id, name, slug
          }
        }
        author {
          node {
            avatar {
              url
            }
            name, description
          }
        }
      }
    }`,
    variables
  );
};

export const getTPotes = async () => {
  return await call(
    `query GET_TPOTES {
      tPotes(first: 1000, where: { orderby: { field: TITLE, order: ASC } }) {
        nodes {
          featuredImage {
            node {
              sourceUrl(size: THUMBNAIL)
            }
          }
          id
          title(format: RENDERED)
          tPotes {
            source, startAt
          }
        }
      }
    }`
  );
};
