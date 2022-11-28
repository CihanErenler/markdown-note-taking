import React from "react";
import styled from "styled-components";

const File = ({ children, index }) => {
  return (
    <StyledFile>
      {index + 1} - {children}
    </StyledFile>
  );
};

const StyledFile = styled.li`
  margin: 2px 5px;
  background-color: ${(props) => props.theme.bg1};
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${(props) => props.theme.inputBorder};
  font-size: 14px;

  :hover {
    border-color: ${(props) => props.theme.buttonFocus};
  }
`;

export default File;
