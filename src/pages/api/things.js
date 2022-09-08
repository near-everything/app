// import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
// import { gql, GraphQLClient } from "graphql-request";

// export default withApiAuthRequired(async function things(req, res) {
//   try {
//     const API_URL = process.env.NEXT_PUBLIC_EVERYTHING_API_URL;

//     const { accessToken } = await getAccessToken(req, res, {
//       scopes: ["read:things"],
//     });

//     const graphqlClient = new GraphQLClient(API_URL, {
//       headers: () => {
//         return { Authorization: `Bearer ${accessToken}` };
//       },
//     });
//     const { thing } = await graphqlClient.request(
//       gql`
//         query thingById($thingId: Int!) {
//           thing(id: $thingId) {
//             id
//             category {
//               name
//             }
//             subcategory {
//               name
//             }
//             characteristics {
//               edges {
//                 node {
//                   attributeId
//                   optionId
//                 }
//               }
//             }
//             media
//           }
//         }
//       `,
//       { thingId }
//     );
//     // return thing;
//     // const things = await response.json();
//     res.status(200).json(thing);
//   } catch (error) {
//     res.status(error.status || 500).json({ error: error.message });
//   }
// });
