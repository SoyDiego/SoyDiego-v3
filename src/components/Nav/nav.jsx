import React from "react"
import { Navbar, Brand, Menu, NavLink } from "./styles"

const Nav = () => {
  return (
    <Navbar>
      <Brand>Diego Franchina</Brand>
      <Menu>
        <ul>
          <li>
            <NavLink to="/estudios">Estudios</NavLink>
          </li>
          <li>
            <NavLink to="/experiencia">Experiencia</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </Menu>
    </Navbar>
  )
}

export default Nav
