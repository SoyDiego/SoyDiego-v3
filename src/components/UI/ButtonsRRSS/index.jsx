import React from "react"
import socials from "./socials.json"
import { Container, LinkSkill,  } from "./styles"
import "boxicons"

const ButtonsRRSS = () => {
  const { content, type } = socials

  return (
    <Container>
      {content.map(social => (
        <LinkSkill to={social.url} target="_blank">
          <box-icon
            name={social.icon}
            type={type}
            color="white"
            size="3rem"
          ></box-icon>
        </LinkSkill>
      ))}
    </Container>
  )
}

export default ButtonsRRSS
