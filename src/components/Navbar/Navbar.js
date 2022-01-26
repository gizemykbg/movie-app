import React, { useEffect, useState } from "react";
import routes from "../../routes";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  SideBarIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarSc";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          mmFlix
        </NavLogo>

        <NavMenu>
          {routes
            .filter((item) => item.isNav)
            .map((item, index) => (
              <NavItem key={index} className="nav-item">
                <NavLinks
                  activeClassName="active-class"
                  aria-current="page"
                  to={item.path}
                >
                  {item.name}
                </NavLinks>
              </NavItem>
            ))}
          <SideBarIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </SideBarIcon>
          <ThemeToggler />
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
