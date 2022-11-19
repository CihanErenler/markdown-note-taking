import { useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { useEditorContext } from "../../Context/EditorContext";

const Filter = () => {
	const [value, setValue] = useState("");
	const { openModal } = useEditorContext();

	return (
		<StyledFilterView>
			<div className="search-wrapper">
				<div className="filter-view-header">
					<button>
						<BiFilterAlt size={22} />
					</button>
					<h3>Notes</h3>
					<button
					// onClick={() => openModal(explorer.id, "create", "create-file")}
					>
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
			<section className="title-list"></section>
		</StyledFilterView>
	);
};

const StyledFilterView = styled.section`
	width: 280px;
	background-color: #f9f9f9;

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
`;

export default Filter;
