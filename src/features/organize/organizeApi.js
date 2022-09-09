import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { graphqlClient } from "../../app/api";

const THINGS_PER_PAGE = 10;
const REQUESTS_PER_PAGE = 10;
const POSTS_PER_PAGE = 10;

export function useInfiniteThings() {
  const result = useInfiniteQuery(
    ["infiniteThings"],
    async ({ pageParam = 0 }) => {
      const { things } = await graphqlClient.request(
        gql`
          query things($first: Int!, $after: Cursor) {
            things(first: $first, after: $after) {
              edges {
                cursor
                node {
                  id
                  medias {
                    edges {
                      node {
                        mediaUrl
                      }
                    }
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
          }
        `,
        pageParam || {
          first: THINGS_PER_PAGE,
          after: null,
        }
      );
      return things;
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.pageInfo.hasNextPage) {
          return {
            first: THINGS_PER_PAGE,
            after: lastPage.pageInfo.endCursor,
          };
        }
      },
    }
  );
  return result;
}

export function useInfiniteRequests() {
  const result = useInfiniteQuery(
    ["infiniteRequests"],
    async ({ pageParam = 0 }) => {
      const { requests } = await graphqlClient.request(
        gql`
          query requests($first: Int!, $after: Cursor) {
            requests(first: $first, after: $after) {
              edges {
                cursor
                node {
                  id
                  medias {
                    edges {
                      node {
                        mediaUrl
                      }
                    }
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
          }
        `,
        pageParam || {
          first: REQUESTS_PER_PAGE,
          after: null,
        }
      );
      return requests;
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.pageInfo.hasNextPage) {
          return {
            first: REQUESTS_PER_PAGE,
            after: lastPage.pageInfo.endCursor,
          };
        }
      },
    }
  );
  return result;
}

export function useInfinitePosts() {
  const result = useInfiniteQuery(
    ["infinitePosts"],
    async ({ pageParam = 0 }) => {
      const { posts } = await graphqlClient.request(
        gql`
          query posts($first: Int!, $after: Cursor) {
            posts(first: $first, after: $after) {
              edges {
                cursor
                node {
                  id
                  medias {
                    edges {
                      node {
                        mediaUrl
                      }
                    }
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
          }
        `,
        pageParam || {
          first: POSTS_PER_PAGE,
          after: null,
        }
      );
      return posts;
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.pageInfo.hasNextPage) {
          return {
            first: POSTS_PER_PAGE,
            after: lastPage.pageInfo.endCursor,
          };
        }
      },
    }
  );
  return result;
}

export function useThingById(thingId) {
  return useQuery(["thingById", thingId], async () => {
    const { thing } = await graphqlClient.request(
      gql`
        query thingById($thingId: Int!) {
          thing(id: $thingId) {
            id
            characteristics {
              edges {
                node {
                  attributeId
                  optionId
                }
              }
            }
            medias {
              edges {
                node {
                  mediaUrl
                }
              }
            }
          }
        }
      `,
      { thingId }
    );
    return thing;
  });
}

export function useThingsByOwner(ownerId, options) {
  return useQuery(
    ["thingsByOwner", ownerId],
    async () => {
      const {
        things: { edges },
      } = await graphqlClient.request(
        gql`
          query thingsByOwner($ownerId: String!) {
            things(condition: { ownerId: $ownerId }) {
              edges {
                node {
                  id
                  characteristics {
                    edges {
                      node {
                        attributeId
                        optionId
                      }
                    }
                  }
                  medias {
                    edges {
                      node {
                        mediaUrl
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        { ownerId }
      );
      return edges;
    },
    options
  );
}

export function useRequestsByRequester(requesterId, options) {
  return useQuery(
    ["requestsByRequester", requesterId],
    async () => {
      const {
        requests: { edges },
      } = await graphqlClient.request(
        gql`
          query requestsByRequester($requesterId: String!) {
            requests(condition: { requesterId: $requesterId }) {
              edges {
                node {
                  id
                  medias {
                    edges {
                      node {
                        mediaUrl
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        { requesterId }
      );
      return edges;
    },
    options
  );
}

export function usePostsByPoster(posterId, options) {
  return useQuery(
    ["postsByPoster", posterId],
    async () => {
      const {
        posts: { edges },
      } = await graphqlClient.request(
        gql`
          query postsByPoster($posterId: String!) {
            posts(condition: { posterId: $posterId }) {
              edges {
                node {
                  id
                  medias {
                    edges {
                      node {
                        mediaUrl
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        { posterId }
      );
      return edges;
    },
    options
  );
}

export function useRequestById(requestId) {
  return useQuery(["requestById", requestId], async () => {
    const { request } = await graphqlClient.request(
      gql`
        query requestById($requestId: Int!) {
          request(id: $requestId) {
            id
            medias {
              edges {
                node {
                  mediaUrl
                }
              }
            }
          }
        }
      `,
      { requestId }
    );
    return request;
  });
}
