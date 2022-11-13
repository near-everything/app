import Image from "next/image";
import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
import { useThingsByOwner } from "../utils/queries";
import DetailsModal from "./DetailsModal";

function ThingList({ ownerId }) {
  const [details, setDetails] = useState({});
  const { data, isLoading, isError, error } = useThingsByOwner(
    ownerId,
    {
      enabled: !!ownerId,
    }
  );

  const renderThing = (thing, index) => {
    return (
      <div className=" bg-gray-800 border-black border-2 rounded-xl shadow-xl h-64">
        <div className="flex flex-row items-center h-full px-4">
          {thing.medias?.edges < 1 ? null : (
            <div className="relative w-56 h-56">
              <Image
                src={thing.medias?.edges[0]?.node.mediaUrl}
                alt=""
                layout="fill"
                objectFit="cover"
                priority={index < 5}
                className="rounded-xl"
              />
            </div>
          )}
          <div className="flex flex-1 items-center justify-center">
            <label
              htmlFor="thing-details"
              className="btn modal-button"
              onClick={() => setDetails(thing)}
            >
              details
            </label>
          </div>
        </div>
      </div>
    );
  };
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full">
        <PulseLoader
          size={10}
          color={"#e5e7eb"}
          loading={isLoading}
          speedMultiplier={1.5}
        />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full">
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      {data && data.map((it, index) => renderThing(it.node, index))}
      <DetailsModal thing={details} />
    </>
  );
}

export default ThingList;
