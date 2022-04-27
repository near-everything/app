import React from "react";
import { ImageIcon } from "../icons";

const FileUpload = React.forwardRef(function FileUpload(props, ref) {
  const { ...other } = props;

  return (
    <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
      <div className="flex flex-col items-center justify-center pt-7">
        <ImageIcon />
        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
          add photos
        </p>
      </div>
      <input type="file" className="opacity-0" multiple ref={ref} {...other} />
    </label>
  );
});

export default FileUpload;
