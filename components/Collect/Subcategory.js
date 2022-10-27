import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  useProposeSubcategory,
  useSubcategoriesByCategoryId,
} from "../../features/collect/collectApi";
import CreatableSelect from "..//CreatableSelect";

function Subcategory({ category, subcategory, setSubcategory }) {
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useSubcategoriesByCategoryId(
    category?.value,
    { enabled: !!category }
  );
  const proposeSubcategory = useProposeSubcategory();
  const queryClient = useQueryClient();

  const prepareOptions = () => {
    return data?.map((option) => ({
      value: option?.node?.id,
      label: option?.node?.name,
    }));
  };

  const handleOnChange = (value) => {
    setSubcategory(value);
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
          setSubcategory({
            value: subcategory.id,
            label: subcategory.name,
          });
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
          id="subcategory_select"
          instanceId="subcategory_select"
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
