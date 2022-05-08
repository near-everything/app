import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "../../components/Select";
import { setSubcategory } from "./collectSlice";
import { subcategories } from "../../utils/categories";

function Subcategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSelector((state) => state.collect.category);
  const subcategory = useSelector((state) => state.collect.subcategory);
  const { register, handleSubmit } = useForm({
    defaultValues: { subcategory },
  });

  const onSubmit = (data) => {
    dispatch(setSubcategory(data.subcategory));
    navigate("/extra");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          label="subcategory"
          {...register("subcategory")}
          options={category ? subcategories[category] : []}
        />
        <button>Next</button>
      </form>
    </>
  );
}

export default Subcategory;
