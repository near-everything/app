import { gql } from "graphql-request";
import { useInfiniteQuery, useQuery } from "react-query";
import { graphqlClient } from "../../app/api";

const THINGS_PER_PAGE = 10;

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

export function useThingById(thingId) {
  return useQuery(["thingById", thingId], async () => {
    const { thing } = await graphqlClient.request(
      gql`
        query thingById($thingId: Int!) {
          thing(id: $thingId) {
            id
            category {
              name
            }
            subcategory {
              name
            }
            characteristics {
              edges {
                node {
                  attributeId
                  optionId
                }
              }
            }
            media
          }
        }
      `,
      { thingId }
    );
    return thing;
  });
}

export function useRequestById(requestId){
  return useQuery(["requestById",requestId], async ()=>{
    const { request } = await graphqlClient.request(
      gql`
        query requestById($requestId: Int!){
          request(id: $requestId) {
              id
              media
              referenceLink
              description
            }
        }
      `,
      {requestId}
    );
    return request;
  });
}