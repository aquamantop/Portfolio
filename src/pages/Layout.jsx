import React, { useContext } from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Image from '../assets/perfil.jpg'
import { DivContainer, LayoutContainer } from './styles/layoutDark.js'
import { DivContainerSD, LayoutContainerSD } from './styles/layoutSofDark.js'
import {
  DivContainerLight,
  LayoutContainerLight,
} from './styles/layoutLight.js'
import { ColorModeContext } from '../components/CustomTheme.jsx'

const getLayoutComponents = (mode) => {
  console.log("mode", mode);
  switch (mode) {
    case 'dark':
      return { DivContainer, LayoutContainer }
    case 'softDark':
      return {
        DivContainer: DivContainerSD,
        LayoutContainer: LayoutContainerSD,
      }
    case 'light':
      return {
        DivContainer: DivContainerLight,
        LayoutContainer: LayoutContainerLight,
      }
    default:
      return { DivContainer, LayoutContainer }
  }
}

const Layout = ({ children }) => {
  const { currentTheme } = useContext(ColorModeContext);

  console.log("mode", currentTheme);

  const {
    DivContainer: SelectedDivContainer,
    LayoutContainer: SelectedLayoutContainer,
  } = getLayoutComponents(currentTheme);

  return (
    <SelectedLayoutContainer>
      <Header image={Image} />
      <SelectedDivContainer>{children}</SelectedDivContainer>
      <Footer />
    </SelectedLayoutContainer>
  )
}

export default Layout
