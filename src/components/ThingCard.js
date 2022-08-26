import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import Image from "next/image";
import React from "react";
import { PulseLoader } from "react-spinners";
import { graphqlClient } from "../app/api";
import Characteristic from "./Characteristic";

function ThingCard({ thingId }) {
  const {
    data: thing,
    isLoading,
    isError,
  } = useQuery(["thingById", thingId], async () => {
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
    return thing;
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
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure className="h-64 relative">
            <Image
              src={thing.media[0]}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </figure>
          <div className="card-body">
            <div className="card-actions">
              {thing.characteristics.edges?.map((it) => {
                return (
                  <Characteristic key={it.node.attributeId} char={it.node} />
                );
              })}
            </div>
            <div className="card-actions">
              <button className="btn btn-primary w-full">add to cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ThingCard;
