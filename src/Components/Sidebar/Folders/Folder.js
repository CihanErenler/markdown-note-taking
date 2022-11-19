import styled from "styled-components";
import { useEditorContext } from "../../../Context/EditorContext";
import { AiOutlineFolder } from "react-icons/ai";

function Folder({ explorer }) {
	const { selectParent, parent } = useEditorContext();

	return (
		<StyledFolder key={explorer.id}>
			<div
				className={`parent-wrapper ${parent === explorer.id ? "selected" : ""}`}
				onClick={() => selectParent(explorer.id)}
			>
				<div className="title">
					<AiOutlineFolder size={18} />{" "}
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
		padding: 4px 0 4px 24px;
		cursor: pointer;
		transition: all ease 0.3s;

		:hover {
			background-color: ${(props) => props.theme.sidebarHover};
		}

		.title {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex: 1;
			position: relative;

			h1 {
				margin-left: 5px;
			}
		}

		.parent-title {
			text-transform: capitalize;
			font-size: 13px;
			flex: 1;
			font-weight: 300;
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

	.parent-wrapper.selected {
		background-color: ${(props) => props.theme.sidebarSelected};
	}
`;

export default Folder;
