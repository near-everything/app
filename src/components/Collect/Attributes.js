import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { queryClient } from "../../app/api";
import AttributeField from "./AttributeField";
import CreatableSelect from "../CreatableSelect";
import { useAttributes, useProposeAttribute } from "../../features/collect/collectApi";
import { setAttributes } from "../../features/collect/collectSlice";

function Attributes() {
  const { data, isLoading, isError } = useAttributes();
  const proposeAttribute = useProposeAttribute();
  const attributes = useSelector((state) => state.collect.attributes);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const prepareOptions = () => {
    return data?.map((option) => ({
      value: option?.node?.id,
      label: option?.node?.name,
    }));
  };

  const handleOnChange = (value) => {
    dispatch(setAttributes(value));
  };

  const handleProposeAttribute = (value) => {
    proposeAttribute.mutate(value, {
      onSuccess: async (response) => {
        setLoading(true);
        const {
          proposeAttribute: { attribute },
        } = response;
        dispatch(
          setAttributes([
            ...attributes,
            { value: attribute.id, label: attribute.name },
          ])
        );
        await queryClient.refetchQueries(["attributes"]);
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
          isMulti
          options={prepareOptions()}
          isDisabled={isLoading || isError}
          isLoading={isLoading}
          onChange={handleOnChange}
          onCreateOption={handleProposeAttribute}
          defaultValue={attributes}
          value={attributes}
          placeholder={"Attributes..."}
        />
      )}
      <br />
      {attributes?.map((attr) => (
        <AttributeField key={attr.value} attributeId={attr.value} />
      ))}
    </>
  );
}

export default Attributes;
