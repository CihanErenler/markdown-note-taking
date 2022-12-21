import { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import themes from "./theme";
import styled from "styled-components";
import { ToastContainer, Slide } from "react-toastify";
import { useEditorContext } from "./Context/EditorContext";
import { useAuthContext } from "./Context/AuthContext";
import CustomRouter from "./CustomRouter";
import AuthWrapper from "./Components/Auth/AuthWrapper.js";
import "react-toastify/dist/ReactToastify.css";
import "./Split.css";

function App() {
	const [currentTheme, setCurrentTheme] = useState(false);
	const { files, selectParent } = useEditorContext();
	const { getUserFromLocalStorage } = useAuthContext();

	useEffect(() => {
		if (files.items.length > 0) {
			selectParent(files.items[0].id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		getUserFromLocalStorage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Main>
			<GlobalStyles />
			<ThemeProvider theme={currentTheme ? themes.dark : themes.default}>
				<AuthWrapper>
					<CustomRouter />
				</AuthWrapper>
			</ThemeProvider>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				transition={Slide}
				rtl={false}
				closeOnClick
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</Main>
	);
}

const Main = styled.main`
	height: 100vh;
`;

export default App;
