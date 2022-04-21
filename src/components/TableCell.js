import React, { useContext } from 'react'
import classNames from 'classnames'
import { DarkModeContext } from './DarkMode'

const TableCell = React.forwardRef(function TableCell(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableCell },
  } = useContext(DarkModeContext)

  const baseStyle = tableCell.base

  const cls = classNames(baseStyle, className)

  return (
    <td className={cls} ref={ref} {...other}>
      {children}
    </td>
  )
})

export default TableCell