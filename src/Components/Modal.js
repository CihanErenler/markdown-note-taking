import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { useEditorContext } from "../Context/EditorContext";

const Modal = () => {
  const { closeModal } = useEditorContext();
  const [value, setValue] = useState("Untitled");
  const element = useRef(null);

  const handleInputChange = (e) => {
    setValue(e.target.value);
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

  return (
    <StyledModal className="modal" ref={element}>
      <div>
        <h1>New Folder</h1>
        <Input value={value} action={handleInputChange} focused={true} />
        <section>
          <Button variant="outlined-danger">Cancel</Button>
          <Button variant="outlined">Create</Button>
        </section>
      </div>
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

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  div {
    background-color: ${(props) => props.theme.bg1};
    width: 500px;
    padding: 40px;
    border-radius: 4px;
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
