import { useEffect } from "react";
import PreviewContainer from "../Components/PreviewContainer";
import Sidebar from "../Components/Sidebar/Sidebar";
import styled from "styled-components";
import Modal from "../Components/Modal";
import { useEditorContext } from "../Context/EditorContext";

const UserPage = () => {
  const { isModalOpen, closeModal, currentlyOpenFile } = useEditorContext();

  useEffect(() => {
    const handleKeypress = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeypress);
    // cleanup
    return () => {
      document.removeEventListener("keypress", handleKeypress);
    };
  }, []);

  useEffect(() => {}, [currentlyOpenFile]);

  return (
    <StyledUserPage>
      <Sidebar />
      <PreviewContainer />
      {isModalOpen ? <Modal /> : ""}
    </StyledUserPage>
  );
};

const StyledUserPage = styled.section`
  position: relative;
  display: flex;
`;

export default UserPage;
