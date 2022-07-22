import { useState } from "react";
import { queryClient } from "../../app/api";
import CreatableSelect from "..//CreatableSelect";
import {
  useProposeSubcategory,
  useSubcategoriesByCategoryId,
} from "../../features/collect/collectApi";
import { useDispatch, useSelector } from "react-redux";
import { setSubcategory } from "../../features/collect/collectSlice";

function Subcategory() {
  const category = useSelector((state) => state.collect.category);
  const subcategory = useSelector((state) => state.collect.subcategory);
  const [loading, setLoading] = useState(false);
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
          placeholder={"Select or create a subcategory..."}
          defaultValue={subcategory}
          value={subcategory}
        />
      )}
    </>
  );
}

export default Subcategory;
