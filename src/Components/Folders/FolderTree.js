import Folder from "./Folder";
import { useEditorContext } from "../../Context/EditorContext";
import styled from "styled-components";
import IconButton from "../IconButton";
import { VscNewFolder } from "react-icons/vsc";
import { BsFillCollectionFill } from "react-icons/bs";
import { FaStickyNote } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";

const FolderTree = () => {
	const { files, openModal } = useEditorContext();

	return (
		<StyledFolderTree>
			<div className="folder-tree-title">
				<div>
					<FaStickyNote size={18} color="orange" />
					<h1>All Notes </h1>
				</div>
			</div>
			<div className="folder-tree-title">
				<div>
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
			<div className="folder-tree-title">
				<div>
					<IoMdPricetags size={20} color="orange" />
					<h1>Tags </h1>
				</div>
			</div>
		</StyledFolderTree>
	);
};

const StyledFolderTree = styled.section`
	position: relative;

	.folder-tree-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;

		div {
			display: flex;
			align-items: center;

			h1 {
				color: ${(props) => props.theme.bg1};
				/* text-transform: uppercase; */
				padding: 10px;
				font-weight: 500;
				letter-spacing: 1px;
			}
		}
	}
`;

export default FolderTree;
