import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Info, Picture } from "./styles"
import { css } from "@emotion/core"
import ButtonsRRSS from "../../UI/ButtonsRRSS"
import Button from "../../UI/Button"

const Intro = () => {
  const {image} = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "me.jpg" }) {
        sharp: childImageSharp {
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
          Front-end <span>Developer</span>
        </h2>
        <ButtonsRRSS />
        <Button />
      </Info>
      <Picture>
        <Image
          css={css`
            border-radius: 20%;
          `}
          fixed={image.sharp.fixed}
        />
      </Picture>
    </Container>
  )
}

export default Intro
