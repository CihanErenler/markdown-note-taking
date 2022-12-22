import React from "react";
import styled from "styled-components";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import { useEditorContext } from "../../Context/EditorContext";

const File = ({ children, index, id }) => {
	const { updateSelectedFile, currentlySelectedFile } = useEditorContext();
	return (
		<StyledFile>
			<div
				onClick={() => updateSelectedFile(id)}
				className={currentlySelectedFile === id ? "selected" : ""}
			>
				{index + 1} - {children}
				<div>
					<RiEdit2Line size={16} />
					<RiDeleteBinLine size={16} />
				</div>
			</div>
		</StyledFile>
	);
};

const StyledFile = styled.li`
	margin: 2px 5px;

	> div {
		font-size: 14px;
		background-color: ${(props) => props.theme.bg1};
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px 10px;
		border: 1px solid ${(props) => props.theme.borderLight};
		border-radius: 6px;
		cursor: pointer;
		transition: all 0.3s ease;

		:hover {
			border-color: ${(props) => props.theme.buttonFocus};
		}
	}

	svg {
		color: ${(props) => props.theme.textColorLighter};
	}

	.selected {
		background-color: ${(props) => props.theme.sidebarActive};
		border: 1px solid ${(props) => props.theme.buttonFocus};
	}
`;

export default File;
