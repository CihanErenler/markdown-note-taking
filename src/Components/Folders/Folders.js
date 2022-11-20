import React from "react";
import IconButton from "../IconButton";
import { VscNewFolder } from "react-icons/vsc";
import { BsFillCollectionFill } from "react-icons/bs";
import Folder from "./Folder";
import { useEditorContext } from "../../Context/EditorContext";
import Amount from "../Sidebar/Amount";

const Folders = () => {
	const { files, openModal } = useEditorContext();
	return (
		<section>
			<div className="folder-tree-title">
				<div className="tree-title">
					<span>
						<BsFillCollectionFill size={18} color="orange" />
						<h1>Folders </h1>
					</span>
					<div className="title-group">
						<IconButton>
							<VscNewFolder
								size={18}
								onClick={() => openModal(1, "create", "create-folder")}
							/>
						</IconButton>
						<Amount amount={1} />
					</div>
				</div>
			</div>
			{files.items.map((item) => {
				return <Folder key={item.id} explorer={item} />;
			})}
		</section>
	);
};

export default Folders;