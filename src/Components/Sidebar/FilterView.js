import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../Input";
import File from "./File";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { useEditorContext } from "../../Context/EditorContext";
import { IoEllipsisVertical } from "react-icons/io5";

const Filter = () => {
  const [notes, setNotes] = useState([]);
  const [selectedParent, setSelectedParent] = useState(null);
  const [value, setValue] = useState("");
  const { parent, currentlySelectedTag, files, openModal } = useEditorContext();

  useEffect(() => {
    if (parent) {
      const temp = files.items.find((file) => file.id === parent);
      setSelectedParent(temp);
      setNotes(temp.items);
    }
  }, [parent, currentlySelectedTag, files]);

  return (
    <StyledFilterView>
      <div className="search-wrapper">
        <div className="filter-view-header">
          <button>
            <BiFilterAlt size={22} />
          </button>
          <h3>Notes</h3>
          <button onClick={() => openModal("", "create", "create-file")}>
            <AiOutlineFileAdd size={22} />
          </button>
        </div>
        <Input
          value={value}
          action={(e) => setValue(e.target.value)}
          placeholder="Search..."
          type="search"
        />
      </div>
      {selectedParent ? (
        <div className="folder-name">
          <h3>{selectedParent.name}</h3>
          <IoEllipsisVertical />
        </div>
      ) : (
        ""
      )}
      <section className="title-list">
        <ul>
          {notes.map((note, index) => {
            return (
              <File key={note.id} index={index}>
                {note.name}
              </File>
            );
          })}
        </ul>
      </section>
    </StyledFilterView>
  );
};

const StyledFilterView = styled.section`
  width: 280px;
  background-color: #f9f9f9;

  .folder-name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 10px;
    border-bottom: 1px solid ${(props) => props.theme.inputBorder};
    margin-bottom: 8px;

    h3 {
      font-size: 16px;
      color: ${(props) => props.theme.textColor};
      font-weight: 500;
    }

    svg {
      transition: all 0.3s ease;
      cursor: pointer;

      :hover {
        fill: ${(props) => props.theme.primary};
      }
    }
  }

  .search-wrapper {
    padding: 0 10px;

    .filter-view-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;

      h3 {
        font-weight: 300;
        font-size: 22px;
      }

      svg {
        fill: gray;
        transition: fill ease 0.3s;

        :hover {
          fill: dodgerblue;
        }
      }
    }
  }

  button {
    width: 30px;
    background-color: transparent;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export default Filter;
