import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import themes from "./theme";
import styled from "styled-components";
import UserPage from "./Pages/UserPage";

import "./Split.css";

function App() {
  const [currentTheme, setCurrentTheme] = useState(false);
  const [code, setCode] = useState("");

  return (
    <Main>
      <GlobalStyles />
      <ThemeProvider theme={currentTheme ? themes.dark : themes.default}>
        <UserPage code={code} />
      </ThemeProvider>
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
`;

export default App;
