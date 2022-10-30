import { useInfiniteQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { graphqlClient } from "../app/api";
import DetailsModal from "./DetailsModal";
import InfiniteList from "./InfiniteList";

const useInfiniteThings = () => {
  const result = useInfiniteQuery(
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
                  characteristics {
                    edges {
                      node {
                        attribute {
                          id
                          name
                        }
                        option {
                          id
                          value
                        }
                      }
                    }
                  }
                  medias {
                    edges {
                      node {
                        mediaUrl
                      }
                    }
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
          }
        `,
        pageParam || {
          first: 20,
          after: null,
        }
      );
      return things;
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.pageInfo.hasNextPage) {
          return {
            first: 20,
            after: lastPage.pageInfo.endCursor,
          };
        }
      },
    }
  );
  return result;
};

function ThingList() {
  const [details, setDetails] = useState({});
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteThings();

  const renderThing = (thing) => {
    return (
      <>
        <div className=" bg-gray-800 border-black border-2 h-full rounded-xl shadow-xl">
          <div className="flex flex-row">
            <div className="flex w-12 justify-center items-center">{thing.id}</div>
            <label
              htmlFor="thing-details"
              className="btn btn-xs modal-button"
              onClick={() => setDetails(thing)}
            >
              details
            </label>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <InfiniteList
        items={data?.pages.map((it) => (it = it.edges)).flat()}
        hasNextPage={hasNextPage}
        isNextPageLoading={isFetchingNextPage}
        loadNextPage={fetchNextPage}
        renderListItem={renderThing}
        listItemHeight={128}
      />
      <DetailsModal thing={details} />
    </>
  );
}

export default ThingList;
