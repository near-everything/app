import { useDispatch, useSelector } from "react-redux";
import { queryClient } from "../../app/api";
import CreatableSelect from "../../components/CreatableSelect";
import {
  useProposeSubcategory,
  useSubcategoriesByCategoryId
} from "./collectApi";
import { setSubcategory } from "./collectSlice";

function Subcategory() {
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
        },
        onError: (error) => {
          console.log(error.message);
        },
      }
    );
  };

  return (
    <>
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
    </>
  );
}

export default Subcategory;
