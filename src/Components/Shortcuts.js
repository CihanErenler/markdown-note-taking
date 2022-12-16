import { useEffect, useRef } from "react";
import styled from "styled-components";
import ShortcutKey from "./ShortcutKey";
import InnderModal from "./InnerModal";
import { useEditorContext } from "../Context/EditorContext";

const Shortcuts = () => {
	const { closeShortcutsModal } = useEditorContext();
	const element = useRef(null);

	const generateCombineKeys = (keys) => {
		const combinedKeys = keys.map((key, index) => {
			if (key === "+") {
				return (
					<span key={index} className="plus">
						{key}
					</span>
				);
			}
			return <ShortcutKey key={index}>{key}</ShortcutKey>;
		});
		return combinedKeys;
	};

	const focusEditor = generateCombineKeys(["Ctrl", "+", "Alt", "+", "1"]);
	const focusPreview = generateCombineKeys(["Ctrl", "+", "Alt", "+", "2"]);
	const hideSidebar = generateCombineKeys(["Ctrl", "+", "Alt", "+", "H"]);
	const saveWork = generateCombineKeys(["Ctrl", "+", "S"]);

	useEffect(() => {
		const tempElem = element.current;
		const handleClick = (e) => {
			if (e.target.classList.contains("modal")) {
				closeShortcutsModal();
			}
		};
		tempElem.addEventListener("click", handleClick);
		return () => {
			tempElem.removeEventListener("click", handleClick);
		};
	}, [closeShortcutsModal]);

	return (
		<StyledShortcuts className="modal" ref={element}>
			<InnderModal>
				<h1>Save</h1>
				<div className="shortcuts">{saveWork} = Save</div>
				<h1>Editor focus</h1>
				<div className="shortcuts">{focusEditor} = Focus Editor</div>
				<div className="shortcuts">{focusPreview} = Focus Preview</div>
				<h1>Sidebar</h1>
				<div className="shortcuts">{hideSidebar} = Toggle Sidebar</div>
			</InnderModal>
		</StyledShortcuts>
	);
};

const StyledShortcuts = styled.section`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 10, 20, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
	opacity: 0;
	animation: fadein 0.3s forwards ease;
	z-index: 9999;

	.shortcuts {
		margin-bottom: 10px;
		.plus {
			margin: 0 10px;
		}
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	h1 {
		margin-bottom: 10px;
		font-weight: 700;
		font-size: 18px;
		border-bottom: 1px solid lightgray;
	}
	section {
		padding-top: 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export default Shortcuts;
