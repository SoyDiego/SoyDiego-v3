import React from "react"
import { Global, css } from "@emotion/core"

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        :root {
          --blue: #050710;
          --pink: #e91e63;
          --white: #ffffff;
          --black: #000000;
        }

        body {
          font-family: "PT Sans", sans-serif;
          height: 100vh;
          background-color: var(--blue);
        }

        img {
          max-width: 100%;
        }
      `}
    />
  )
}
export default GlobalStyles
