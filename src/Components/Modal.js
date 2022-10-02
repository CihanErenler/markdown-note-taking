import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const Modal = () => {
	const [value, setValue] = useState("Untitled");

	const handleInputChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<StyledModal>
			<div>
				<h1>New Folder</h1>
				<Input value={value} action={handleInputChange} focused={true} />
				<section>
					<Button variant="cancel">Cancel</Button>
					<Button>Create</Button>
				</section>
			</div>
		</StyledModal>
	);
};

const StyledModal = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 10, 20, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;

	div {
		background-color: ${(props) => props.theme.bg1};
		width: 500px;
		padding: 40px;
		border-radius: 4px;

		h1 {
			padding-bottom: 20px;
			font-weight: 500;
		}
	}

	section {
		padding-top: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export default Modal;
