import Image from "next/image";
import React from "react";
import Card from "../Card";

function ImageCard({ index, media, removeImage }) {
  return (
    <Card>
      <div className="h-96 w-full relative">
        {removeImage ? (
          <div className="relative z-50 float-right m-2">
            <button
              className="rounded-full py-1 px-3 bg-white dark:bg-black cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
              onClick={() => removeImage(index)}
            >
              <span className="">&times;</span>
            </button>
          </div>
        ) : null}
        <Image alt="not found" src={media} layout="fill" objectFit="cover" />
      </div>
    </Card>
  );
}

export default ImageCard;
