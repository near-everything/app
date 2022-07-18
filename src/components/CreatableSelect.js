import React from "react";
import { components } from "react-select";
import Creatable from "react-select/creatable";

const CreatableSelect = React.forwardRef(function CreatableSelect(props, ref) {
  const { attributeId, value, ...other } = props;
  const Input = ({ type, ...rest }) => <components.Input {...rest} />;
  return (
    <>
      <Creatable isClearable components={{ Input }} {...other} />
    </>
  );
});

export default CreatableSelect;
