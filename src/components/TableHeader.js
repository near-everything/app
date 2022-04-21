import React, { useContext } from 'react'
import classNames from 'classnames'
import { DarkModeContext } from './DarkMode'

const TableHeader = React.forwardRef(function TableHeader(
  props,
  ref
) {
  const { className, children, ...other } = props

  const {
    theme: { tableHeader },
  } = useContext(DarkModeContext)

  const baseStyle = tableHeader.base

  const cls = classNames(baseStyle, className)

  return (
    <thead className={cls} ref={ref} {...other}>
      {children}
    </thead>
  )
})

export default TableHeader