import React, { useState } from "react";
import Card from "../Card";
import PulseLoader from "react-spinners/PulseLoader";

function ImageCard({ index, media, removeImage }) {
  const [loading, setLoading] = useState(true);
  return (
    <Card>
      {removeImage ? (
        <div className="relative">
          <button
            className="rounded-full py-1 px-3 bg-white dark:bg-black absolute top-4 right-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => removeImage(index)}
          >
            <span className="">&times;</span>
          </button>
        </div>
      ) : null}
      <div className={`${loading ? "block" : "hidden"} w-full h-48`}>
        <div className="flex flex-1 justify-center items-center h-full bg-gray-100 dark:bg-gray-800">
          <PulseLoader
            size={10}
            color={"#e5e7eb"}
            loading={loading}
            speedMultiplier={1.5}
          />
        </div>
      </div>
      <img
        alt="not found"
        src={media}
        className={`${loading ? "hidden" : "block"} w-full h-48 object-cover`}
        loading="lazy"
        onLoad={() => setLoading(false)}
      />
    </Card>
  );
}

export default ImageCard;
