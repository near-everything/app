import { gql } from "graphql-request";
import { useMutation } from "react-query";
import { graphqlClient } from "../../app/api";

export function useCreateUser() {
  return useMutation(
    "createUser",
    async (uid) => {
      return await graphqlClient.request(
        gql`
          mutation createUser($uid: String!) {
            createUser(input: { uid: $uid }) {
              user {
                id
              }
            }
          }
        `,
        { uid }
      );
    },
    {
      onSuccess: () => {
        console.log("success");
      },
      onError: () => {
        console.log("failure");
      },
    }
  );
}
