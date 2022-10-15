import IconButton from "../IconButton";
import styled from "styled-components";
import { BsFillMarkdownFill } from "react-icons/bs";
import { VscNewFile, VscNewFolder, VscEdit } from "react-icons/vsc";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useEditorContext } from "../../Context/EditorContext";
import { MdDeleteOutline } from "react-icons/md";
import { FaFolderOpen, FaFolder } from "react-icons/fa";

function Folder({ explorer }) {
  const { toggleFolderTree, openModal } = useEditorContext();

  const handleClick = (item) => {
    if (item.isFolder) toggleFolderTree(item.id);
  };
  return (
    <StyledFolder key={explorer.id}>
      <div className="space-title-wrapper">
        <div className="title" onClick={() => handleClick(explorer)}>
          {explorer.isFolder ? (
            <div className="arrows">
              {explorer.isOpen ? (
                <IoIosArrowDown size={16} color="#ddd" />
              ) : (
                <IoIosArrowForward size={16} color="#ddd" />
              )}
            </div>
          ) : (
            ""
          )}
          {!explorer.isFolder ? (
            <BsFillMarkdownFill
              size={18}
              color="#FFD166"
              style={{ marginLeft: explorer.isFolder ? 10 : 2 }}
            />
          ) : explorer.isOpen ? (
            <FaFolderOpen size={20} color="#06D6A0" />
          ) : (
            <FaFolder size={20} color="#06D6A0" />
          )}

          <h1 className={`space-title ${explorer.isFolder ? "bold" : ""}`}>
            {explorer.name}
          </h1>
        </div>
        {explorer.isFolder ? (
          <div className="buttons">
            <IconButton
              action={() => openModal(explorer.id, "create", "create-file")}
            >
              {<VscNewFile size={18} />}
            </IconButton>
            <IconButton
              action={() => openModal(explorer.id, "create", "create-folder")}
            >
              {<VscNewFolder size={16} />}
            </IconButton>
            <IconButton action={() => console.log("Delete")}>
              {<MdDeleteOutline size={20} />}
            </IconButton>
            <IconButton
              action={() =>
                openModal(
                  { id: explorer.id, name: explorer.name },
                  "edit",
                  "edit-folder"
                )
              }
            >
              {<VscEdit size={18} />}
            </IconButton>
          </div>
        ) : (
          <div className="buttons">
            <IconButton action={() => console.log("Delete")}>
              {<MdDeleteOutline size={20} />}
            </IconButton>
            <IconButton action={() => console.log("Edit")}>
              {<VscEdit size={20} />}
            </IconButton>
          </div>
        )}
      </div>
      <div
        className="content"
        style={{
          display: explorer.isOpen ? "block" : "none",
          marginLeft: 17,
          borderLeft: "1px solid #303042",
        }}
      >
        {explorer.isFolder
          ? explorer.items.map((explore) => (
              <Folder key={explore.id} explorer={explore} />
            ))
          : ""}
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
    padding: 2px 10px 2px 30px;
    cursor: pointer;

    .arrows {
      display: grid;
      align-items: center;
      margin-right: 5px;
      position: absolute;
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
    }

    .bold {
      font-weight: 500 !important;
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
      position: relative;
    }

    .space-title {
      text-transform: capitalize;
      font-size: 14px;
      margin: 0 10px;
      flex: 1;
      font-weight: 200;
      transition: all 0.3s ease;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      position: relative;
    }

    .buttons {
      display: none;
      gap: 3px;
    }

    :hover .buttons {
      display: flex;
    }

    :hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export default Folder;
