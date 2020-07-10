import React from "react"
import Nav from "../Nav/nav"
import "normalize.css"
import { Helmet } from "react-helmet"
import GlobalStyles from "./styles"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Diego J. Franchina - Frontend Developer</title>
        <meta
          name="keywords"
          content="Diego Franchina, frontend developer, react, php, javascript, gatsby, graphql, css, sass"
        />
        <meta
          name="description"
          content="Diego Franchina - Frontend Developer"
        />
        <link
          href="https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <Nav />
      <main>{children}</main>
    </>
  )
}

export default Layout
