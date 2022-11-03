import React from "react";
import ImageIcon from "../icons/image";

const MediaUpload = React.forwardRef(function MediaUpload(props, ref) {
  const { onUpload } = props;
  return (
    <label
      className="flex flex-1 flex-col justify-center cursor-pointer w-full h-full hover:border-green-300"
      onChange={onUpload}
    >
      <div className="flex flex-col items-center pt-6">
        <ImageIcon />
        <div className="flex flex-col text-sm text-center text-gray-400">
          <span className="font-semibold">add photos</span>
          <span className="">or drag and drop</span>
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        className="opacity-0"
        multiple
        ref={ref}
      />
    </label>
  );
});

export default MediaUpload;
