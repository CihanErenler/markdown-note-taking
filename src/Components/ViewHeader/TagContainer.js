import { useState, useEffect, useCallback } from "react";
import { GrClose } from "react-icons/gr";
import { useEditorContext } from "../../Context/EditorContext";
import styled from "styled-components";
import Tag from "./Tag";
import Colors from "./Colors";
import colors from "../../colors";

const TagContainer = ({ close, showContainer }) => {
	const [showColors, setShowColors] = useState(false);
	const [currentColor, setCurrentColor] = useState(colors[0]);
	const { tags, addNewTag, tagInput, updateTagInput, clearTagInput } =
		useEditorContext();

	const handleKeyPress = useCallback(
		(e) => {
			if (e.key === "Escape")
				if (showColors) {
					setShowColors((current) => {
						return !current;
					});
				} else {
					close(!showContainer);
				}
		},
		[close, showColors, showContainer]
	);

	useEffect(() => {
		window.addEventListener("keyup", handleKeyPress);
		return () => {
			window.removeEventListener("keyup", handleKeyPress);
		};
	}, [handleKeyPress]);

	useEffect(() => {
		clearTagInput();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<StyledTagContainer>
			<span className="close-btn" onClick={() => close(false)}>
				<GrClose size={16} />
			</span>
			<h5>Available tags: </h5>
			<div className="tags">
				{tags.map((tag) => (
					<Tag
						key={tag.name}
						tagName={tag.name}
						color={tag.color}
						isSelected={tag.selected}
					/>
				))}
			</div>
			<hr />
			<input
				type="text"
				placeholder="Add a new tag"
				onChange={updateTagInput}
				value={tagInput}
			/>
			<div className="colors-button" onClick={() => setShowColors(true)}>
				<span>Color</span>
				<div>
					<span style={{ backgroundColor: currentColor }}></span>
				</div>
			</div>
			{showColors ? (
				<Colors
					selected={currentColor}
					setCurrent={setCurrentColor}
					setShowColors={setShowColors}
				/>
			) : (
				""
			)}
			<button className="add-btn" onClick={() => addNewTag(currentColor)}>
				Add new tag
			</button>
		</StyledTagContainer>
	);
};

const StyledTagContainer = styled.div`
	width: 300px;
	background-color: ${(props) => props.theme.bg1};
	position: absolute;
	top: 30px;
	left: -15px;
	z-index: 1000;
	padding: 10px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	animation: fade-in 0.3s ease;
	transform-origin: top left;

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: scale(0.5);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.close-btn {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}

	h5 {
		font-weight: 500;
		margin-bottom: 10px;
		color: ${(props) => props.theme.textColorLight};
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 10px;
		gap: 5px;
	}

	input {
		width: 100%;
		border: 1px solid ${(props) => props.theme.inputBorder};
		height: 30px;
		border-radius: 6px;
		padding: 0 10px;
		background-color: ${(props) => props.theme.inputBg};
		margin: 10px 0;
	}

	.colors-button {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		position: relative;

		:hover {
			> div {
				border-color: ${(props) => props.theme.primary};
			}
		}

		> div {
			width: 50px;
			height: 30px;
			padding: 5px;
			border: 1px solid #ddd;
			border-radius: 4px;
			transition: all 0.3s ease;
			cursor: pointer;

			span {
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 4px;
				padding-left: 10px;
			}
		}
	}

	.add-btn {
		width: 100%;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${(props) => props.theme.sidebarBg};
		color: ${(props) => props.theme.bg1};
		border: none;
		border-radius: 6px;
		margin: 10px 0 0 0;
		opacity: 0.9;
		cursor: pointer;
		transition: all 0.3s ease;

		:hover {
			opacity: 1;
		}
	}
`;

export default TagContainer;
