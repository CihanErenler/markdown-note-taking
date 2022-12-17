import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Input from "../Input";
import File from "./File";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { useEditorContext } from "../../Context/EditorContext";
import { IoEllipsisVertical } from "react-icons/io5";
import FolderOptions from "./FolderOptions";

const Filter = () => {
	const [showOps, setShowOps] = useState(false);
	const [notes, setNotes] = useState([]);
	const [selectedParent, setSelectedParent] = useState(null);
	const [value, setValue] = useState("");
	const { parent, currentlySelectedTag, files, openModal } = useEditorContext();
	const ref = useRef(null);

	useEffect(() => {
		if (parent) {
			const temp = files.items.find((file) => file.id === parent);
			setSelectedParent(temp);
			setNotes(temp.items);
			return;
		}
		setSelectedParent(null);
	}, [parent, currentlySelectedTag, files, selectedParent]);

	return (
		<StyledFilterView>
			<div className="search-wrapper">
				<div className="filter-view-header">
					<button>
						<BiFilterAlt size={22} />
					</button>
					<h3>Notes</h3>
					<button onClick={() => openModal("", "create", "create-file")}>
						<AiOutlineFileAdd size={22} />
					</button>
				</div>
				<Input
					value={value}
					action={(e) => setValue(e.target.value)}
					placeholder="Search..."
					type="search"
				/>
			</div>
			{selectedParent ? (
				<div className="folder-name">
					<h3>{selectedParent.name}</h3>
					<span onClick={() => setShowOps(!showOps)} ref={ref}>
						<IoEllipsisVertical />
					</span>
					{showOps ? (
						<FolderOptions
							showOps={showOps}
							setShowOps={setShowOps}
							buttonRef={ref}
						/>
					) : (
						""
					)}
				</div>
			) : (
				""
			)}
			<section className="title-list">
				{selectedParent ? (
					<ul>
						{notes.map((note, index) => {
							return (
								<File key={note.id} index={index}>
									{note.name}
								</File>
							);
						})}
					</ul>
				) : (
					<h4 className="placeholder">No item to show</h4>
				)}
			</section>
		</StyledFilterView>
	);
};

const StyledFilterView = styled.section`
	width: 280px;
	background-color: #f9f9f9;

	ul {
		list-style: none;
	}

	.folder-name {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 3px 10px;
		/* border-bottom: 1px solid ${(props) => props.theme.inputBorder}; */
		margin-bottom: 8px;
		position: relative;
		text-transform: capitalize;

		h3 {
			font-size: 16px;
			color: ${(props) => props.theme.textColor};
			font-weight: 500;
		}

		span {
			cursor: pointer;
			:hover svg {
				fill: ${(props) => props.theme.primary};
			}

			svg {
				transition: all 0.3s ease;
				pointer-events: none;
			}
		}
	}

	.search-wrapper {
		padding: 0 10px;

		.filter-view-header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 10px 0;

			h3 {
				font-weight: 300;
				font-size: 22px;
			}

			svg {
				fill: gray;
				transition: fill ease 0.3s;

				:hover {
					fill: dodgerblue;
				}
			}
		}
	}

	button {
		width: 30px;
		background-color: transparent;
		border: none;
		border-radius: 6px;
		cursor: pointer;
	}

	.title-list {
		.placeholder {
			text-align: center;
			color: gray;
		}
	}
`;

export default Filter;
