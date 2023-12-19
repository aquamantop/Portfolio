import './pages/styles/App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import NewTab from './components/NewTab'
import '@fontsource/Lato'
import { CustomTheme } from './components/CustomTheme'
import { BackgroundSX } from './components/CustomMui'
import { Box, CssBaseline } from '@mui/material'
import { HashRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Box sx={{ ...BackgroundSX }}>
        <CustomTheme>
          <CssBaseline />
          <Layout>
            <NewTab></NewTab>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/proyectos" element={<Portfolio />} />
            </Routes>
          </Layout>
        </CustomTheme>
      </Box>
    </Router>
  )
}

export default App
