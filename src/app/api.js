import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

export const API_URL = process.env.NEXT_PUBLIC_EVERYTHING_API_URL;
export const queryClient = new QueryClient();

export const graphqlClient = new GraphQLClient(API_URL);