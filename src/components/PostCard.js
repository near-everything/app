import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import Image from "next/image";
import React from "react";
import { PulseLoader } from "react-spinners";
import { graphqlClient } from "../app/api";

function PostCard({ postId }) {
  const {
    data: post,
    isLoading,
    isError,
  } = useQuery(["postById", postId], async () => {
    const { post } = await graphqlClient.request(
      gql`
        query postById($postId: Int!) {
          post(id: $postId) {
            id
            posterId
            medias {
              edges {
                node {
                  mediaUrl
                }
              }
            }
          }
        }
      `,
      { postId: parseInt(postId) }
    );
    return post;
  });

  return (
    <>
      {isLoading || isError ? (
        <>
          <PulseLoader
            size={10}
            color={"#e5e7eb"}
            loading={true}
            speedMultiplier={1.5}
          />
        </>
      ) : (
        <div className="bg-base-100 shadow-xl">
          <figure className="h-64 relative">
            <Image
              src={post?.medias?.edges[0]?.node.mediaUrl}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </figure>
          <div className="card-body">
            <p>{post?.posterId}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default PostCard;
