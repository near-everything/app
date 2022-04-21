import React, { useLayoutEffect, useMemo } from 'react'
import defaultTheme from '../themes/default'
import { mergeDeep } from '../utils/mergeDeep'
import useDarkMode from '../utils/useDarkMode'

export const DarkModeContext = React.createContext({ theme: defaultTheme })

const DarkModeProvider = ({
  children,
  theme: customTheme,
  dark,
  usePreferences = true,
}) => {
  const mergedTheme = mergeDeep(defaultTheme, customTheme)
  const [mode, setMode, toggleMode] = useDarkMode(usePreferences)

  useLayoutEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode('dark')
      }
      document.documentElement.classList.add(`dark`)
    }
  }, [dark])

  const value = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    [mode]
  )

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>
}

export default DarkModeProvider