import React from "react";
import ImageIcon from "../icons/image";

const FileUpload = React.forwardRef(function FileUpload(props, ref) {
  return (
    <label className="flex flex-col justify-center border-4 cursor-pointer rounded-lg hover:border-green-300">
      <div className="flex flex-col items-center pt-6">
        <ImageIcon />
        <div className="flex flex-col text-sm text-center text-gray-400">
          <span className="font-semibold">add photos</span>
          <span className="">or drag and drop</span>
        </div>
      </div>
      <input type="file" accept="image/*" className="opacity-0" multiple ref={ref} {...props} />
    </label>
  );
});

export default FileUpload;
