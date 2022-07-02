import React from "react";
import { useAttributeById } from "../features/collect/collectApi";

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
          <p>
            <span className="font-semibold">{data.name}:</span> {value}
          </p>
        </>
      )}
    </>
  );
});

export default AttributeField;
