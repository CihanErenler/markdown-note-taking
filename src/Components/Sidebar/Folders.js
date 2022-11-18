import styled from "styled-components";
import logo from "../../Assets/logo.svg";

import FolderTree from "../Folders/FolderTree";

const Parent = () => {
  return (
    <StyledFolders>
      <StyledLogo src={logo} alt="logo" />
      <FolderTree />
    </StyledFolders>
  );
};

const StyledFolders = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.sidebarBg};
`;

const StyledLogo = styled.img`
  flex: 1;
  display: block;
  margin: 10px 30px 30px;
`;

export default Parent;
