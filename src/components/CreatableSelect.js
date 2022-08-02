import React from "react";
import { components } from "react-select";
import Creatable from "react-select/creatable";

const CreatableSelect = React.forwardRef(function CreatableSelect(props, ref) {
  const { ...other } = props;
  const Input = ({ ...rest }) => <components.Input {...rest} />;
  return (
    <>
      <Creatable isClearable components={{ Input }} ref={ref} {...other} />
    </>
  );
});

export default CreatableSelect;
