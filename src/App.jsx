import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Layout from './pages/Layout'
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const background = "#222831"
  const primary = "#393E46"
  const secondary = "#00ADB5"
  const warning = "#ff7300"
  const theme = createTheme({
    palette: {
      mode: "dark",
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
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <div>
              <ul>
                <li>
                  <Link to='/'>Inicio</Link>
                </li>
                <li>
                  <Link to='/portfolio'>Portfolio</Link>
                </li>
              </ul>

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
          </div>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
