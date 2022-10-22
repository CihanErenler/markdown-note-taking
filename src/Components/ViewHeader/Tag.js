import React from "react";
import styled from "styled-components";

const Tag = ({ tagName, color }) => {
  return (
    <StyledTag color={color}>
      <div></div>
      {tagName}
    </StyledTag>
  );
};

const StyledTag = styled.div`
  font-size: 12px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.bg1};
  padding: 3px 6px;
  margin: 0 6px;
  cursor: pointer;

  > div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  }
`;

export default Tag;
