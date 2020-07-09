import React from "react"
import { Navbar, NavBrand, Menu, NavLink } from "./styles"

const Nav = () => {
  return (
    <Navbar>
      <Menu>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/estudios">
              Estudios
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/experiencia">
              Experiencia
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/skills">
              Skills
            </NavLink>
          </li>
          <li>
            <NavBrand to="/">D F</NavBrand>
          </li>
          <li>
            <NavLink activeClassName="active" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/referencias">
              Referencias
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>
      </Menu>
    </Navbar>
  )
}

export default Nav
