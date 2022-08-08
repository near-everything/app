import { gql } from "graphql-request";
import { useMutation } from "react-query";
import { graphqlClient } from "../../app/api";

export function useCreateFeedback() {
  return useMutation((newFeedback) => {
    return graphqlClient.request(
      gql`
        mutation createFeedback($input: CreateFeedbackInput!) {
          createFeedback(input: $input) {
            feedback {
              id
            }
          }
        }
      `,
      { input: { feedback: newFeedback } }
    );
  });
}