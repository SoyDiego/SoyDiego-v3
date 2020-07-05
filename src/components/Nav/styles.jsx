import styled from "@emotion/styled"
import { Link } from "gatsby"

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  background-color: #050710;
  padding: 1rem;
  color: #ffffff;
`

export const Brand = styled.div`
  font-size: 2rem;
  align-self: center;
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
    padding: 0 1.5rem;
    font-size: 1rem;
    text-transform: uppercase;

    &:nth-last-of-type(1) {
      padding-right: 0;
    }
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`
