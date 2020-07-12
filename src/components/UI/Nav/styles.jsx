import styled from "@emotion/styled"
import { Link } from "gatsby"

export const Navbar = styled.nav`
         display: flex;
         justify-content: center;
         width: 100%;
         position: fixed;
         z-index: 9999;
         background-color: var(--blue);
       `

export const NavBrand = styled(Link)`
  font-size: 3rem;
  align-self: center;
  cursor: pointer;
  text-decoration: none;
  color: var(--pink);
  font-weight: bold;
`

export const Menu = styled.div`
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
  }

  li {
    padding: 0 2rem;
    font-size: 1rem;
    text-transform: uppercase;
    align-self: center;

    &:nth-last-of-type(1) {
      margin-left: 1rem;
      background-color: var(--pink);
      padding: 0.5rem;
      border-radius: 5px;
      font-weight: bold;
    }
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  margin: 0px;
  padding: 0 15px 5px 15px;

  &.active {
    font-weight: bold;
    border-bottom: 2px solid var(--pink);
  }
`
