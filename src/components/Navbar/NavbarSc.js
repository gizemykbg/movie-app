import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavigationStyled = styled.nav`
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
  }
  .avatar {
    width: 15%;
    border: 1px solid var(--border-color);
    text-align: center;
    padding: 5px;
    img {
      width: 20%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color-light);
      color: white;
    }
    li {
      display: flex;
      a {
        display: flex;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }
      }

      link:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  ul {
      display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
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

  }
`;
