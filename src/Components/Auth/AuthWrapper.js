import React from "react";
import Spinner from "../Spinner";
import { useAuthContext } from "../../Context/AuthContext";
import styled from "styled-components";

const AuthWrapper = ({ children }) => {
	const { isUserLoading } = useAuthContext();
	if (isUserLoading) {
		return (
			<StyledAuthWrapper>
				<Spinner />
			</StyledAuthWrapper>
		);
	}

	return children;
};

const StyledAuthWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	place-items: center;
`;

export default AuthWrapper;
