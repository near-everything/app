import React, { useState } from "react";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState([]);

  return (
    <div className="flex mt-8">
      <div className="rounded shadow-xl bg-gray-50 lg:w-1/2">
        <div className="m-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Select a photo
                </p>
              </div>
              <input
                multiple
                type="file"
                className="opacity-0"
                onChange={(event) => {
                  if (event.target.files.length > 0) {
                    setSelectedImage([...selectedImage, ...event.target.files]);
                  }
                }}
              />
            </label>
          </div>
          <div className="flex flex-row mt-4">
            {selectedImage.length > 0 &&
              selectedImage.map((file, index) => (
                <img
                  key={index}
                  alt="not found"
                  src={URL.createObjectURL(file)}
                  className="w-32 m-2"
                />
              ))}
          </div>
        </div>

        <div className="flex p-2 space-x-4">
          <button
            onClick={() => setSelectedImage([])}
            className="px-4 py-2 text-white bg-red-500 rounded shadow-xl"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
