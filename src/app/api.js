import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GraphQLClient } from "graphql-request";

export const API_URL = process.env.NEXT_PUBLIC_EVERYTHING_API_URL;
export const SUBGRAPH_URL = process.env.NEXT_PUBLIC_SUBGRAPH_URL;

export const graphqlClient = new GraphQLClient(API_URL, {
  headers: () => {
    const auth = getAuth(getApp());
    return { authorization: `Bearer ${auth.currentUser.accessToken}` };
  },
});

export const subgraphClient = new GraphQLClient(SUBGRAPH_URL);
