import { useState } from "react";
import IconButton from "../IconButton";
import styled from "styled-components";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import { BsFillMarkdownFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

function Folder({ explorer, icon, action }) {
  const [expand, setExpand] = useState(false);

  const handleClick = (isFolder) => {
    if (isFolder) setExpand(!expand);
  };

  return (
    <StyledFolder>
      <div className="space-title-wrapper">
        <div className="title" onClick={() => handleClick(explorer.isFolder)}>
          {explorer.isFolder ? (
            <div className="arrows">
              {expand ? (
                <IoIosArrowDown size={20} color="#fff" />
              ) : (
                <IoIosArrowForward size={20} color="#fff" />
              )}
            </div>
          ) : (
            ""
          )}
          {!explorer.isFolder ? (
            <BsFillMarkdownFill size={18} color="#fff" />
          ) : expand ? (
            <AiFillFolderOpen size={20} color="#fff" />
          ) : (
            <AiFillFolder size={20} color="#fff" />
          )}
          <h1 className={`space-title ${explorer.isFolder ? "bold" : ""}`}>
            {explorer.name}
          </h1>
        </div>
        <div className="buttons">
          <IconButton action={action}>{icon}</IconButton>
        </div>
      </div>
      <div
        className="content"
        style={{ display: expand ? "block" : "none", marginLeft: 15 }}
      >
        {explorer.items.map((explore) => (
          <Folder key={explore.name} icon={icon} explorer={explore} />
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
    padding: 4px 10px;
    cursor: pointer;

    .content {
      border-left: 1px solid ${(props) => props.theme.textColor};
    }

    .arrows {
      display: grid;
      align-items: center;
      margin-right: 5px;
    }

    .bold {
      font-weight: 500 !important;
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
    }

    .space-title {
      text-transform: capitalize;
      font-size: 15px;
      margin: 0 10px;
      flex: 1;
      font-weight: 200;
      transition: all 0.3s ease;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .buttons {
      display: none;
    }

    :hover .buttons {
      display: block;
    }

    :hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export default Folder;
