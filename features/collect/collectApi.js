import { gql } from "graphql-request";
import { useMutation, useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../../app/api";

export function useAttributes(options) {
  return useQuery(
    ["attributes"],
    async () => {
      const {
        attributes: { edges },
      } = await graphqlClient.request(
        gql`
          query getAttributes {
            attributes {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        `
      );
      return edges;
    },
    options
  );
}

export function useAttributeById(attributeId, options) {
  return useQuery(
    ["attributeById", attributeId],
    async () => {
      const attribute = await graphqlClient.request(
        gql`
          query attributeById($attributeId: Int!) {
            attribute(id: $attributeId) {
              name
              relationships {
                edges {
                  node {
                    option {
                      id
                      value
                    }
                  }
                }
              }
            }
          }
        `,
        { attributeId }
      );
      return attribute;
    },
    options
  );
}

export function useOptionById(optionId) {
  return useQuery(["optionById", optionId], async () => {
    const option = await graphqlClient.request(
      gql`
        query optionById($optionId: Int!) {
          option(id: $optionId) {
            value
          }
        }
      `,
      { optionId }
    );
    return option;
  });
}

export function useCreateThing() {
  return useMutation((newThing) => {
    return graphqlClient.request(
      gql`
        mutation createThing($input: CreateThingInput!) {
          createThing(input: $input) {
            thing {
              id
            }
          }
        }
      `,
      { input: newThing }
    );
  });
}

export function useCreatePost() {
  return useMutation((newPost) => {
    return graphqlClient.request(
      gql`
        mutation createPost($input: PostInput!) {
          createPost(input: { post: $input }) {
            post {
              id
            }
          }
        }
      `,
      { input: newPost }
    );
  });
}

export function useCreateMedia() {
  return useMutation((newMedia) => {
    return graphqlClient.request(
      gql`
        mutation createMedia($input: MediaInput!) {
          createMedia(input: { media: $input }) {
            media {
              id
            }
          }
        }
      `,
      { input: newMedia }
    );
  });
}

export function useProposeAttribute() {
  return useMutation((name) => {
    return graphqlClient.request(
      gql`
        mutation proposeAttribute($name: String!) {
          proposeAttribute(input: { name: $name }) {
            attribute {
              id
              name
            }
          }
        }
      `,
      {
        name,
      }
    );
  });
}

export function useProposeOption() {
  return useMutation((newOption) => {
    return graphqlClient.request(
      gql`
        mutation proposeOption($value: String!, $attributeId: Int!) {
          proposeOption(input: { value: $value, attributeId: $attributeId }) {
            option {
              id
              value
            }
          }
        }
      `,
      {
        value: newOption.value,
        attributeId: newOption.attributeId,
      }
    );
  });
}
