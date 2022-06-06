import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ImageCard from "../../components/Cards/ImageCard";
import Header from "../../components/Header";
import { selectUser } from "../auth/authSlice";
import { insert, resetCollect } from "./collectSlice";

function Review() {
  const media = useSelector((state) => state.collect.media);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = useSelector((state) => state.collect);

  const user = useSelector(selectUser);

  const onSubmit = () => {
    dispatch(insert({ item, user }));
    dispatch(resetCollect());
    navigate("/complete");
  };

  return (
    <>
      <Header title={"Review"} pageNumber={"5"} />
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-row mt-4">
          {media.length > 0 &&
            media.map((file, index) => (
              <ImageCard key={index} index={index} media={file} />
            ))}
        </div>
        <div>
          <p>
            <span className="font-semibold">Category:</span>{" "}
            {item.category.name}
          </p>
          <p>
            <span className="font-semibold">Subcategory:</span>{" "}
            {item.subcategory.name}
          </p>
          <p>
            <span className="font-semibold">Brand:</span> {item.brand}
          </p>
          <p>
            <span className="font-semibold">Condition:</span> {item.condition}
          </p>
          <p>
            <span className="font-semibold">Material:</span> {item.material}
          </p>
          <p>
            <span className="font-semibold">Size:</span> {item.size}
          </p>
          <p>
            <span className="font-semibold">Quantity:</span> {item.quantity}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {item.description}
          </p>
        </div>
        <Button className="" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
}

export default Review;
