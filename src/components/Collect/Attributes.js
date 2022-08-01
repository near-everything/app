import { useState } from "react";
import { useQueryClient } from "react-query";
import {
  useAttributes,
  useProposeAttribute,
} from "../../features/collect/collectApi";
import CreatableSelect from "../CreatableSelect";
import AttributeField from "./AttributeField";

function Attributes({ attributes, setAttributes }) {
  const { data, isLoading, isError } = useAttributes();
  const proposeAttribute = useProposeAttribute();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const prepareOptions = () => {
    return data?.map((option) => ({
      value: option?.node?.id,
      label: option?.node?.name,
    }));
  };

  const handleOnChange = (value) => {
    setAttributes(value);
  };

  const handleProposeAttribute = (value) => {
    proposeAttribute.mutate(value, {
      onSuccess: async (response) => {
        setLoading(true);
        const {
          proposeAttribute: { attribute },
        } = response;

        setAttributes([
          ...attributes,
          { value: attribute.id, label: attribute.name },
        ]);
        await queryClient.refetchQueries(["attributes"]);
        setLoading(false);
      },
      onError: (error) => {
        console.log(error.message);
      },
    });
  };

  const setAttributeOption = (value) => {
    setAttributes(
      attributes.map((attribute) =>
        attribute.value === value.attributeId
          ? { ...attribute, options: value }
          : attribute
      )
    );
  };

  const handleValue = (attributeId) => {
    const match = attributes.find((it) => it.value === attributeId);
    if (match.options?.value === undefined) {
      return null;
    } else {
      return match.options;
    }
  };

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <CreatableSelect
          id="attribute_select"
          instanceId="attribute_select"
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
        <AttributeField
          key={attr.value}
          attributeId={attr.value}
          setAttributeOption={setAttributeOption}
          value={() => handleValue(attr.value)}
        />
      ))}
    </>
  );
}

export default Attributes;
