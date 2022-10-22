import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo-light.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="header-logo" />
      </Link>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/auth">Login</NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.inputBorder};
  z-index: 9999;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  img {
    width: 150px;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: ${(props) => props.theme.textColor};
    transition: all 0.3s ease;
    padding: 0 15px;

    :hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export default Header;
