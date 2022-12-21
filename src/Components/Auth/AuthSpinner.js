import React from "react";
import styled from "styled-components";
import Spinner from "../Spinner";

const AuthSpinner = () => {
	return (
		<StyledAuthWrapper>
			<Spinner />
		</StyledAuthWrapper>
	);
};

const StyledAuthWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	place-items: center;
`;

export default AuthSpinner;
