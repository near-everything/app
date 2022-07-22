import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { queryClient } from "../../app/api";
import {
  useCategories,
  useProposeCategory
} from "../../features/collect/collectApi";
import { setCategory, setSubcategory } from "../../features/collect/collectSlice";
import CreatableSelect from "../CreatableSelect";

function Category() {
  const category = useSelector((state) => state.collect.category);
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useCategories();
  const proposeCategory = useProposeCategory();
  const dispatch = useDispatch();

  const resetSubcategory = useCallback(() => {
    dispatch(setSubcategory(null));
  }, [dispatch]);

  useEffect(() => {
    resetSubcategory();
  }, [category, resetSubcategory]);

  const prepareOptions = () => {
    return data?.map((option) => ({
      value: option?.node?.id,
      label: option?.node?.name,
    }));
  };

  const handleOnChange = (value) => {
    dispatch(setCategory(value));
  };

  const handleCreateCategory = (value) => {
    proposeCategory.mutate(value, {
      onSuccess: async (response) => {
        setLoading(true);
        const {
          createCategory: { category },
        } = response;
        await queryClient.refetchQueries(["categories"]);
        dispatch(setCategory({
          value: category.id,
          label: category.name,
        }));
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
          placeholder={"Select or create a category..."}
        />
      )}
    </>
  );
}

export default Category;
