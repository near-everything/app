import { gql } from "graphql-request";
import { useMutation, useQuery } from "react-query";
import { graphqlClient, queryClient } from "../../app/api";

export function useInviteByPhoneNumber(phoneNumber) {
  return useQuery("inviteByPhoneNumber", async () => {
    const { invite } = await graphqlClient.request(
      gql`
        query inviteByPhoneNumber($phoneNumber: String!) {
          invite(phoneNumber: $phoneNumber) {
            isApproved
          }
        }
      `,
      { phoneNumber }
    );
    return invite;
  });
}

export function useRequestInvite() {
  return useMutation(
    "requestInvite",
    async (phoneNumber) => {
      return await graphqlClient.request(
        gql`
          mutation requestInvite($phoneNumber: String!) {
            createInvite(input: { invite: { phoneNumber: $phoneNumber } }) {
              invite {
                phoneNumber
              }
            }
          }
        `,
        { phoneNumber }
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("inviteByPhoneNumber");
        // TODO : send message that sucessfully submitted
      },
      onError: () => {
        // TODO : do something
      },
    }
  );
}
