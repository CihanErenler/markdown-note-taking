import React from "react";
import ReactMarkdown from "react-markdown";
import { useEditorContext } from "../Context/EditorContext";
import styled from "styled-components";

const Preview = () => {
	const { code } = useEditorContext();
	return (
		<StyledPreview>
			<ReactMarkdown>{code}</ReactMarkdown>
		</StyledPreview>
	);
};

const StyledPreview = styled.div`
	padding: 20px;
	flex: 1;
`;

export default Preview;
