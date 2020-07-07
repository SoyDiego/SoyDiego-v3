import styled from "@emotion/styled"
import { Link } from "gatsby"

export const Navbar = styled.nav`
  display: flex;
  padding: 1rem;
  color: #ffffff;
  width: 100%;
  position: fixed;
`

export const NavBrand = styled(Link)`
  font-size: 2rem;
  align-self: center;
  cursor: pointer;
  text-decoration: none;
  color: white;
`

export const Menu = styled.div`
  text-align: right;
  width: 75%;

  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }

  li {
    padding: 0 1rem;
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
