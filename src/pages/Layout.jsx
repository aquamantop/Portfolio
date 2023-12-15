import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./styles/layout.css"
import Image from "../assets/perfil.jpg"

const Layout = ({ children }) => {
  return (
    <>
    <div className="layout-container">
        <Header image={Image}/>
        <div className="content-container">    
            {children}
        </div>    
        <Footer />
      </div>
    </>
  )
}

export default Layout;
