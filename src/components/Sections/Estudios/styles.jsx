import styled from "@emotion/styled"
import { Link } from "gatsby"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Info = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  h2 {
    font-size: 3rem;
    color: white;
    margin: 0.2rem;
    letter-spacing: 0.5rem;

    span {
      color: var(--pink);
    }
  }
`
