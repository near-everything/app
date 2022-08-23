import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { subgraphClient } from "../../app/api";

export function useInventory() {
  return useQuery(
    "inventory",
    async () => {
      const {
        tokens
      } = await subgraphClient.request(
        gql`
          query inventory {
            tokens {
              id
              owner {
                id
              }
              tokenId
            }
          }
        `
      );
      return tokens;
    }
  );
}
