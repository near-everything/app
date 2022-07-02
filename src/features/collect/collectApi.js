import { gql, request } from "graphql-request";
import { useMutation, useQuery } from "react-query";
import { API_URL } from "../../app/api";

export function useCategoryById(categoryId) {
  return useQuery("categoryById", async () => {
    const { categoryById } = await request(
      API_URL,
      gql`
        query categoryById {
          categoryById(id: ${categoryId}) {
            id
            name
          }
        }
      `
    );
    return categoryById;
  });
}

export function useCategories() {
  return useQuery("categories", async () => {
    const {
      allCategories: { edges },
    } = await request(
      API_URL,
      gql`
        query getCategories {
          allCategories {
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
      allSubcategories: { edges },
    } = await request(
      API_URL,
      gql`
        query getSubcategoriesByCategoryId {
          allSubcategories(condition: { categoryId: ${categoryId} }) {
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
      allAssociations: { edges },
    } = await request(
      API_URL,
      gql`
        query attributesBySubcategoryId {
          allAssociations(condition: { subcategoryId: ${subcategoryId} }) {
            edges {
              node {
                attributeByAttributeId {
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
    const { attributeById } = await request(
      API_URL,
      gql`
        query attributeById {
          attributeById(id: ${parseInt(attributeId)}) {
            id
            name
          }
        }
      `
    );
    return attributeById;
  });
}

export function useCreateItem() {
  return useMutation(async (newItem) => {
    await request(
      API_URL,
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
