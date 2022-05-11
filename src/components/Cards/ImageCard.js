import React from "react";
import Card from "../Card";

function ImageCard({ index, media, removeImage }) {
  return (
    <Card className="m-1 max-w-xs max-h-xs aspect-square flex justify-center">
      <div className="flex relative overflow-hidden w-full h-full">
        {removeImage ? (
          <button
            className="absolute top-0 right-2 z-10"
            onClick={() => removeImage(index)}
          >
            &times;
          </button>
        ) : null}
        <img alt="not found" src={media} className="object-cover" />
      </div>
    </Card>
  );
}

export default ImageCard;
