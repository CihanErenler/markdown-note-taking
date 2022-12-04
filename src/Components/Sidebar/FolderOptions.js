import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const FolderOptions = ({ showOps, setShowOps, buttonRef }) => {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      console.log(event.target);
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        buttonRef.current !== event.target
      ) {
        setShowOps(!showOps);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <StyledFolderOption ref={ref}>
      <div>Rename</div>
      <div className="delete">Delete</div>
    </StyledFolderOption>
  );
};

const StyledFolderOption = styled.div`
  background-color: ${(prosp) => prosp.theme.bg1};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 4px;
  position: absolute;
  right: 12px;
  top: 25px;
  animation: fade-in 0.3s ease;
  transform-origin: top right;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .delete {
    color: ${(props) => props.theme.danger};
  }

  div {
    padding: 2px 6px;
    font-size: 13px;
    cursor: pointer;

    :first-child {
      border-bottom: 1px solid ${(props) => props.theme.inputBorder};
    }

    :hover {
      background-color: ${(props) => props.theme.seperator};
    }
  }
`;

export default FolderOptions;
