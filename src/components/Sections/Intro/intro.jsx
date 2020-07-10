import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Info, Picture } from "./styles"
import { css } from "@emotion/core"

const Intro = () => {
  const pageQuery = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Info>
        <h1>
          Diego J. <span>Franchina</span>
        </h1>
        <h2>
          Frontend <span>Developer</span>
        </h2>
        <i class="bx bx-hot"></i>
      </Info>
      <Picture>
        <Image
          css={css`
            border-radius: 20%;
          `}
          fixed={pageQuery.imageOne.childImageSharp.fixed}
        />
      </Picture>
    </Container>
  )
}

export default Intro
