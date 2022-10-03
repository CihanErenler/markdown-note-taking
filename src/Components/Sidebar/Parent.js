import React from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.svg";
import Spaces from "./Spaces";
import { MdAddCircleOutline } from "react-icons/md";
import { useEditorContext } from "../../Context/EditorContext";

const Parent = () => {
  const { openModal } = useEditorContext();
  return (
    <StyledParent>
      <StyledLogo src={logo} alt="logo" />
      <Spaces
        title="Folders"
        action={openModal}
        icon={<MdAddCircleOutline size={26} />}
      />
    </StyledParent>
  );
};

const StyledParent = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.sidebarBg};
`;

const StyledLogo = styled.img`
  width: 150px;
  display: block;
  margin: 10px 20px 50px;
`;

export default Parent;
