import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { categories } from "../../utils/categories";
import { setCategory } from "./collectSlice";

function Category() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(setCategory(data.value));
    navigate("/subcategory");
  };

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full">
        {categories &&
          categories.map((category, index) => {
            return (
              <Button
                key={index}
                className="flex grow m-2"
                onClick={() => onSubmit(category)}
              >
                {category.name}
              </Button>
            );
          })}
      </div>
    </>
  );
}

export default Category;
