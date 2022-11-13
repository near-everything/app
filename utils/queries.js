import { gql } from "graphql-request";

import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../app/api";

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
                        attribute {
                          id
                          name
                        }
                        option {
                          id
                          value
                        }
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
