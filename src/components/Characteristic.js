import {
  useAttributeById,
  useOptionById,
} from "../features/collect/collectApi";

function Characteristic({ characteristic }) {
  const {
    data: attr,
    isLoading: attributeIsLoading,
    isError: attributeIsError,
  } = useAttributeById(characteristic.attributeId);
  const {
    data: opt,
    isLoading: optionIsLoading,
    isError: optionIsError,
  } = useOptionById(characteristic.optionId);

  return (
    <>
      <span className="flex flex-row gap-2">
        <p className="font-semibold">
          {attributeIsLoading
            ? "Loading..."
            : attributeIsError
              ? "Error"
              : `${attr.attribute.name}: `}
        </p>
        {" "}
        <p>
          {optionIsLoading
            ? "Loading..."
            : optionIsError
              ? "Error"
              : `${opt.option.value}`}
        </p>
      </span>
    </>
  );
}

export default Characteristic;
