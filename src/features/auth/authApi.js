import { gql } from "graphql-request";
import { useMutation, useQuery } from "react-query";
import { graphqlClient } from "../../app/api";

export function useUserById(uid) {
  return useQuery(
    "userById",
    async () => {
      const { invite } = await graphqlClient.request(
        gql`
          query userById($uid: String!) {
            user(id: $uid) {
              id
            }
          }
        `,
        { uid }
      );
      return invite;
    },
    {
      refetchOnWindowFocus: false,
      enabled: false, // disable this query from automatically running
    }
  );
}

export function useCreateUser() {
  return useMutation(
    "createUser",
    async (uid) => {
      return await graphqlClient.request(
        gql`
          mutation createUser($uid: String!) {
            createUser(input: { user: { id: $uid } }) {
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
        // TODO : do something
      },
      onError: () => {
        // TODO : do something
      },
    }
  );
}
