import React, { useEffect, useContext, useRef } from 'react'
import classNames from 'classnames'
import Transition from './Transition'
import FocusLock from 'react-focus-lock'
import { DarkModeContext } from './DarkMode'

const Dropdown = React.forwardRef(function Dropdown(props, ref) {
  const { children, onClose, isOpen, className, align = 'left', ...other } = props
  const {
    theme: { dropdown },
  } = useContext(DarkModeContext)

  const baseStyle = dropdown.base
  const alignStyle = dropdown.align[align]

  function handleEsc(e) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose()
    }
  }

  const dropdownRef = useRef<HTMLUListElement>(null)
  function handleClickOutside(e) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, { capture: true })
    document.addEventListener('keydown', handleEsc, { capture: true })
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen])

  const cls = classNames(baseStyle, alignStyle, className)

  return (
    <Transition
      show={isOpen}
      leave="transition ease-out duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div ref={ref}>
        <FocusLock returnFocus>
          <ul className={cls} ref={dropdownRef} aria-label="submenu" {...other}>
            {children}
          </ul>
        </FocusLock>
      </div>
    </Transition>
  )
})

export default Dropdown