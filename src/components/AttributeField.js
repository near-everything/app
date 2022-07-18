import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { queryClient } from "../app/api";
import {
  useAttributeById,
  useProposeOption
} from "../features/collect/collectApi";
import { setAttributeOptions } from "../features/collect/collectSlice";
import CreatableSelect from "./CreatableSelect";

const AttributeField = React.forwardRef(function AttributeField(props, ref) {
  const { attributeId } = props;
  const { data, isLoading, isError } = useAttributeById(attributeId, {
    enabled: !!attributeId,
  });
  const proposeOption = useProposeOption();
  const attributes = useSelector((state) => state.collect.attributes);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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
    dispatch(setAttributeOptions(value));
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
          dispatch(
            setAttributeOptions({
              value: option.id,
              label: option.value,
              attributeId: attributeId,
            })
          );
          await queryClient.refetchQueries(["attributeById", attributeId]);
          setLoading(false);
        },
        onError: (error) => {
          console.log(error.message);
        },
      }
    );
  };

  const handleValue = () => {
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
        <>Loading</>
      ) : (
        <CreatableSelect
          options={prepareOptions()}
          isDisabled={isLoading || isError}
          isLoading={isLoading}
          onChange={handleOnChange}
          onCreateOption={handleProposeOption}
          defaultValue={handleValue}
          value={handleValue}
          placeholder={`${data?.attribute?.name}`}
        />
      )}
      <br />
    </>
  );
});

export default AttributeField;
