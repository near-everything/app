import React, { useContext } from 'react'
import classNames from 'classnames'
import { DarkModeContext } from './DarkMode'

const Card = React.forwardRef(function Card(props, ref) {
  const { className, children, colored = false, ...other } = props
  const {
    theme: { card },
  } = useContext(DarkModeContext)

  const baseStyle = card.base
  const uncoloredStyle = card.default

  const cls = classNames(baseStyle, !colored && uncoloredStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default Card