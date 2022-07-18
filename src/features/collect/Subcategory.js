import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { queryClient } from "../../app/api";
import CreatableSelect from "../../components/CreatableSelect";
import {
  useProposeSubcategory,
  useSubcategoriesByCategoryId
} from "./collectApi";
import { setSubcategory } from "./collectSlice";

function Subcategory() {
  const [loading, setLoading] = useState(false);
  const subcategory = useSelector((state) => state.collect.subcategory);
  const category = useSelector((state) => state.collect.category);
  const { data, isLoading, isError } = useSubcategoriesByCategoryId(
    category?.value,
    { enabled: !!category }
  );
  const proposeSubcategory = useProposeSubcategory();
  const dispatch = useDispatch();

  const prepareOptions = () => {
    return data?.map((option) => ({
      value: option?.node?.id,
      label: option?.node?.name,
    }));
  };

  const handleOnChange = (value) => {
    dispatch(setSubcategory(value));
  };

  const handleCreateSubcategory = (value) => {
    proposeSubcategory.mutate(
      { subcategory: value, categoryId: category.value },
      {
        onSuccess: async (response) => {
          setLoading(true);
          const {
            createSubcategory: { subcategory },
          } = response;
          await queryClient.refetchQueries(["subcategoriesByCategoryId"]);
          dispatch(
            setSubcategory({
              value: subcategory.id,
              label: subcategory.name,
            })
          );
          setLoading(false);
        },
        onError: (error) => {
          console.log(error.message);
        },
      }
    );
  };

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <CreatableSelect
          options={prepareOptions()}
          isDisabled={!category || isError}
          isLoading={isLoading}
          onChange={handleOnChange}
          onCreateOption={handleCreateSubcategory}
          placeholder={"Select a subcategory..."}
          defaultValue={subcategory}
          value={subcategory}
        />
      )}
    </>
  );
}

export default Subcategory;
