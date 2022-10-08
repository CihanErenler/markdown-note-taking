import React from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.svg";

import FolderTree from "../Folders/FolderTree";

const Parent = () => {
	return (
		<StyledParent>
			<StyledLogo src={logo} alt="logo" />
			<FolderTree />
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
	margin: 10px 30px 50px;
`;

export default Parent;
