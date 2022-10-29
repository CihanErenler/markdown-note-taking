import { useState } from "react";
import styled from "styled-components";
import Tag from "./Tag";
import TagContainer from "./TagContainer";

const Tags = () => {
  const [showContainer, setShowContainer] = useState(true);

  return (
    <StyledTags>
      <span>Tags:</span>
      <div className="add-button" onClick={() => setShowContainer(true)}>
        Add
      </div>
      {showContainer && (
        <TagContainer close={setShowContainer} showContainer={showContainer} />
      )}
    </StyledTags>
  );
};

const StyledTags = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  span {
    font-size: 12px;
    color: ${(props) => props.theme.textColorLighter};
    font-weight: 600;
  }

  .add-button {
    font-size: 12px;
    border-radius: 50px;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.bg1};
    padding: 3px 6px;
    margin: 0 6px;
    cursor: pointer;
  }
`;

export default Tags;
