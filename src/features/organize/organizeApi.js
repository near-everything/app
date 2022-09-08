import { getAccessToken } from "@auth0/nextjs-auth0";
import { gql } from "graphql-request";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../../app/api";

const THINGS_PER_PAGE = 10;
const REQUESTS_PER_PAGE = 10;

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
                  category {
                    name
                  }
                  media
                  subcategory {
                    name
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
                  media
                  referenceLink
                  description
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

export function useThingById(thingId) {
  return useQuery(["thingById", thingId], async () => {
    const response = await fetch(`/api/thing/${thingId}`);
    return await response.json();
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
                  media
                  category {
                    name
                  }
                  subcategory {
                    name
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
                  media
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

export function useRequestById(requestId) {
  return useQuery(["requestById", requestId], async () => {
    const { request } = await graphqlClient.request(
      gql`
        query requestById($requestId: Int!) {
          request(id: $requestId) {
            id
            media
            referenceLink
            description
          }
        }
      `,
      { requestId }
    );
    return request;
  });
}
