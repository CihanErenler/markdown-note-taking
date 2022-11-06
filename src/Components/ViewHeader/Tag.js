import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { useEditorContext } from "../../Context/EditorContext";

const Tag = ({ tagName, color, isSelected }) => {
  const { toggleTags } = useEditorContext();

  return (
    <StyledTag
      color={color}
      onClick={() => toggleTags(tagName)}
      isSelected={isSelected}
    >
      <div></div>
      {tagName}
    </StyledTag>
  );
};

const StyledTag = styled.div`
  min-width: fit-content;
  font-size: 11px;
  height: 18px;
  border-radius: 50px;
  background-color: ${(props) =>
    !props.isSelected ? "#e5e7eb" : props.theme.seperator};
  color: ${(props) => (!props.isSelected ? "#505967" : props.theme.sidebarBg)};
  padding: 3px 8px;
  margin-right: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  > div {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-right: 5px;
  }
`;

export default Tag;
