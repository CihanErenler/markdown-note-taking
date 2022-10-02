import { useState } from "react";
import PreviewContainer from "../Components/PreviewContainer";
import Sidebar from "../Components/Sidebar/Sidebar";
import styled from "styled-components";
import Split from "react-split";
import Modal from "../Components/Modal";

const UserPage = ({ code }) => {
	const [isModalOpen, setIsModalOpen] = useState(true);

	return (
		<StyledUserPage>
			<Split
				sizes={[20, 80]}
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
