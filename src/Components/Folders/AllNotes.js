import React from "react";
import { FaStickyNote } from "react-icons/fa";
import Amount from "../Sidebar/Amount";
import { useEditorContext } from "../../Context/EditorContext";

const AllNotes = () => {
  const { totalAmount } = useEditorContext();
  return (
    <div className="folder-tree-title">
      <div className="tree-title">
        <span>
          <FaStickyNote size={18} color="orange" />
          <h1>All Notes </h1>
        </span>
        <Amount amount={totalAmount} />
      </div>
    </div>
  );
};

export default AllNotes;
