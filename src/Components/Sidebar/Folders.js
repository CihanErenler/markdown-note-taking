import styled from "styled-components";
import logo from "../../Assets/logo.svg";
import FolderTree from "../Folders/FolderTree";
import { useEditorContext } from "../../Context/EditorContext";

const Parent = () => {
	const { openShortcutsModal } = useEditorContext();
	return (
		<StyledFolders>
			<StyledLogo src={logo} alt="logo" />
			<FolderTree />
			<div className="shortcuts-btn" onClick={openShortcutsModal}>
				Shortcuts
			</div>
		</StyledFolders>
	);
};

const StyledFolders = styled.div`
	flex: 1;
	background-color: ${(props) => props.theme.sidebarBg};
	padding: 10px;
	position: relative;

	.shortcuts-btn {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		background-color: lightskyblue;
		padding: 4px 10px;
		border-radius: 4px;
		cursor: pointer;
		transition: background 0.3s ease;
		border: none;
		font-size: 13px;

		:hover {
			background-color: lightblue;
		}
	}
`;

const StyledLogo = styled.img`
	display: block;
	width: 70%;
	padding: 4px 0px 20px 20px;
`;

export default Parent;
