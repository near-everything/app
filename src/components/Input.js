import React from "react";

const Input = React.forwardRef(function Input(props, ref) {
  const { type = "text", label, ...other } = props;

  return (
    <>
      <label>{label}</label>
      <input type={type} ref={ref} {...other} />
    </>
  );
});

export default Input;
