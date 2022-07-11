import { gql } from "graphql-request";
import { useMutation, useQuery } from "react-query";
import { graphqlClient } from "../../app/api";

export function useCategoryById(categoryId) {
  return useQuery("categoryById", async () => {
    const { category } = await graphqlClient.request(
      gql`
        query categoryById {
          category(id: ${categoryId}) {
            id
            name
          }
        }
      `
    );
    return category;
  });
}

export function useCategories() {
  return useQuery("categories", async () => {
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
  });
}

export function useSubcategoriesByCategoryId(categoryId) {
  return useQuery(["subcategoriesByCategoryId", categoryId], async () => {
    const {
      subcategories: { edges },
    } = await graphqlClient.request(
      gql`
        query getSubcategoriesByCategoryId {
          subcategories(condition: { categoryId: ${categoryId} }) {
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
  });
}

export function useAttributesBySubcategoryId(subcategoryId) {
  return useQuery(["attributesBySubcategoryId", subcategoryId], async () => {
    const {
      associations: { edges },
    } = await graphqlClient.request(
      gql`
        query attributesBySubcategoryId {
          associations(condition: { subcategoryId: ${subcategoryId} }) {
            edges {
              node {
                attribute {
                  id
                  name
                }
              }
            }
          }
        }
      `
    );
    return edges;
  });
}

export function useAttributeById(attributeId) {
  return useQuery(["attributeById", attributeId], async () => {
    const { attribute } = await graphqlClient.request(
      gql`
        query attributeById {
          attribute(id: ${parseInt(attributeId)}) {
            id
            name
          }
        }
      `
    );
    return attribute;
  });
}

export function useCreateItem() {
  return useMutation(async (newItem) => {
    await graphqlClient.request(
      gql`
        mutation createItem($input: CreateItemInput!) {
          createItem(input: $input) {
            item {
              id
            }
          }
        }
      `,
      { input: newItem }
    );
  });
}
