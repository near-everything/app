import React, { useContext } from 'react'
import classNames from 'classnames'
import { DarkModeContext } from './DarkMode'

const CardBody = React.forwardRef(function CardBody(props, ref) {
  const { className, children, ...other } = props
  const {
    theme: { cardBody },
  } = useContext(DarkModeContext)

  const baseStyle = cardBody.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default CardBody