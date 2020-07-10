import React from "react"
import { Container, Btn } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import "boxicons"

const Button = () => {
  const query = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  const { publicURL } = query.allFile.edges[0].node

  return (
    <Container>
      <Btn href={publicURL} download>
        <box-icon
          name="download"
          color="white"
          size="1.3rem"
          animation="burst"
        ></box-icon>
        <span
          css={css`
            margin-left: 0.5rem;
          `}
        >
          Descargar CV
        </span>
      </Btn>
    </Container>
  )
}

export default Button
