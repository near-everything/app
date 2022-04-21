import React, { useContext } from 'react'
import Button from './Button'
import { DarkModeContext } from './DarkMode'

const DropdownItem = React.forwardRef(function DropdownItem(props, ref) {
  // Note: className is passed to the inner Button
  const { children, ...other } = props

  const {
    theme: { dropdownItem },
  } = useContext(DarkModeContext)

  const baseStyle = dropdownItem.base

  return (
    <li className={baseStyle}>
      <Button layout="__dropdownItem" ref={ref} {...other}>
        {children}
      </Button>
    </li>
  )
})

export default DropdownItem