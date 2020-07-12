import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Info, ItemPortfolio } from "./styles"
import { css } from "@emotion/core"

const PortfolioContent = () => {
  const query = useStaticQuery(graphql`
    {
      allContentJson(filter: { title: { eq: "Portfolio" } }) {
        nodes {
          content {
            project
            description
            technologies
            picture {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const { content } = query.allContentJson.nodes[0]
  return (
    <Container>
      <Info>
        {content.map(work => (
          <ItemPortfolio key={work}>
            <h2>{work.project}</h2>
            {work.technologies.map(technologie => (
              <span key={technologie}>{technologie}</span>
            ))}
            <Image
              css={css`
                margin-top: 2rem;
              `}
              fluid={work.picture.childImageSharp.fluid}
              alt={work.project}
            />
            <p>{work.description}</p>
          </ItemPortfolio>
        ))}
      </Info>
    </Container>
  )
}

export default PortfolioContent
