import { useContext } from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Image from '../assets/perfil.webp'
import { DivContainer, LayoutContainer } from './styles/LayoutDark'
import { DivContainerSD, LayoutContainerSD } from './styles/LayoutSofDark'
import {
  DivContainerLight,
  LayoutContainerLight,
} from './styles/LayoutLight'
import { ColorModeContext } from '../components/CustomTheme'

const getLayoutComponents = (mode) => {
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
