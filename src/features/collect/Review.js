import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ImageCard from "../../components/Cards/ImageCard";
import { selectUser } from "../auth/authSlice";
import { insert, resetCollect } from "./collectSlice";

function Review() {
  const [loading, setLoading] = useState(false);
  const media = useSelector((state) => state.collect.media);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = useSelector((state) => state.collect);

  const user = useSelector(selectUser);

  const removeFile = (index) => {};

  const onSubmit = () => {
    dispatch(insert({ item, user }));
    dispatch(resetCollect());
    navigate("/");
  };

  return (
    <>
      <pre>{JSON.stringify(item, null, 2)}</pre>
      <div className="flex flex-row mt-4">
        {media.length > 0 &&
          media.map((file, index) => (
            <ImageCard
              key={index}
              index={index}
              media={file}
              removeImage={removeFile}
            />
          ))}
      </div>
      <Button onClick={onSubmit}>Submit</Button>
    </>
  );
}

export default Review;
