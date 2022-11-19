import styled from "styled-components";
import { useEditorContext } from "../../Context/EditorContext";
import { FaFolder } from "react-icons/fa";

function Folder({ explorer }) {
	const { toggleFolderTree, openModal, handleSelectFile } = useEditorContext();

	const handleClick = (item) => {
		if (item.isFolder) toggleFolderTree(item.id);
		else handleSelectFile(item.id);
	};
	return (
		<StyledFolder key={explorer.id}>
			<div className="parent-wrapper">
				<div className="title" onClick={() => handleClick(explorer)}>
					<FaFolder size={20} color="orange" />
					<h1 className="parent-title">{explorer.name}</h1>
				</div>
				{/* {explorer.isFolder ? (
					<div className="buttons">
						<IconButton
							action={() => openModal(explorer.id, "create", "create-file")}
						>
							{<VscNewFile size={18} />}
						</IconButton>
						<IconButton
							action={() => openModal(explorer.id, "create", "create-folder")}
						>
							{<VscNewFolder size={16} />}
						</IconButton>
						<IconButton
							action={() => openModal(explorer.id, "delete", "delete-item")}
						>
							{<MdDeleteOutline size={20} />}
						</IconButton>
						<IconButton
							action={() =>
								openModal(
									{ id: explorer.id, name: explorer.name },
									"edit",
									"edit-folder"
								)
							}
						>
							{<VscEdit size={18} />}
						</IconButton>
					</div>
				) : (
					<div className="buttons">
						<IconButton
							action={() => openModal(explorer.id, "delete", "delete-item")}
						>
							{<MdDeleteOutline size={20} />}
						</IconButton>
						<IconButton
							action={() =>
								openModal(
									{ id: explorer.id, name: explorer.name },
									"edit",
									"edit-file"
								)
							}
						>
							{<VscEdit size={20} />}
						</IconButton>
					</div>
				)} */}
			</div>
			<div className="content">
				{explorer.isFolder
					? explorer.items.map((explore) => (
							<Folder key={explore.id} explorer={explore} />
					  ))
					: ""}
			</div>
		</StyledFolder>
	);
}

const StyledFolder = styled.section`
	color: ${(props) => props.theme.bg1};

	.parent-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 4px 0 4px 30px;
		cursor: pointer;
		transition: all ease 0.3s;

		:hover {
			background-color: #29425e;
		}

		.bold {
			font-weight: 400 !important;
		}

		.title {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex: 1;
			position: relative;
		}

		.parent-title {
			text-transform: capitalize;
			font-size: 14px;
			margin: 0 10px;
			flex: 1;
			font-weight: 200;
			transition: all 0.3s ease;
			white-space: nowrap;
			text-overflow: ellipsis;
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-khtml-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			position: relative;
		}

		.buttons {
			display: none;
			gap: 3px;
		}

		:hover .buttons {
			display: flex;
		}
	}
`;

export default Folder;
