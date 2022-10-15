import Folder from "./Folder";
import { useEditorContext } from "../../Context/EditorContext";
import styled from "styled-components";
import IconButton from "../IconButton";
import { VscNewFolder } from "react-icons/vsc";

const FolderTree = () => {
  const { files, openModal } = useEditorContext();

  return (
    <StyledFolderTree>
      <h1 className="folder-tree-title">
        Folders{" "}
        <IconButton>
          <VscNewFolder
            size={20}
            onClick={() => openModal(1, "create", "create-folder")}
          />
        </IconButton>
      </h1>
      {files.items.map((item) => {
        return <Folder key={item.id} explorer={item} />;
      })}
    </StyledFolderTree>
  );
};

const StyledFolderTree = styled.section`
  position: relative;

  h1.folder-tree-title {
    color: ${(props) => props.theme.bg1};
    text-transform: uppercase;
    padding: 10px 30px;
    font-weight: 500;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default FolderTree;
