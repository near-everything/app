import { gql } from "graphql-request";
import { useMutation, useQuery } from "react-query";
import { graphqlClient } from "../../app/api";

export function useCategories(options) {
  return useQuery(
    "categories",
    async () => {
      const {
        categories: { edges },
      } = await graphqlClient.request(
        gql`
          query getCategories {
            categories {
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

export function useSubcategoriesByCategoryId(categoryId, options) {
  return useQuery(
    ["subcategoriesByCategoryId", categoryId],
    async () => {
      const {
        subcategories: { edges },
      } = await graphqlClient.request(
        gql`
          query getSubcategoriesByCategoryId($categoryId: Int!) {
            subcategories(condition: { categoryId: $categoryId }) {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        `,
        { categoryId }
      );
      return edges;
    },
    options
  );
}

export function useAttributes(options) {
  return useQuery(
    "attributes",
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
              name
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

export function useProposeCategory() {
  return useMutation((name) => {
    return graphqlClient.request(
      gql`
        mutation proposeCategory($name: String!) {
          createCategory(
            input: { category: { isProposal: true, name: $name } }
          ) {
            category {
              id
              name
            }
          }
        }
      `,
      { name }
    );
  });
}

export function useProposeSubcategory() {
  return useMutation((newSubcategory) => {
    return graphqlClient.request(
      gql`
        mutation proposeSubcategory($categoryId: Int!, $name: String!) {
          createSubcategory(
            input: {
              subcategory: {
                isProposal: true
                categoryId: $categoryId
                name: $name
              }
            }
          ) {
            subcategory {
              id
              name
            }
          }
        }
      `,
      {
        name: newSubcategory.subcategory,
        categoryId: newSubcategory.categoryId,
      }
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
        attributeId: newOption.attributeId
      }
    );
  });
}
