import React from "react";
import { components } from "react-select";
import Creatable from "react-select/creatable";

const CreatableSelect = React.forwardRef(function CreatableSelect(props, ref) {
  const { ...other } = props;
  const Input = ({ ...rest }) => <components.Input {...rest} />;

  const customStyles = {
    control: (base) => ({
      ...base,
      background: "#1f2937",
      color: "#9ca3af",
      border: 0,
      boxShadow: "none"
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
      color: "#1f2937",
      fontWeight: 600,
      background: "9ca3af"
    }),
    menuList: base => ({
      ...base,
      // kill the white space on first and last option
      padding: 0
    }),
    placeholder: base => ({
      ...base,
      color: "#9ca3af",
      fontWeight: 600
    }),
    singleValue: base => ({
      ...base,
      color: "#fff",
    }),
    input: base => ({
      ...base,
      color: "#9ca3af"
    })
  };

  return (
    <>
      <Creatable
        className="react-select-container"
        classNamePrefix="react-select"
        isClearable
        components={{ Input, DropdownIndicator: null }}
        ref={ref}
        {...other}
        styles={customStyles}
      />
    </>
  );
});

export default CreatableSelect;
