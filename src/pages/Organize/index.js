import { gql } from "graphql-request";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { dehydrate, QueryClient } from "react-query";
import { graphqlClient } from "../../app/api";
import ItemCard from "../../components/Cards/ItemCard";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";
import { useInfiniteItems } from "../../features/organize/organizeApi";

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(
    ["infiniteItems"],
    async ({ pageParam = 0 }) => {
      const { items } = await graphqlClient.request(
        gql`
          query items($first: Int!, $after: Cursor) {
            items(first: $first, after: $after) {
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
      return items;
    }
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function Organize() {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteItems();
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
                  {page.edges?.map((item) => (
                    <div key={item.node.id}>
                      <ItemCard item={item.node} />
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
