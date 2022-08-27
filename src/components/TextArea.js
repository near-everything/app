import React from "react";

const TextArea = React.forwardRef(function TextArea(props, ref) {
  const { type = "text", label, ...other } = props;

  return (
    <>
      <label>{label}</label>
      <textarea type={type} ref={ref} {...other} />
    </>
  );
});

export default TextArea;
