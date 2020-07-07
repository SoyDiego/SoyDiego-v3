import React from "react"
import Image from "gatsby-image"
import { Container, Info, Picture } from "./styles"

const Intro = () => (
  <Container>
    <Info>
      <h1>
        Diego J. <span>Franchina</span>
      </h1>
      <h2>
        Frontend <span>Developer</span>
      </h2>
    </Info>
    <Picture>
      <img src="../../images/me.jpg" />
    </Picture>
  </Container>
)

export default Intro
