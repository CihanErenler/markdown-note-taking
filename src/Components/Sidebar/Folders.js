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
	display: block;
	width: 70%;
	padding: 20px 0px 20px 20px;
`;

export default Parent;
