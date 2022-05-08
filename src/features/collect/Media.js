import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageCard from "../../components/Cards/ImageCard";
import FileUpload from "../../components/FileUpload";
import { setMedia } from "./collectSlice";

function Media() {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const media = useSelector((state) => state.collect.media);
  const { handleSubmit } = useForm({ defaultValues: { media } });

  const removeFile = (index) => {
    setFiles((old) => {
      return old.filter((value, i) => i !== index);
    });
  };

  const onSubmit = () => {
    // dispatch(setMedia(files));
    navigate("/category");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FileUpload
          onChange={(event) => {
            if (event.target.files.length > 0) {
              setFiles([...files, ...event.target.files]);
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
                media={URL.createObjectURL(file)}
                removeImage={removeFile}
              />
            ))}
        </div>
        <button>Next</button>
      </form>
    </>
  );
}

export default Media;
