import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { subcategories } from "../../utils/categories";
import { setSubcategory } from "./collectSlice";

function Subcategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSelector((state) => state.collect.category);

  const onSubmit = (data) => {
    dispatch(setSubcategory(data.value));
    navigate("/extra");
  };

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full">
        {category &&
          subcategories[category].map((subcategory, index) => {
            return (
              <Button
                key={index}
                className="flex grow m-2"
                onClick={() => onSubmit(subcategory)}
              >
                {subcategory.name}
              </Button>
            );
          })}
      </div>
      <button>Next</button>
    </>
  );
}

export default Subcategory;
