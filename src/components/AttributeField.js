import React from "react";
import { useAttributeById } from "../app/api";

const AttributeField = React.forwardRef(function AttributeField(props, ref) {
  const { attributeId, value } = props;
  const { data, isLoading, isError } = useAttributeById(attributeId);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        "Error"
      ) : (
        <>
          <span className="font-semibold">{data.name}:</span> {value}
        </>
      )}
    </>
  );
});

export default AttributeField;
