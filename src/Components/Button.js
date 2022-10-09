import styled, { css } from "styled-components";

const Button = ({ children, variant, type, disabled, action }) => {
	if (type === "cancel") {
		return (
			<StyledCancelButton disabled={disabled} onClick={action}>
				{children}
			</StyledCancelButton>
		);
	}

	if (variant === "secondary") {
		return (
			<StyledSecondary disabled={disabled} onClick={action}>
				{children}
			</StyledSecondary>
		);
	}

	if (variant === "outlined") {
		return (
			<StyledOutlined disabled={disabled} onClick={action}>
				{children}
			</StyledOutlined>
		);
	}
	if (variant === "outlined-danger") {
		return (
			<StyledOutlinedDanger disabled={disabled} onClick={action}>
				{children}
			</StyledOutlinedDanger>
		);
	}
	return (
		<StyledButton disabled={disabled} onClick={action}>
			{children}
		</StyledButton>
	);
};

const CommonStyles = css`
	width: 100px;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 6px;
	font-size: 18px;
	font-weight: 600;
	color: ${(props) => props.theme.bg1};
	cursor: pointer;
	background-color: transparent;
	transition: all 0.3s ease;
	opacity: 0.9;

	&:not(:disabled):hover {
		opacity: 1;
	}

	&:disabled {
		cursor: default;
		opacity: 0.5;
	}
`;

const StyledButton = styled.button`
	${CommonStyles}
	background-color: ${(props) => props.theme.primary};
`;

const StyledCancelButton = styled.button`
	${CommonStyles}
	background-color: ${(props) => props.theme.danger};
`;

const StyledOutlinedDanger = styled.button`
	${CommonStyles}
	border: 2px solid ${(props) => props.theme.danger};
	color: ${(props) => props.theme.danger};
`;

const StyledOutlined = styled.button`
	${CommonStyles}
	border: 2px solid ${(props) => props.theme.primary};
	color: ${(props) => props.theme.primary};
`;

const StyledSecondary = styled.button`
	${CommonStyles}
	background-color: ${(props) => props.theme.sidebarBg};
`;

export default Button;
