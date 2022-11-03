import { GraphQLClient } from "graphql-request";

export const SUBGRAPH_URL = process.env.NEXT_PUBLIC_SUBGRAPH_URL;
export const BUCKET_URL = "https://everything-1.s3.us-east-1.amazonaws.com/";

export const graphqlClient = new GraphQLClient("/api/graphql");

export const subgraphClient = new GraphQLClient(SUBGRAPH_URL);
