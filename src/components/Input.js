import React, { useContext } from "react";
import classNames from "classnames";
import { DarkModeContext } from "./DarkMode";

const Input = React.forwardRef(function Input(props, ref) {
  const {
    valid,
    disabled,
    className,
    type = "text",
    label,
    register = null,
    required,
    ...other
  } = props;

  const {
    theme: { input },
  } = useContext(DarkModeContext);

  const baseStyle = input.base;
  const activeStyle = input.active;
  const disabledStyle = input.disabled;
  const validStyle = input.valid;
  const invalidStyle = input.invalid;
  const radioStyle = input.radio;
  const checkStyle = input.checkbox;

  function hasValidation(valid) {
    return valid !== undefined;
  }

  function validationStyle(valid) {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle;
    }
    return "";
  }

  function typeStyle(type) {
    switch (type) {
      case "radio":
        return radioStyle;
      case "checkbox":
        return checkStyle;
      default:
        return baseStyle;
    }
  }

  const cls = classNames(
    typeStyle(type),
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    className
  );

  return (
    <>
      <label>{label}</label>
      {register ? (
        <input
          className={cls}
          type={type}
          ref={ref}
          {...register(label, { required })}
          {...other}
        />
      ) : (
        <input className={cls} type={type} ref={ref} {...other} />
      )}
    </>
  );
});

export default Input;
