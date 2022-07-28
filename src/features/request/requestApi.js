import { gql } from "graphql-request";
import { useMutation } from "react-query";
import { graphqlClient } from "../../app/api";

export function useCreateRequest() {
  return useMutation((newRequest) => {
    return graphqlClient.request(
      gql`
        mutation createRequest($input: CreateRequestInput!) {
          createRequest(input: $input) {
            request {
              id
            }
          }
        }
      `,
      { input: { request: newRequest } }
    );
  });
}
