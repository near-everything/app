import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { gql, GraphQLClient } from "graphql-request";

export default withApiAuthRequired(async function thing(req, res) {
  try {
    const { id: thingId }= req.query;
    const API_URL = process.env.NEXT_PUBLIC_EVERYTHING_API_URL;

    const { accessToken } = await getAccessToken(req, res, {
      scopes: ["read:thing"],
    });

    const graphqlClient = new GraphQLClient(API_URL, {
      headers: () => {
        return { Authorization: `Bearer ${accessToken}` };
      },
    });
    const { thing } = await graphqlClient.request(
      gql`
        query thingById($thingId: Int!) {
          thing(id: $thingId) {
            id
            characteristics {
              edges {
                node {
                  attributeId
                  optionId
                }
              }
            }
            media
          }
        }
      `,
      { thingId: parseInt(thingId) }
    );
    // return thing;
    // const things = await response.json();
    res.status(200).json(thing);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
