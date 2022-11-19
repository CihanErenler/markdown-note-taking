import React from "react";
import IconButton from "../IconButton";
import { VscNewFolder } from "react-icons/vsc";
import { BsFillCollectionFill } from "react-icons/bs";
import Folder from "./Folder";
import { useEditorContext } from "../../Context/EditorContext";

const Folders = () => {
	const { files, openModal } = useEditorContext();
	return (
		<section>
			<div className="folder-tree-title">
				<div className="tree-title">
					<BsFillCollectionFill size={18} color="orange" />
					<h1>Folders </h1>
				</div>
				<IconButton>
					<VscNewFolder
						size={20}
						onClick={() => openModal(1, "create", "create-folder")}
					/>
				</IconButton>
			</div>
			{files.items.map((item) => {
				return <Folder key={item.id} explorer={item} />;
			})}
		</section>
	);
};

export default Folders;
