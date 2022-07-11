import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

export const API_URL = process.env.REACT_APP_EVERYTHING_API_URL;
export const queryClient = new QueryClient();

export const graphqlClient = new GraphQLClient(API_URL);