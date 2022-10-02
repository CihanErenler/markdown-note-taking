import React from "react";
import styled from "styled-components";

const IconButton = ({ children }) => {
  return <StyledIconButton>{children}</StyledIconButton>;
};

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: all 0.3s ease;
    fill: ${(props) => props.theme.inputButtonColor};
  }

  :hover {
    svg {
      fill: ${(props) => props.theme.primary};
    }
  }
`;

export default IconButton;
