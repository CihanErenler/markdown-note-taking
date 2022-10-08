import React from "react";
import Folder from "./Folder";
import { FaFolderPlus } from "react-icons/fa";
import { useEditorContext } from "../../Context/EditorContext";
import styled from "styled-components";

const FolderTree = () => {
	const { files, openModal } = useEditorContext();

	return (
		<StyledFolderTree>
			<h1 className="folder-tree-title">Folders</h1>
			{files.items.map((item) => {
				return (
					<Folder
						key={item.id}
						explorer={item}
						action={openModal}
						icon={<FaFolderPlus size={20} />}
					/>
				);
			})}
		</StyledFolderTree>
	);
};

const StyledFolderTree = styled.section`
	h1.folder-tree-title {
		color: ${(props) => props.theme.bg1};
		text-transform: uppercase;
		padding: 10px 30px;
		font-weight: 500;
		letter-spacing: 1px;
	}
`;

export default FolderTree;
