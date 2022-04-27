import React, { useState } from "react";
import { ImageIcon, OutlineUploadIcon } from "../icons";
import Button from "./Button";
import FileUpload from "./FileUpload";

function ImageUpload({ files, setFiles }) {
  return (
    <div className="flex mt-8">
      <div className="flex items-center justify-center w-full">
        <FileUpload
          onChange={(event) => {
            if (event.target.files.length > 0) {
              setFiles([...files, ...event.target.files]);
            }
          }}
        />
      </div>
      <div className="flex flex-row mt-4">
        {files.length > 0 &&
          files.map((file, index) => (
            <img
              key={index}
              alt="not found"
              src={URL.createObjectURL(file)}
              className="w-32 m-2"
            />
          ))}
      </div>
    </div>
  );
}

export default ImageUpload;
