import { getAccessToken } from "@auth0/nextjs-auth0";
import httpProxyMiddleware from "next-http-proxy-middleware";

// Middleware to automatically attach access tokens to graphQL requests going to the API
export default async function handler(req, res) {
  const { accessToken } = await getAccessToken(req, res);
  // const token = await getToken({ req, raw: true });
  // if (token) {
  //   // Signed in
  //   console.log("JSON Web Token", JSON.stringify(token, null, 2));
  // } else {
  //   // Not Signed in
  //   res.status(403);
  // }
  return httpProxyMiddleware(req, res, {
    target: process.env.NEXT_PUBLIC_EVERYTHING_API_URL,
    pathRewrite: [
      {
        patternStr: "^/api/graphql",
        replaceStr: "",
      },
    ],
    changeOrigin: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
