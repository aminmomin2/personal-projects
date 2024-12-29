import { NavLink } from "react-router"

export default function Header() {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <header>
      <nav>
        <NavLink
          to="/"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}