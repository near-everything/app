import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { setCategory } from "./collectSlice";

function Category() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    axios
      .get("http://192.168.1.23:8080/category/")
      .then((res) => {
        const allCategories = res.data.categories;
        setCategories(allCategories);
      })
      .catch((err) => console.error(err));
  };

  const onSubmit = (data) => {
    dispatch(setCategory(data));
    navigate("/subcategory");
  };

  return (
    <>
      <Header title={"Category"} pageNumber={"2"} />
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
