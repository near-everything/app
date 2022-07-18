import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ImageCard from "../../components/Cards/ImageCard";
import FileUpload from "../../components/FileUpload";
import Header from "../../components/Header";
import { setMedia } from "./collectSlice";

function Media() {
  const media = useSelector((state) => state.collect.media);
  const [files, setFiles] = useState([...media]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeFile = (index) => {
    setFiles((old) => {
      return old.filter((value, i) => i !== index);
    });
  };

  const onSubmit = () => {
    dispatch(setMedia(files));
    navigate("/details");
  };

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <Header className="flex flex-1" title={"Media"} pageNumber={"1"} />
        <div className="flex flex-1 p-6 flex-col">
          <FileUpload
            onChange={(event) => {
              if (event.target.files.length > 0) {
                const urls = Array.from(event.target.files).map((file) =>
                  ({ data: file, url: URL.createObjectURL(file) })
                );
                setFiles([...files, ...urls]);
                event.target.value = null;
              }
            }}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 py-4 gap-2">
            {files.length > 0 &&
              files.map((file, index) => (
                <ImageCard
                  key={index}
                  index={index}
                  media={file.url}
                  removeImage={removeFile}
                />
              ))}
          </div>
        </div>
        <div className="flex m-4">
          <Button
            className="w-full h-16"
            onClick={onSubmit}
            disabled={files.length === 0 || files.length > 10}
          >
            &#x2192;
          </Button>
        </div>
      </div>
    </>
  );
}

export default Media;
