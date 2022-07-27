import { getAuth } from "firebase/auth";
import { GraphQLClient } from "graphql-request";
import { firebase } from "./firebase";

export const API_URL = process.env.NEXT_PUBLIC_EVERYTHING_API_URL;

export const graphqlClient = new GraphQLClient(API_URL, {
  headers: () => {
    const auth = getAuth(firebase);
    return { authorization: `Bearer ${auth.currentUser.accessToken}` };
  },
});
