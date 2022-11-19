import Folders from "./Folders";
import Tags from "./Tags";
import { FaStickyNote } from "react-icons/fa";

import { StyledFolderTree } from "./StyledFolders";

const FolderTree = () => {
	return (
		<StyledFolderTree>
			<div className="folder-tree-title">
				<div className="tree-title">
					<FaStickyNote size={18} color="orange" />
					<h1>All Notes </h1>
				</div>
			</div>
			<Folders />
			<Tags />
		</StyledFolderTree>
	);
};

export default FolderTree;
