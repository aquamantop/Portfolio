import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DivContainer, LayoutContainer} from "./styles/layout.js"
import Image from "../assets/perfil.jpg"

const Layout = ({ children }) => {
  return (
    <>
    <LayoutContainer>
        <Header image={Image}/>
        <DivContainer>    
            {children}
        </DivContainer>    
        <Footer />
      </LayoutContainer>
    </>
  )
}

export default Layout;
