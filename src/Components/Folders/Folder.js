import { useState } from "react";
import IconButton from "../IconButton";
import styled from "styled-components";

function Folder({ explorer, icon, action }) {
  const [expand, setExpand] = useState(false);
  return (
    <StyledFolder>
      <div className="space-title-wrapper" onClick={() => setExpand(!expand)}>
        <h1 className="space-title">{explorer.name}</h1>
        <IconButton action={action}>{icon}</IconButton>
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
        {explorer.items.map((explore) => (
          <Folder key={explore.name} explorer={explore} />
        ))}
      </div>
    </StyledFolder>
  );
}

const StyledFolder = styled.section`
  color: ${(props) => props.theme.bg1};

  .space-title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;

    .space-title {
      text-transform: capitalize;
      font-size: 18px;
      margin-right: 10px;
    }
  }
`;

export default Folder;
