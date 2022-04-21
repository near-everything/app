import React, { useContext } from 'react'
import classNames from 'classnames'
import { DarkModeContext } from './DarkMode'

const TableContainer = React.forwardRef(function TableContainer(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableContainer },
  } = useContext(DarkModeContext)

  const baseStyle = tableContainer.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default TableContainer