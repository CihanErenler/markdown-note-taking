import React from "react";
import styled from "styled-components";
import { useEditorContext } from "../../Context/EditorContext";
import Tag from "./Tag";

const TagContainer = () => {
  const { tags } = useEditorContext();
  return (
    <StyledTagContainer>
      <h5>Add new tag</h5>
      <div className="tags">
        {tags.map((tag) => (
          <Tag key={tag.name} tagName={tag.name} color={tag.color} />
        ))}
      </div>
      <input type="text" />
    </StyledTagContainer>
  );
};

const StyledTagContainer = styled.div`
  height: 200px;
  width: 300px;
  background-color: ${(props) => props.theme.bg1};
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 1000;
`;

export default TagContainer;
