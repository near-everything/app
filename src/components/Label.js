import React, { useContext } from 'react'
import classNames from 'classnames'
import { DarkModeContext } from "./DarkMode";

const Label = React.forwardRef(function Label(props, ref) {
  const { children, check, radio, disabled, className, ...other } = props
  const {
    theme: { label },
  } = useContext(DarkModeContext)

  const baseStyle = label.base
  const checkStyle = label.check
  const disabledStyle = label.disabled

  const cls = classNames(
    baseStyle,
    // check and radio are interchangeable
    (check || radio) && checkStyle,
    disabled && disabledStyle,
    className
  )

  return (
    <label className={cls} ref={ref} {...other}>
      {children}
    </label>
  )
})

export default Label