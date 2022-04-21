import React, { useContext } from 'react'
import classNames from 'classnames'
import { DarkModeContext } from './DarkMode'

const TableBody = React.forwardRef(function TableBody(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableBody },
  } = useContext(DarkModeContext)

  const baseStyle = tableBody.base

  const cls = classNames(baseStyle, className)

  return (
    <tbody className={cls} ref={ref} {...other}>
      {children}
    </tbody>
  )
})

export default TableBody