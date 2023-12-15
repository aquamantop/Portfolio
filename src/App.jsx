import React from 'react'
import './pages/styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import NewTab from './components/NewTab'
import '@fontsource/Lato'
import {
  dark,
  background,
  backgroundBTN,
  primary,
  secondary,
  secondaryLigth,
  complement,
  gray,
  grayLight,
  warning,
} from './pages/styles/Color'

const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
        light: secondaryLigth,
      },
      complement: {
        main: complement
      },
      warning: {
        main: warning,
      },
      background: {
        dark: dark,
        paper: background,
        button: backgroundBTN,
        default: background,
      },
      text: {
        main: gray,
        light: grayLight,
      },
      typography: {
        fontFamily: ['Lato', 'sans-serif'],
      },
    },
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <div>
            <NewTab></NewTab>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
