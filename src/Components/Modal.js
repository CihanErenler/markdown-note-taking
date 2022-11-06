import { useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { useEditorContext } from "../Context/EditorContext";

const Modal = () => {
  const {
    closeModal,
    createFolder,
    createFile,
    modalValue,
    updateModalValue,
    modalMode,
    rename,
    isModalOpen,
    handleDelete,
  } = useEditorContext();
  const element = useRef(null);

  const generateModalTitle = (mode) => {
    let title = "New Folder";
    if (mode === "create-file") title = "New File";
    if (mode === "edit-file") title = "Rename File";
    if (mode === "edit-folder") title = "Rename Folder";
    return title;
  };

  const handleClick = () => {
    console.log(modalValue);
    if (modalMode === "create-folder") createFolder();
    if (modalMode === "create-file") createFile();
    if (modalMode === "edit-folder" || modalMode === "edit-file") rename();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && isModalOpen) {
      handleClick();
    }
  };

  useEffect(() => {
    const tempElem = element.current;
    const handleClick = (e) => {
      if (
        e.target.classList.contains("modal") ||
        e.target.textContent === "Cancel"
      ) {
        closeModal();
      }
    };

    tempElem.addEventListener("click", handleClick);
    return () => {
      tempElem.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const tempElem = element.current;

    tempElem.addEventListener("keypress", handleKeyPress);
    return () => {
      tempElem.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleKeyPress]);

  const generatedTitle = generateModalTitle(modalMode);

  return (
    <StyledModal className="modal" ref={element}>
      {modalMode !== "delete-item" ? (
        <div className="inner-modal">
          <h1>{generatedTitle}</h1>
          <Input value={modalValue} action={updateModalValue} focused={true} />
          <section>
            <Button variant="secondary" action={closeModal}>
              Cancel
            </Button>
            <Button disabled={!modalValue} action={handleClick}>
              {modalMode === "edit-folder" || modalMode === "edit-file"
                ? "Save"
                : "Create"}
            </Button>
          </section>
        </div>
      ) : (
        <div className="inner-modal">
          <h1>Are you sure?</h1>
          <section>
            <Button variant="secondary" action={closeModal}>
              Cancel
            </Button>
            <Button variant="danger" action={handleDelete}>
              Delete
            </Button>
          </section>
        </div>
      )}
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 10, 20, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadein 0.3s forwards ease;
  z-index: 9999;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .inner-modal {
    background-color: ${(props) => props.theme.bg1};
    width: 500px;
    padding: 40px;
    border-radius: 10px;
    animation: fadein 0.3s forwards ease;
    opacity: 0;
    transform: scale(0.9);

    h1 {
      padding-bottom: 20px;
      font-weight: 500;
    }
  }

  section {
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Modal;
