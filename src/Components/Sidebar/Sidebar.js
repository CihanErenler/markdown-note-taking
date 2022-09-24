import React from "react";
import styled from "styled-components";
import Parent from "./Parent";
import Child from "./Child";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Parent />
      <Child />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.section`
  width: 400px;
  display: flex;
  border-right: 1px solid ${(props) => props.theme.inputBorder};
`;

export default Sidebar;
