import { useState } from 'react'
import { createTheme } from '@mui/material/styles'
import {
  Lbackground,
  LbackgroundBTN,
  Lcomplement,
  Lprimary,
  Lsecondary,
  Ltext,
  Ltitles,
  SDbackground,
  SDbackgroundBTN,
  SDcomplement,
  SDprimary,
  SDsecondary,
  background,
  backgroundBTN,
  complement,
  primary,
  secondary,
  titles,
  text,
  warning,
} from '../pages/styles/Color'

const localStorageKey = 'theme'
const defaultTheme = 'light'

const getSavedTheme = () => {
  return localStorage.getItem(localStorageKey) || defaultTheme
}

const saveTheme = (theme) => {
  localStorage.setItem(localStorageKey, theme)
}

export const useThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState(getSavedTheme)

  const setThemeMode = (mode) => {
    saveTheme(mode)
    setCurrentTheme(mode)
  }

  return { currentTheme, setThemeMode }
}

export const getThemeColors = (currentTheme) => {
  switch (currentTheme) {
    case 'light':
      return {
        background: Lbackground,
        backgroundBTN: LbackgroundBTN,
        primary: Lprimary,
        secondary: Lsecondary,
        complement: Lcomplement,
        text: Ltext,
        titles: Ltitles,
        warning: warning,
      }
    case 'softDark':
      return {
        background: SDbackground,
        backgroundBTN: SDbackgroundBTN,
        primary: SDprimary,
        secondary: SDsecondary,
        complement: SDcomplement,
        text: text,
        titles: titles,
        warning: warning,
      }
    case 'dark':
      return {
        background: background,
        backgroundBTN: backgroundBTN,
        primary: primary,
        secondary: secondary,
        complement: complement,
        text: text,
        titles: titles,
        warning: warning,
      }
  }
}

export const createAppTheme = (themeColors) => {
  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: themeColors.primary,
      },
      secondary: {
        main: themeColors.secondary,
      },
      complement: {
        main: themeColors.complement,
      },
      warning: {
        main: themeColors.warning,
      },
      background: {
        paper: themeColors.background,
        button: themeColors.backgroundBTN,
        default: themeColors.background,
      },
      text: {
        main: themeColors.text,
        title: themeColors.titles,
      },
    },
  })
}
