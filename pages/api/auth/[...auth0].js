// import NextAuth from "next-auth";
// import Auth0Provider from "next-auth/providers/auth0";

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     Auth0Provider({
//       clientId: process.env.AUTH0_CLIENT_ID,
//       clientSecret: process.env.AUTH0_CLIENT_SECRET,
//       issuer: process.env.AUTH0_ISSUER,
//       audience: process.env.AUTH0_AUDIENCE,
//       idToken: true,
//       authorization: {
//         params: {
//           audience: encodeURI(process.env.AUTH0_AUDIENCE),
//         },
//       },
//     }),
//   ],
//   callbacks: {
//     session: async ({ session, token }) => {
//       if (token) {
//         session.user = token.user;
//         session.accessToken = token.accessToken;
//         session.error = token.error;
//       }
//       return session;
//     },
//     async jwt({ token, account }) {
//       // Persist the OAuth access_token to the token right after signin
//       if (account) {
//         token.accessToken = account.access_token;
//       }
//       console.log("JWTTTTTOKEN", token, account);
//       return token;
//     }
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//     secret: process.env.NEXTAUTH_SECRET,
//   },
// };
// export default NextAuth(authOptions);


import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth();