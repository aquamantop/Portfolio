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
  background,
  backgroundBTN,
  primary,
  secondary,
  complement,
  text,
  titles,
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
      },
      complement: {
        main: complement,
      },
      warning: {
        main: warning,
      },
      background: {
        paper: background,
        button: backgroundBTN,
        default: background,
      },
      text: {
        main: text,
        title: titles,
      },
      typography: {
        fontFamily: ['Lato', 'sans-serif'],
      },
    },
  })

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: background }}>
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
      </div>
    </BrowserRouter>
  )
}

export default App
