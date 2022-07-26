import { gql } from "graphql-request";
import { useInfiniteQuery, useQuery } from "react-query";
import { graphqlClient } from "../../app/api";

const ITEMS_PER_PAGE = 10;

export function useInfiniteItems() {
  const result = useInfiniteQuery(
    ["infiniteItems"],
    async ({ pageParam = 0 }) => {
      const { items } = await graphqlClient.request(
        gql`
          query items($first: Int!, $after: Cursor) {
            items(first: $first, after: $after) {
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
          first: ITEMS_PER_PAGE,
          after: null,
        }
      );
      return items;
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.pageInfo.hasNextPage) {
          return {
            first: ITEMS_PER_PAGE,
            after: lastPage.pageInfo.endCursor,
          };
        }
      },
    }
  );
  return result;
}

export function useItemById(itemId) {
  return useQuery(["itemById", itemId], async () => {
    const { item } = await graphqlClient.request(
      gql`
        query itemById($itemId: Int!) {
          item(id: $itemId) {
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
      { itemId }
    );
    return item;
  });
}
