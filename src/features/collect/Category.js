import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { queryClient } from "../../app/api";
import CreatableSelect from "../../components/CreatableSelect";
import { useCategories, useProposeCategory } from "./collectApi";
import { setCategory, setSubcategory } from "./collectSlice";

function Category() {
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useCategories();
  const proposeCategory = useProposeCategory();
  const category = useSelector((state) => state.collect.category);
  const dispatch = useDispatch();

  const prepareOptions = () => {
    return data?.map((option) => ({
      value: option?.node?.id,
      label: option?.node?.name,
    }));
  };

  const handleOnChange = (value) => {
    dispatch(setCategory(value));
    dispatch(setSubcategory(null));
  };

  const handleCreateCategory = (value) => {
    proposeCategory.mutate(value, {
      onSuccess: async (response) => {
        setLoading(true);
        const {
          createCategory: { category },
        } = response;
        await queryClient.refetchQueries(["categories"]);
        dispatch(
          setCategory({
            value: category.id,
            label: category.name,
          })
        );
        setLoading(false);
      },
      onError: (error) => {
        console.log(error.message);
      },
    });
  };

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <CreatableSelect
          options={prepareOptions()}
          isDisabled={isLoading || isError}
          isLoading={isLoading}
          onChange={handleOnChange}
          onCreateOption={handleCreateCategory}
          defaultValue={category}
          value={category}
          placeholder={"Select a category..."}
        />
      )}
    </>
  );
}

export default Category;
