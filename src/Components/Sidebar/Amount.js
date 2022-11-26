import React from "react";
import styled from "styled-components";

const Amount = ({ amount }) => {
  return <StyledAmount>{amount}</StyledAmount>;
};

const StyledAmount = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.sidebarHover};
  color: ${(props) => props.theme.bg1};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-size: 13px;
`;

export default Amount;
