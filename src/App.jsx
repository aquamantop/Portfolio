import React from 'react'
import './App.css'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import NewTab from './components/NewTab'
import '@fontsource/Lato'

const App = () => {
  const background = '#222831'
  const primary = '#393E46'
  const secondary = '#00ADB5'
  const warning = '#ff7300'
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      warning: {
        main: warning,
      },
      background: {
        paper: background,
        default: background,
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
