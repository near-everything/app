import classNames from "classnames";
import React, { useContext } from "react";
import { DarkModeContext } from "./DarkMode";

const Select = React.forwardRef(function Select(props, ref) {
  const { valid, children, className, multiple, disabled, placeholder, options, ...other } = props

  const {
    theme: { select },
  } = useContext(DarkModeContext)

  const baseStyle = select.base
  const activeStyle = select.active
  const validStyle = select.valid
  const invalidStyle = select.invalid
  const disabledStyle = select.disabled
  const selectStyle = select.select

  function hasValidation(valid) {
    return valid !== undefined
  }

  function validationStyle(valid) {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
    return ''
  }

  const cls = classNames(
    baseStyle,
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    !multiple && selectStyle,
    className
  )

  return (
    <select className={cls} ref={ref} disabled={disabled} multiple={!!multiple} {...other}>
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o.id} value={o.value}>
          {o.name}
        </option>
      ))}
    </select>
  );
});

export default Select
