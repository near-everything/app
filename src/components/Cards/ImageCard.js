import React from "react";
import Card from "../Card";
import CardBody from "../CardBody";

function ImageCard({ index, media, removeImage }) {
  return (
    <Card>
      <div className="relative">
        <button
          className="absolute top-0 right-2 z-10"
          onClick={() => removeImage(index)}
        >
          &times;
        </button>
        <CardBody className="flex flex-col">
          <img alt="not found" src={media} className="w-32 m-2" />
        </CardBody>
      </div>
    </Card>
  );
}

export default ImageCard;
