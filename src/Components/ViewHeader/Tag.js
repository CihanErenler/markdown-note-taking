import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const Tag = ({ tagName, color }) => {
  return (
    <StyledTag color={color}>
      <div></div>
      {tagName}
    </StyledTag>
  );
};

const StyledTag = styled.div`
  min-width: fit-content;
  font-size: 12px;
  border-radius: 50px;
  background-color: #e5e7eb;
  color: #505967;
  padding: 3px 8px;
  margin-right: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  > div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-right: 5px;
  }
`;

export default Tag;
