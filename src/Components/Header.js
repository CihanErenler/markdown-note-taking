import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo-light.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <StyledHeader pathname={location.pathname}>
      <Link to="/">
        <img src={logo} alt="header-logo" />
      </Link>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            {location.pathname === "/login" ? (
              <NavLink to="/register">Register</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
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
  border-bottom: 1px solid
    ${(props) =>
      props.pathname !== "/" ? props.theme.inputBorder : props.theme.bg1};
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
