import React from "react";
import styled from "styled-components";

const ShortcutKey = ({ children }) => {
	return <StyledShortKey>{children}</StyledShortKey>;
};

const StyledShortKey = styled.div`
	display: inline-flex;
	padding: 2px 8px;
	background-color: lightgray;
	border-radius: 6px;
	min-width: 30px;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 600;
`;

export default ShortcutKey;
