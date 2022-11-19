import React from "react";
import Tag from "./Tag";
import { IoMdPricetags } from "react-icons/io";
import { useEditorContext } from "../../Context/EditorContext";

const Tags = () => {
	const { selectTag, tags } = useEditorContext();
	return (
		<div className="folder-tree-title tags">
			<div className="tree-title">
				<IoMdPricetags size={20} color="orange" />
				<h1>Tags </h1>
			</div>
			<div className="tag-list">
				<ul>
					{tags.map((tag) => {
						return <Tag key={tag.name} tag={tag} action={selectTag} />;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Tags;
