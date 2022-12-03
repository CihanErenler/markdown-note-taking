import styled from "styled-components";
import Amount from "../Sidebar/Amount";
import { useEditorContext } from "../../Context/EditorContext";
import { MdFolder } from "react-icons/md";

function Folder({ explorer }) {
	const { selectParent, parent } = useEditorContext();

	return (
		<StyledFolder key={explorer.id}>
			<div
				className={`parent-wrapper ${parent === explorer.id ? "selected" : ""}`}
				onClick={() => selectParent(explorer.id)}
			>
				<div className="title">
					<span className="title-wrapper">
						<MdFolder size={18} />{" "}
						<h1 className="parent-title">{explorer.name}</h1>
					</span>
					<Amount amount={explorer.items.length} />
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
		</StyledFolder>
	);
}

const StyledFolder = styled.section`
	color: ${(props) => props.theme.bg1};

	.parent-wrapper {
		padding: 4px 10px 4px 24px;
		cursor: pointer;
		transition: all ease 0.3s;
		border-radius: 6px;

		:hover {
			background-color: #e9f5fe;
			color: #0c7fda;
		}

		.title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
			width: 100% !important;

			span.title-wrapper {
				display: flex;
				align-items: center;

				h1 {
					display: inline-block;
					margin-left: 5px;
				}
			}
		}

		.parent-title {
			text-transform: capitalize;
			font-size: 13px;
			flex: 1;
			font-weight: 400;
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
	}

	.parent-wrapper.selected {
		background-color: ${(props) => props.theme.primary};
		color: ${(props) => props.theme.bg1};
	}
`;

export default Folder;
