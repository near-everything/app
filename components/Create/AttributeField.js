import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  useAttributeById,
  useProposeOption,
} from "../../features/collect/collectApi";
import CreatableSelect from "../CreatableSelect";

const AttributeField = React.forwardRef(function AttributeField({ attributeId, setAttributeOption, value }, ref) {
  const { data, isLoading, isError } = useAttributeById(attributeId, {
    enabled: !!attributeId,
  });
  const proposeOption = useProposeOption();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const prepareOptions = () => {
    return data?.attribute?.relationships?.edges?.map((option) => ({
      value: option?.node?.option?.id,
      label: option?.node?.option?.value,
    }));
  };
  const handleOnChange = (value) => {
    if (!value) {
      value = {};
    }
    value.attributeId = attributeId;
    setAttributeOption(value);
  };

  const handleProposeOption = (value) => {
    proposeOption.mutate(
      { value: value, attributeId: attributeId },
      {
        onSuccess: async (response) => {
          setLoading(true);
          const {
            proposeOption: { option },
          } = response;
          setAttributeOption({
            value: option.id,
            label: option.value,
            attributeId: attributeId,
          });
          await queryClient.refetchQueries(["attributeById", attributeId]);
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
        <>Loading</>
      ) : (
        <CreatableSelect
          options={prepareOptions()}
          isDisabled={isLoading || isError}
          isLoading={isLoading}
          onChange={handleOnChange}
          onCreateOption={handleProposeOption}
          defaultValue={value}
          value={value}
          placeholder={`${data?.attribute?.name}`}
          ref={ref}
        />
      )}
    </>
  );
});

export default AttributeField;
