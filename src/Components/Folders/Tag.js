import React from "react";
import { useEditorContext } from "../../Context/EditorContext";

const Tag = ({ tag, action }) => {
	const { currentlySelectedTag } = useEditorContext();
	return (
		<li
			key={tag.name}
			onClick={() => action(tag.name)}
			className={tag.name === currentlySelectedTag ? "selected" : ""}
		>
			<span style={{ backgroundColor: tag.color }}></span>
			{tag.name}
		</li>
	);
};

export default Tag;
