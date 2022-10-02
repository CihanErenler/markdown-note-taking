import { useEffect, useRef } from "react";
import styled from "styled-components";

const Input = ({ value, action, placeholder, disabled, focused }) => {
	const input = useRef(null);

	useEffect(() => {
		if (focused) {
			input.current.select();
		}
	}, []);

	return (
		<StyledInput
			ref={input}
			value={value}
			onChange={action}
			placeholder={placeholder}
			disabled={disabled}
		/>
	);
};

const StyledInput = styled.input`
	border: 1px solid ${(props) => props.theme.inputBorder};
	background-color: ${(props) => props.theme.inputBorder};
	height: 40px;
	width: 100%;
	border-radius: 6px;
	padding: 0 20px;
	font-size: 18px;

	::-moz-selection {
		color: ${(props) => props.theme.bg1};
		background: ${(props) => props.theme.sidebarBg};
	}

	::selection {
		color: ${(props) => props.theme.bg1};
		background: ${(props) => props.theme.sidebarBg};
	}

	:focus {
		outline: none;
	}
`;

export default Input;
