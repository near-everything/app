import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { setSubcategory } from "./collectSlice";

function Subcategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSelector((state) => state.collect.category);

  const onSubmit = (data) => {
    dispatch(setSubcategory(data));
    navigate("/extra");
  };

  return (
    <>
    <div className="flex flex-col justify-between h-full">
      <Header  className="flex flex-1" title={"Subcategory"} pageNumber={"3"} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full">
        {category &&
          category.subcategories.map((subcategory, index) => {
            return (
              <Button
                key={index}
                className="flex grow rounded-none"
                onClick={() => onSubmit(subcategory)}
              >
                {subcategory.name}
              </Button>
            );
          })}
      </div>
      </div>
    </>
  );
}

export default Subcategory;
