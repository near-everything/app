import { useCallback, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  useCategories,
  useProposeCategory
} from "../../features/collect/collectApi";
import CreatableSelect from "../CreatableSelect";

function Category({ category, setCategory, setSubcategory }) {
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useCategories();
  const proposeCategory = useProposeCategory();
  const queryClient = useQueryClient();

  const resetSubcategory = useCallback(() => {
    setSubcategory(null);
  }, [setSubcategory]);

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
    setCategory(value);
  };

  const handleCreateCategory = (value) => {
    proposeCategory.mutate(value, {
      onSuccess: async (response) => {
        setLoading(true);
        const {
          createCategory: { category },
        } = response;
        await queryClient.refetchQueries(["categories"]);
        setCategory({
          value: category.id,
          label: category.name,
        });
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
          id="category_select"
          instanceId="category_select"
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
