import {
  useThemeToggle,
  getThemeColors,
  createAppTheme,
} from '../pages/styles/GetDesign'
import { ThemeProvider } from '@mui/material/styles'
import { createContext } from 'react'

export const ColorModeContext = createContext({
  setThemeMode: () => {},
  currentTheme: 'dark',
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
