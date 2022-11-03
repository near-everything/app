import Image from "next/image";
import React from "react";

const MediaSlide = React.forwardRef(function MediaSlide({ imgSrc, removeMedia, allowRemove }, ref) {
  return (
    <div className="relative w-full h-full" ref={ref}>
      {allowRemove ? (
        <div className="absolute z-50 left-2 top-2">
          <button
            className="btn btn-ghost btn-circle bg-white text-gray-800 opacity-20 shadow-lg"
            onClick={removeMedia}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ) : null}
      <Image src={imgSrc} alt="" layout="fill" objectFit="contain" />
    </div>
  );
});

export default MediaSlide;
