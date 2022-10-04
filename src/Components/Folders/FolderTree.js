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
        icon={<FaFolderPlus size={22} />}
      />
    </section>
  );
};

export default FolderTree;
