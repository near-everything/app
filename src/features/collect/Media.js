import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageCard from "../../components/Cards/ImageCard";
import FileUpload from "../../components/FileUpload";
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
    navigate("/category");
  };

  return (
    <>
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
      <div className="flex flex-row mt-4">
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
      <button onClick={onSubmit}>Next</button>
    </>
  );
}

export default Media;
