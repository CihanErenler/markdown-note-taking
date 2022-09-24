import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ViewHeader = () => {
  return (
    <StyledViewHeader>
      <Button>Save</Button>
    </StyledViewHeader>
  );
};

const StyledViewHeader = styled.nav`
  height: 55px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.inputBorder};
`;

export default ViewHeader;
