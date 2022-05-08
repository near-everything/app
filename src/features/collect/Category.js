import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "../../components/Select";
import { setCategory } from "./collectSlice";
import { categories } from "../../utils/categories";

function Category() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSelector((state) => state.collect.category);
  const { register, handleSubmit } = useForm({ defaultValues: { category } });

  const onSubmit = (data) => {
    dispatch(setCategory(data.category));
    navigate("/subcategory");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          label="category"
          {...register("category")}
          options={categories}
        />
        <button>Next</button>
      </form>
    </>
  );
}

export default Category;
