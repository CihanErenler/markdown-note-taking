import React from "react";
import styled from "styled-components";
import Parent from "./Parent";

const Sidebar = () => {
	return (
		<StyledSidebar>
			<Parent />
		</StyledSidebar>
	);
};

const StyledSidebar = styled.section`
	width: 300px;
	max-width: 500px;
	min-width: 200px;
	display: flex;
	border-right: 1px solid ${(props) => props.theme.inputBorder};
`;

export default Sidebar;
