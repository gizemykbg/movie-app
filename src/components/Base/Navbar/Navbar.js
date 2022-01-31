import React, { useEffect, useState } from "react";
import routes from "../../../routes";
import ThemeToggler from "../ThemeToggler";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  SideBarIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Button,
  ImgWrap,
  Image,
} from "./NavbarSc";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/login";
import avatar from "../../../assets/avatar.png";
import Dropdown from "../../Globals/Dropdown";
import { label, options } from "../../Globals/Dropdown/dropdata";

function Navbar() {
  const isLogin = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleLogin = () => {
    navigation("/login");
  };
  const handleLogout = () => {
    navigation("/login");
    dispatch(logout());
  };
  const [selectParams, setSelectParams] = useSearchParams();
  const selectedItem = selectParams.get("selected") || "";

  const handleSelect = (option, e) => {
    setSelectParams({ selected: option.label });
    navigation(`/filter?${selectedItem}`);
  };

  console.log(selectedItem);

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
          <ThemeToggler />
          <Dropdown
            primary
            options={options}
            selected={selectedItem}
            label={label}
            onChange={handleSelect}
          />
          {isLogin === true ? (
            <>
              <Button onClick={handleLogout}>Logout</Button>
              <ImgWrap>
                <Image src={avatar} onClick={() => navigation("/profile")} />
              </ImgWrap>
            </>
          ) : (
            <Button onClick={handleLogin}>Login</Button>
          )}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
