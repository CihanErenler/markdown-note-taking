import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import themes from "./theme";
import PreviewContainer from "./Components/PreviewContainer";

function App() {
	const [currentTheme, setCurrentTheme] = useState(false);
	const [code, setCode] = useState("");

	return (
		<div>
			<GlobalStyles />
			<ThemeProvider theme={currentTheme ? themes.dark : themes.default}>
				<PreviewContainer code={code} />
			</ThemeProvider>
		</div>
	);
}

const GlobalStyles = createGlobalStyle`
	*, *::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body {
		font-family: "Poppins", sans-serif;
	}

	h1,h2,h3,h4,h5,h6,p, hr, ul, ol, blockquote {
		margin-bottom: 10px
	}

	h1 {font-size: 46px}
	h2 {font-size: 36px}
	h3 {font-size: 28px}
	h4 {font-size: 24px}
	h5 {font-size: 20px}
	h6 {font-size: 16px}

	ol, ul {
		padding: 20px 20px 0 20px;
	}

	hr {
		border: 1px solid #f1f1f1;
	}

	blockquote {
		padding: 10px 30px;
		background-color: #f4f4f4;
		border-left: 5px solid #ccc;
	}

	blockquote p {
		margin-bottom: 0;
	}

	blockquote h1 {margin-bottom: 0;}
	blockquote h2 {margin-bottom: 0;}
	blockquote h3 {margin-bottom: 0;}
	blockquote h4 {margin-bottom: 0;}
	blockquote h5 {margin-bottom: 0;}
	blockquote h6 {margin-bottom: 0;}

`;

export default App;
