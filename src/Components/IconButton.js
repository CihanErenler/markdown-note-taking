import styled from "styled-components";

const IconButton = ({ children, action }) => {
	return <StyledIconButton onClick={action}>{children}</StyledIconButton>;
};

const StyledIconButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		transition: all 0.3s ease;
		fill: lightblue;
	}

	:hover {
		svg {
			fill: ${(props) => props.theme.bg1};
		}
	}
`;

export default IconButton;
