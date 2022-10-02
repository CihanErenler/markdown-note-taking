import React from "react";
import styled from "styled-components";
import Editor from "./Editor/Editor.js";
import Preview from "./Preview.js";
import ViewHeader from "./ViewHeader.js";
import Split from "react-split";
import "../Split.css"

const PreviewContainer = ({ code }) => {
  return (
    <StyledPreviewContainer>
      <ViewHeader />
      <Split
        sizes={[50, 50]}
        direction="horizontal"
        cursor="col-resize"
        className="split-flex"
      >
        <Editor />
        <Preview />
      </Split>
    </StyledPreviewContainer>
  );
};

const StyledPreviewContainer = styled.section`
  flex: 1;
  height: 100vh;
  overflow: hidden;
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
`;

export default PreviewContainer;
