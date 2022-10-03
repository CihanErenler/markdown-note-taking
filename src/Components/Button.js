import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, variant, type }) => {
  if (type === "cancel") {
    return <StyledCancelButton>{children}</StyledCancelButton>;
  }

  if (variant === "outlined") {
    return <StyledOutlined>{children}</StyledOutlined>;
  }
  if (variant === "outlined-danger") {
    return <StyledOutlinedDanger>{children}</StyledOutlinedDanger>;
  }
  return <StyledButton>{children}</StyledButton>;
};

const CommonStyles = css`
  width: 100px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.bg1};
  cursor: pointer;
  background-color: transparent;
  transition: all 0.3s ease;
`;

const StyledButton = styled.button`
  ${CommonStyles}
  background-color: ${(props) => props.theme.primary};

  :hover {
    background-color: ${(props) => props.theme.primaryDarker};
  }
`;

const StyledCancelButton = styled.button`
  ${CommonStyles}
  background-color: ${(props) => props.theme.danger};

  :hover {
    background-color: ${(props) => props.theme.primaryDarker};
  }
`;

const StyledOutlinedDanger = styled.button`
  ${CommonStyles}
  border: 2px solid ${(props) => props.theme.danger};
  color: ${(props) => props.theme.danger};
`;

const StyledOutlined = styled.button`
  ${CommonStyles}
  border: 2px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
`;

export default Button;
