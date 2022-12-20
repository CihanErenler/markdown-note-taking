import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../Components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useAuthContext } from "../Context/AuthContext";

const RootLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { user } = useAuthContext();

	useEffect(() => {
		if (user) {
			navigate("/notes");
		}
	}, [user]);

	return (
		<StyledRootElement>
			{location.pathname !== "/notes" ? <Header /> : ""}
			<main>
				<Outlet />
			</main>
		</StyledRootElement>
	);
};

const StyledRootElement = styled.section`
	main {
		height: calc(100vh - 60px);
	}
`;

export default RootLayout;
