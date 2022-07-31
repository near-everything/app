import { gql } from "graphql-request";
import { useMutation } from "react-query";
import { graphqlClient } from "../../app/api";

export function useCreateHelp() {
  return useMutation((newHelp) => {
    return graphqlClient.request(
      gql`
        mutation createHelp($input: CreateHelpInput!) {
          createHelp(input: $input) {
            help {
              id
            }
          }
        }
      `,
      { input: { help: newHelp } }
    );
  });
}

export function useCreateIdea() {
  return useMutation((newIdea) => {
    return graphqlClient.request(
      gql`
        mutation createIdea($input: CreateIdeaInput!) {
          createIdea(input: $input) {
            idea {
              id
            }
          }
        }
      `,
      { input: { idea: newIdea } }
    );
  });
}

export function useCreateConcern() {
  return useMutation((newConcern) => {
    return graphqlClient.request(
      gql`
        mutation createConcern($input: CreateConcernInput!) {
          createConcern(input: $input) {
            concern {
              id
            }
          }
        }
      `,
      { input: { concern: newConcern } }
    );
  });
}