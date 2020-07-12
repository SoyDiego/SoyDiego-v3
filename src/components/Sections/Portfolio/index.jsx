import React from "react"
import portfolio from "../../../content/portfolio.json"
import { Container, Info, ItemPortfolio } from "./styles"

const PortfolioContent = () => {
  const { content } = portfolio
  return (
    <Container>
      <Info>
        {content.map(work => (
          <ItemPortfolio>
            <h2>{work.project}</h2>
            {work.technologies.map(technologie => (
              <span>{technologie}</span>
            ))}
            <p>{work.description}</p>
          </ItemPortfolio>
        ))}
      </Info>
    </Container>
  )
}

export default PortfolioContent
