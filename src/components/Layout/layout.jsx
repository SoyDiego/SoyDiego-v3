import React from "react"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Nav from "../Nav/nav"
import "normalize.css"


const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
