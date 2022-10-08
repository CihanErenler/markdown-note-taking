import { useState } from "react";
import IconButton from "../IconButton";
import styled from "styled-components";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import { BsFillMarkdownFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useEditorContext } from "../../Context/EditorContext";

function Folder({ explorer, icon, action }) {
  const { toggleFolderTree } = useEditorContext();
  const [expand, setExpand] = useState(false);

  const handleClick = (item) => {
    if (item.isFolder) toggleFolderTree(item.id);
  };

  return (
    <>
      {explorer.items.map((item) => {
        return (
          <StyledFolder key={item.id}>
            <div className="space-title-wrapper">
              <div className="title" onClick={() => handleClick(item)}>
                {item.isFolder ? (
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
                {!item.isFolder ? (
                  <BsFillMarkdownFill
                    size={18}
                    color="#FFD166"
                    style={{ marginLeft: item.isFolder ? 10 : 5 }}
                  />
                ) : expand ? (
                  <AiFillFolderOpen size={20} color="#06D6A0" />
                ) : (
                  <AiFillFolder size={20} color="#06D6A0" />
                )}
                <h1 className={`space-title ${item.isFolder ? "bold" : ""}`}>
                  {item.name}
                </h1>
              </div>
              {item.isFolder ? (
                <div className="buttons">
                  <IconButton action={action}>{icon}</IconButton>
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              className="content"
              style={{
                display: item.isOpen ? "block" : "none",
                marginLeft: 15,
              }}
            >
              {item.items.map((explore) => (
                <Folder key={explore.id} icon={icon} explorer={explore} />
              ))}
            </div>
          </StyledFolder>
        );
      })}
    </>
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
