import {
  useThemeToggle,
  getThemeColors,
  createAppTheme,
} from '../pages/styles/GetTheme'
import { ThemeProvider } from '@mui/material/styles'
import { createContext } from 'react'

export const ColorModeContext = createContext({
  setThemeMode: () => {},
  currentTheme: 'light',
})

export const CustomTheme = ({ children }) => {
  const { currentTheme, setThemeMode } = useThemeToggle()
  const themeColors = getThemeColors(currentTheme)
  const theme = createAppTheme(themeColors)

  return (
    <ThemeProvider theme={theme}>
      <ColorModeContext.Provider value={{ currentTheme, setThemeMode }}>
        {children}
      </ColorModeContext.Provider>
    </ThemeProvider>
  )
}
