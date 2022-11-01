import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  useAttributes,
  useProposeAttribute
} from "../../features/collect/collectApi";
import CreatableSelect from "../CreatableSelect";
import AttributeField from "./AttributeField";

function Description({ attributes, setAttributes }) {
  const { data, isLoading, isError } = useAttributes();
  const proposeAttribute = useProposeAttribute();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const prepareOptions = () => {
    return data?.map((option) => ({
      value: option?.node?.id,
      label: option?.node?.name,
      // value: option?.node?.attribute?.name + option?.node?.option?.value,
      // label: `${option?.node?.attribute?.name}: ${option?.node?.option?.value}`,
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
          className="text-gray-800"
          options={prepareOptions()}
          isDisabled={isLoading || isError}
          isLoading={isLoading}
          onChange={handleOnChange}
          onCreateOption={handleProposeAttribute}
          defaultValue={attributes}
          value={attributes}
          placeholder={"begin typing characteristics..."}
          formatCreateLabel={() => "not showing up? create new option"}
        />
      )}
      {attributes?.length > 0 ? (
        <div className="grid gap-4 mt-4" id="thing-form">
          {attributes.map((attr) => (
            <AttributeField
              key={attr.value}
              attributeId={attr.value}
              setAttributeOption={setAttributeOption}
              value={handleValue(attr.value)}
            />
          ))}
          <div className="flex flex-1 flex-col items-center justify-center h-full p-16">
            <div className="btn">submit</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Description;
