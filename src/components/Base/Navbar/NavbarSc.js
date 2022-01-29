import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: var(--border-color);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media only screen and (max-width: 500px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: var(--font-light-color);
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaStar)`
  margin-right: 0.5rem;
`;

export const SideBarIcon = styled.div`
  display: none;
  color: var(--font-light-color);
  @media screen and (max-width: 500px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #36454f;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  color: var(--font-light-color);
  &:hover {
    border-bottom: 2px solid var(--secondary-color);
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;
export const NavLinks = styled(Link)`
  color: var(--font-light-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;
export const Button = styled.button`
  height: 40px;
  border-bottom: 2px solid transparent;
  color: var(--font-light-color);
  &:hover {
    border: 2px solid var(--secondary-color);
  }
  @media only screen and (max-width: 500px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;
export const ImgWrap = styled.div`
  color: var(--font-light-color);
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 500px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;
export const Image = styled.img`
  transition: all 0.3s ease-in-out;
  height: 50px;
  border-radius: 50%;
  margin: 5px;
  padding: 2px;
`;
