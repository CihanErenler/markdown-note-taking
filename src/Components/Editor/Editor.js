import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
// eslint-disable-next-line no-unused-vars
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import "./Editor.css";
import { useEditorContext } from "../../Context/EditorContext";
import styled from "styled-components";
import { BsFullscreenExit, BsFullscreen } from "react-icons/bs";

const Editor = () => {
	const { code, updateCode, fullscreen, toggleFullscreen } = useEditorContext();

	const handleChange = (value, viewUpdate) => {
		updateCode(value);
	};

	return (
		<StyledCodeMirror fullscreen={fullscreen}>
			<span className="toggle-btn" onClick={() => toggleFullscreen("editor")}>
				{fullscreen !== "editor" ? (
					<BsFullscreen size={16} />
				) : (
					<BsFullscreenExit size={16} />
				)}
			</span>
			<CodeMirror
				value={code.code}
				extensions={[markdown({ base: markdownLanguage })]}
				onChange={handleChange}
				height="100%"
				theme={githubLight}
			/>
		</StyledCodeMirror>
	);
};

const StyledCodeMirror = styled.div`
	background-color: ${(props) => props.theme.bg2};
	height: calc(100vh - 55px);
	overflow: auto;
	position: relative;

	.deneme {
		height: 100%;
		overflow: auto;
	}

	.toggle-btn {
		background-color: ${(props) => props.theme.bg1};
		border: 1px solid #e3e0e0;
		border-radius: 4px;
		position: absolute;
		top: 5px;
		right: 5px;
		z-index: 99;
		width: 35px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;

		::before {
			position: absolute;
			content: "Toggle Fullscreen";
			top: 3px;
			left: -125px;
			background-color: ${(props) => props.theme.sidebarBg};
			color: ${(props) => props.theme.bg1};
			padding: 4px;
			border-radius: 4px;
			visibility: hidden;
			opacity: 0;
			transition: all 0.5s ease;
			transition-delay: 1s;
			font-size: 12px;
			display: block;
			width: 120px;
			text-align: center;
		}

		:hover {
			border-color: ${(props) => props.theme.textSelect};
			background-color: ${(props) => props.theme.bg3};
			color: ${(props) => props.theme.textSelect};
		}

		:hover::before {
			visibility: visible;
			opacity: 1;
		}
	}
`;

export default Editor;
