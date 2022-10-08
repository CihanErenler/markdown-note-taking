import { useEffect } from "react";
import PreviewContainer from "../Components/PreviewContainer";
import Sidebar from "../Components/Sidebar/Sidebar";
import styled from "styled-components";
import Split from "react-split";
import Modal from "../Components/Modal";
import { useEditorContext } from "../Context/EditorContext";

const UserPage = ({ code }) => {
	const { isModalOpen, closeModal } = useEditorContext();

	useEffect(() => {
		const handleKeypress = (e) => {
			if (e.key === "Escape") {
				closeModal();
			}
		};
		document.addEventListener("keydown", handleKeypress);
		// cleanup
		return () => {
			document.removeEventListener("keypress", handleKeypress);
		};
	}, []);

	return (
		<StyledUserPage>
			<Split
				sizes={[15, 85]}
				direction="horizontal"
				cursor="col-resize"
				className="split-flex"
			>
				<Sidebar />
				<PreviewContainer code={code} />
			</Split>
			{isModalOpen ? <Modal /> : ""}
		</StyledUserPage>
	);
};

const StyledUserPage = styled.section`
	position: relative;
`;

export default UserPage;
