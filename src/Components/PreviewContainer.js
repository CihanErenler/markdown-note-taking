import React from "react";
import styled from "styled-components";
import Editor from "./Editor/Editor.js";
import Preview from "./Preview.js";

const PreviewContainer = ({ code }) => {
  return (
    <StyledPreviewContainer>
      <Editor />
      <Preview />
    </StyledPreviewContainer>
  );
};

const StyledPreviewContainer = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default PreviewContainer;
