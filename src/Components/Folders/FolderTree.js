import React from "react";
import Folder from "./Folder";
import { FaFolderPlus } from "react-icons/fa";
import { useEditorContext } from "../../Context/EditorContext";

const FolderTree = () => {
  const { files, openModal } = useEditorContext();

  return (
    <section>
      <Folder
        explorer={files}
        action={openModal}
        icon={<FaFolderPlus size={20} />}
      />
    </section>
  );
};

export default FolderTree;
