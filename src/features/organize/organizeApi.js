import { gql } from "graphql-request";
import { useInfiniteQuery, useQuery } from "react-query";
import { graphqlClient } from "../../app/api";

export function useItems() {
  return useInfiniteQuery(
    "items",
    async () => {
      const {
        items: { edges },
      } = await graphqlClient.request(
        gql`
          query items {
            items {
              edges {
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
            }
          }
        `
      );
      return edges;
    },
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    }
  );
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
