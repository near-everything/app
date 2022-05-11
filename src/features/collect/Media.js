import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageCard from "../../components/Cards/ImageCard";
import FileUpload from "../../components/FileUpload";
import Button from "../../components/Button";
import { setMedia } from "./collectSlice";
import Header from "../../components/Header";

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
    navigate("/category");
  };

  return (
    <>
      <Header title={"Media"} pageNumber={"1"} />
      <div className="flex flex-col justify-between h-full">
        <div>
          <FileUpload
            onChange={(event) => {
              if (event.target.files.length > 0) {
                const urls = Array.from(event.target.files).map((file) =>
                  URL.createObjectURL(file)
                );
                setFiles([...files, ...urls]);
                event.target.value = null;
              }
            }}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 py-4">
            {files.length > 0 &&
              files.map((file, index) => (
                <ImageCard
                  key={index}
                  index={index}
                  media={file}
                  removeImage={removeFile}
                />
              ))}
          </div>
        </div>
        <Button className="flex justify-self-end" onClick={onSubmit} disabled={files.length === 0 || files.length > 10}>Next &#x2192;</Button>
      </div>
    </>
  );
}

export default Media;
