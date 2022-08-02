import { gql } from "graphql-request";
import { parseCookies } from "nookies";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { dehydrate, QueryClient } from "react-query";
import { graphqlClient } from "../../app/api";
import getFirebaseAdmin from "../../app/firebaseAdmin";
import ThingCard from "../../components/Cards/ThingCard";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";
import { useInfiniteThings } from "../../features/organize/organizeApi";

export async function getServerSideProps(ctx) {
  try {
    const admin = getFirebaseAdmin();
    const cookies = parseCookies(ctx);
    await admin.auth().verifyIdToken(cookies.__session);

    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery(
      ["infiniteThings"],
      async ({ pageParam = 0 }) => {
        const { things } = await graphqlClient.request(
          gql`
            query things($first: Int!, $after: Cursor) {
              things(first: $first, after: $after) {
                edges {
                  cursor
                  node {
                    id
                    category {
                      name
                    }
                    media
                    subcategory {
                      name
                    }
                  }
                }
                pageInfo {
                  endCursor
                }
              }
            }
          `,
          pageParam || {
            first: 10,
            after: null,
          }
        );
        return things;
      }
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (err) {
    // either the `__session` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
}

function Organize() {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteThings();
  return (
    <>
      <div>
        {status === "success" && (
          <InfiniteScroll
            dataLength={data?.pages.length * 10}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<div>Loading...</div>}
            scrollableTarget="container"
          >
            <div className="grid gap-4">
              {data?.pages.map((page) => (
                <>
                  {page.edges?.map((thing) => (
                    <div key={thing.node.id}>
                      <ThingCard thing={thing.node} />
                    </div>
                  ))}
                </>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}

Organize.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"organize"} moduleColor={"yellow"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Organize;
