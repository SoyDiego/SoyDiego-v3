import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Info = styled.div`
  margin-top: 8rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const ItemPortfolio = styled.div`
  width: 30%;
  margin: 0 1rem 1rem 1rem;
  color: var(--blue);
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  border-radius: 10px;
  border: 3px solid var(--pink);
  text-align: middle;

  span {
    padding: 0.5rem;
    background-color: var(--pink);
    margin-right: 0.5rem;
    font-size: 0.7rem;
    border-radius: 10px;
    color: white;
    font-weight: bold;
  }

  p {
    padding: 1rem 3rem;
  }
`
