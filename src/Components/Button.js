import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  width: 100px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.bg1};
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background-color: ${(props) => props.theme.primaryDarker};
  }
`;

export default Button;
