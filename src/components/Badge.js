import React, { useContext } from 'react'
import classNames from 'classnames'
import { DarkModeContext } from './DarkMode'

const Badge = React.forwardRef(function Badge(props, ref) {
  const { className, children, type = 'primary', ...other } = props

  const {
    theme: { badge },
  } = useContext(DarkModeContext)

  const baseStyle = badge.base
  const typeStyle = {
    success: badge.success,
    danger: badge.danger,
    warning: badge.warning,
    neutral: badge.neutral,
    primary: badge.primary,
  }

  const cls = classNames(baseStyle, typeStyle[type], className)

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  )
})

export default Badge