import { GraphQLClient } from "graphql-request";

export const BUCKET_URL = "https://everything-1.s3.us-east-1.amazonaws.com/";

export const graphqlClient = new GraphQLClient("/api/graphql");
