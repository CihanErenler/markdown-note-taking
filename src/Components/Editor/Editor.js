import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import "./Editor.css";
import { useEditorContext } from "../../Context/EditorContext";
import styled from "styled-components";

const Editor = () => {
  const { code, setCode } = useEditorContext();

  const handleChange = (value, viewUpdate) => {
    setCode(value);
  };

  return (
    <StyledCodeMirror>
      <CodeMirror
        value={code}
        extensions={[markdown({ base: markdownLanguage })]}
        onChange={handleChange}
        height="100%"
        theme={githubLight}
      />
    </StyledCodeMirror>
  );
};

const StyledCodeMirror = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.bg2};
  height: 100%;
  overflow: auto;
`;

export default Editor;
