import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { NavigationStyled } from "./NavbarSc";

function Navbar() {
  return (
    <NavigationStyled>
      {/* <NavLogo to="/" onClick={closeMobileMenu}>
        <NavIcon />
        mmFlix
      </NavLogo> */}
      <ul className="nav-items">
        {routes
          .filter((item) => item.isNav)
          .map((item, index) => (
            <li key={index} className="nav-item">
              <NavLink
                activeClassName="active-class"
                aria-current="page"
                to={item.path}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
      </ul>
      <div className="avatar">
        <img src={""} alt="" />
      </div>
      <ThemeToggler />
    </NavigationStyled>
  );
}

export default Navbar;
